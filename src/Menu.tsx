import { Button } from './components/ui/button';
import { useCanvas } from "./CanvasProvider";
import { useEffect } from "react";
import { Rect, Circle } from "fabric";

function Menu({ className }: { className?: string }) {
    const { canvas } = useCanvas();

    useEffect(() => {
        if (canvas) {
            canvas.renderAll();
        }
    }, [canvas]);
    
    const addRectangle = () => {
        if (canvas) {
            const rect = new Rect(
                {
                top: 100, 
                left: 100,
                height:100,
                width:100,
                fill:'#333333',
                stroke:'#000000'
            });
            canvas.add(rect);
            console.log("Rectangle Added")
        }
    }
    
    const addCircle = () : void => {
        if (canvas) {
            const circle = new Circle(
                {
                top: 100,
                left: 100,
                radius: 10,
                fill: '#000000'
            });
            canvas.add(circle);
        }
    }

    return (
        <div className={className}>
            <Button variant='outline' onClick={addRectangle}>Add Rectangle</Button>
            <Button variant='outline' onClick={addCircle}>Add Circle</Button>
        </div>
    );
}

export default Menu;
