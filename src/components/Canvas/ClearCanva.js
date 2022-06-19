import React from 'react';
import { useCanvas } from '../../util/CanvasContent';

export const ClearCanva = () => {
    const { clearCanvas } = useCanvas();

    return (
        <button className="clear_button" onClick={clearCanvas}>N E W</button>
    )
}