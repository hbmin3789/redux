import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import {nextFrame} from '../reducers/index';
import MatrixItem from '../libs/MatrixItem';

const Canvas = styled.canvas`
    width: 50rem;
    height: 30rem;
`;

export const Matrix = () => {
    
    const backgroundReducer =  useSelector((state) => {
        return (state as any).backgroundReducer;
    });
    

    let dispatch = useDispatch();
    let [matrixItems, setMatrixItems] = React.useState<Array<MatrixItem>>(new Array<MatrixItem>());
    for(let i = 0;i<100;i++){
        matrixItems.push(new MatrixItem());
    }
    let canvasRef = React.useRef<HTMLCanvasElement>(null);

    window.setInterval(()=>{        
        dispatch(nextFrame(matrixItems));
        if(canvasRef.current){
            let canvas = canvasRef.current;
            let ctx = canvas.getContext('2d'); 
            if(ctx)
                ctx.clearRect(0, 0, canvas.width, canvas.height); 
                      
            matrixItems.forEach(x=>{                
                if(ctx) {
                    ctx.font = "10px Arial";                    
                    ctx.fillStyle = backgroundReducer.foreground;

                    if(x.isActive){
                        let canvas = canvasRef.current;
                        if(canvas) {
                            let width = canvas.width * (x.x / 100);
                            let height = canvas.height * (x.y / 100);
                            
                            ctx.fillText(x.char, width, height);
                        }
                        
                        
                    }
                }
            });
        }

    }, 20);

    return (
        <Canvas ref={canvasRef}>

        </Canvas>
    );
}

export default Matrix;