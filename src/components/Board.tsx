import { useCanvas } from '@/canvas/CanvasProvider';
import { useEffect } from 'react';

function Board({ className }: { className?: string }) {
    const { fabricCanvas, canvasElementRef, canvasElement } = useCanvas();

    useEffect(() => {
        if (fabricCanvas) {
            fabricCanvas.renderAll();
        }
    }, [canvasElementRef]);

    return (
        <div className={className}>
            {canvasElement}
        </div>
    );
}

export default Board;
