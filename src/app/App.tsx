import { useEffect, useRef, useState } from 'react';
import { Canvas, Rect, Circle } from 'fabric';
import Settings from './Settings';
import './styles/App.css'

export default function App() {
  const canvasRef = useRef(null);
  const [canvas, setCanvas] = useState<Canvas | null>(null);

  useEffect(() => {
    if (canvasRef.current) {
      const initCanvas = new Canvas(canvasRef.current, {
        width: 500,
        height: 500
      });

      initCanvas.backgroundColor = "#fff";
      initCanvas.renderAll();

      setCanvas(initCanvas);

      return () => {
        initCanvas.dispose();
      }
    }
  }, [])

  const addRectangle = () => {
    if (canvas) {
      const rect = new Rect({
        top: 100,
        left: 100,
        width: 100,
        height: 100,
        stroke: "#000",
        fill: null,
      });
      canvas.add(rect);
    }
  };

  const addCircle = () => {
    if (canvas) {
      const circle = new Circle({
        top: 100,
        left: 100,
        radius: 50,
        stroke: "#000",
        fill: null,
      });
      canvas.add(circle);
    }
  };

  return (
    <div className='app'>
      <div className='shapes'>
        <button onClick={addRectangle}>Rectangle</button>
        <button onClick={addCircle}>Circle</button>
      </div>
      <canvas ref={canvasRef}/>
      <Settings canvas={canvas}/>
    </div>
  )
}