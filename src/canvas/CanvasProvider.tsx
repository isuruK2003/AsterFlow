import { createContext, useState, useEffect, useRef, useContext } from 'react';
import { Canvas as FabricCanvas } from 'fabric';

type CanvasState = {
    fabricCanvas: FabricCanvas | null;
    canvasElementRef: React.RefObject<HTMLCanvasElement>;
    canvasElement: JSX.Element;
};

type CanvasProviderProps = {
    children: React.ReactNode;
};

const CanvasProviderContext = createContext<CanvasState | null>(null);

export function CanvasProvider({ children }: CanvasProviderProps) {
    const canvasElementRef = useRef<HTMLCanvasElement | null>(null);
    const [fabricCanvas, setFabricCanvas] = useState<FabricCanvas | null>(null);

    useEffect(() => {
        if (canvasElementRef.current) {
            const newCanvas = new FabricCanvas(canvasElementRef.current, {
                height: 500,
                width: 500,
            });
            newCanvas.backgroundColor = '#fff';
            setFabricCanvas(newCanvas);

            return () => {
                newCanvas.dispose();
            };
        }
    }, []);

    const canvasElement = <canvas ref={canvasElementRef}></canvas>;

    return (
        <CanvasProviderContext.Provider value={{ fabricCanvas, canvasElementRef, canvasElement }}>
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
