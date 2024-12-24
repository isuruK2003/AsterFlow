import { createContext, useState, useEffect, useRef, useContext } from 'react';
import { Canvas } from 'fabric';

type CanvasState = {
    canvas: Canvas | null;
    canvasRef: React.RefObject<HTMLCanvasElement>;
    canvasElement: JSX.Element;
};

type CanvasProviderProps = {
    children: React.ReactNode;
};

const CanvasProviderContext = createContext<CanvasState | null>(null);

export function CanvasProvider({ children }: CanvasProviderProps) {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const [canvas, setCanvas] = useState<Canvas | null>(null);

    useEffect(() => {
        if (canvasRef.current) {
            const newCanvas = new Canvas(canvasRef.current, {
                height: 500,
                width: 500,
            });
            newCanvas.backgroundColor = '#fff';
            setCanvas(newCanvas);

            return () => {
                newCanvas.dispose();
            };
        }
    }, []);

    const canvasElement = <canvas ref={canvasRef}></canvas>;

    return (
        <CanvasProviderContext.Provider value={{ canvas, canvasRef, canvasElement }}>
            {children}
        </CanvasProviderContext.Provider>
    );
}

export function useCanvas() {
    const context = useContext(CanvasProviderContext);
    if (!context) {
        throw new Error('useCanvas must be used within a CanvasProvider');
    }
    return context;
}
