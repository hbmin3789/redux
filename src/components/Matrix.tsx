import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { nextFrame } from '../reducers/index';
import MatrixItem from '../libs/MatrixItem';

const Canvas = styled.canvas`
    width: 50rem;
    height: 30rem;
`;

let handle = -10;

export const Matrix = () => {
    
    let dispatch = useDispatch();
    let [matrixItems, setMatrixItems] = React.useState<Array<MatrixItem>>(new Array<MatrixItem>()); 
    let canvasRef = React.useRef<HTMLCanvasElement>(null);

    const backgroundReducer =  useSelector((state) => {
        return (state as any).backgroundReducer;
    });

    if (matrixItems.length === 0) {
        for(let i = 0;i<100;i++) matrixItems.push(new MatrixItem());
    }

    if (handle !== -10) {

    }
        window.clearInterval(handle);


    handle = window.setInterval(()=>{        
        dispatch(nextFrame(matrixItems));
        if(canvasRef.current){
            let canvas = canvasRef.current;
            let ctx = canvas.getContext('2d'); 
            if(ctx){
                let canvas = canvasRef.current;
                ctx.clearRect(0, 0, canvas.width, canvas.height); 
                ctx.fillStyle = backgroundReducer.background;
                ctx.fillRect(0, 0, canvas.width, canvas.height);
            }
                      
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
        <Canvas ref={canvasRef}/>
    );
}

export default Matrix;