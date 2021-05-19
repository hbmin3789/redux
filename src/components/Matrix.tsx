import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import {nextFrame} from '../reducers/index';
import MatrixItem from '../libs/MatrixItem';

const Canvas = styled.canvas`
    width: 100%;
    height: 100%;
`;

export const Matrix = () => {
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
                    ctx.font = "0.5rem";
                    ctx.fillStyle = "rgb(0,0,0)";

                    if(x.isActive){
                        
                        let width = window.innerWidth * (x.x / 100);
                        let height = window.innerHeight * (x.y / 100);
                        
                        ctx.fillText(x.char, width, height);
                        
                    }
                }
            });
        }

    }, 100);
    return (
        <Canvas ref={canvasRef}>

        </Canvas>
    );
}

export default Matrix;