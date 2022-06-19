import React, { useEffect } from "react";
import { useCanvas } from '../../util/CanvasContent';

export function Canvas() {
    const {
        canvasRef,
        prepareCanvas,
        startDrawing,
        finishDrawing,
        draw,
    } = useCanvas();

    const canvaStyle = {
        border: "5px solid #282c34"
    }

    useEffect(() => {
        prepareCanvas();
    }, []);

    return (
        <canvas
            onMouseDown={startDrawing}
            onMouseUp={finishDrawing}
            onMouseMove={draw}
            ref={canvasRef}
            style={canvaStyle}
        />
    );
}