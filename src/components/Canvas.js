import React, { useRef, useEffect, useCallback } from 'react';

import classes from './Canvas.module.css';   

const Canvas = props => {

    const canvasRef = useRef();

    const draw = useCallback(ctx => {
        ctx.fillStyle = '#FF0000'
        ctx.beginPath()
        ctx.arc(50, 100, 8, 0, 2*Math.PI)
        ctx.fill()
      }, []);


    useEffect(() => {
        const canvas = canvasRef.current;
        
        canvas.width = 640;
        canvas.height = 400;
        const ctx = canvas.getContext('2d');
        ctx.fillStyle = ('#00FF00');
        ctx.fillRect(0,0,ctx.canvas.width, ctx.canvas.height);
    
        draw(ctx);
    }, [draw]);



    return (
        <div className={classes['canvas__container']}>
            <canvas className={classes['canvas--rect']} ref={canvasRef} {...props} />
        </div>
    )
}

export default Canvas;