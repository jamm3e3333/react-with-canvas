import React, { useRef, useEffect, useCallback } from 'react';
import canvasBg from '../assets/images/map__view_title.jpg'
import classes from './Canvas.module.css';   
const img1 = new Image();
img1.src = canvasBg;
const Canvas = props => {

    const canvasRef = useRef();

    const draw = useCallback(ctx => {
        ctx.fillStyle = '#FF0000'
        ctx.beginPath()
        ctx.arc(50, 100, 6, 0, 2*Math.PI)
        ctx.fill()
      }, []);


    useEffect(() => {
        const canvas = canvasRef.current;
        
        canvas.width = 640;
        canvas.height = 400;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img1, 0 , 0)
    
        draw(ctx);
    }, [draw]);



    return (
        <div className={classes['canvas__container']}>
            <canvas className={classes['canvas--rect']} ref={canvasRef} {...props} />
        </div>
    )
}

export default Canvas;