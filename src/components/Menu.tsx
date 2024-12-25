import { Button } from './ui/button';
import { useCanvas } from "@/canvas/CanvasProvider";
import { useEffect, useState } from "react";
import Canvas from '@/canvas/Canvas';
import Container from './Container';
import { Square, Circle } from 'lucide-react';

function Menu({ className }: { className?: string }) {
    const { fabricCanvas } = useCanvas();
    const [canvas, setCanvas] = useState<Canvas>(new Canvas(null));

    useEffect(() => {
        if (fabricCanvas) {
            fabricCanvas.renderAll();
            setCanvas(new Canvas(fabricCanvas));
        }
    }, [fabricCanvas]);

    return (
        <div className={className}>
            <Container className='grid-cols-3'>
                <Button variant='outline' onClick={() => { canvas.addRectangle() }}><Square /></Button>
                <Button variant='outline' onClick={() => { canvas.addCircle() }}><Circle /></Button>
            </Container>
        </div>
    );
}

export default Menu;
