import { useCanvas } from './CanvasProvider';
import { useEffect } from 'react';

function Board({ className }: { className?: string }) {
    const { canvas, canvasElement, canvasRef } = useCanvas();

    useEffect(() => {
        if (canvas) {
            canvas.renderAll();
        }
    }, [canvasRef]);

    return (
        <div className={className}>
            {canvasElement}
        </div>
    );
}

export default Board;
