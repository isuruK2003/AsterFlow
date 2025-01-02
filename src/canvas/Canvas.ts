import { Canvas as FabricCanvas, Rect, Circle } from "fabric";
import Shape from "./Shape";
import { defaultRectangle, defaultCircle } from "./DefaultShape";

class Canvas {
    private canvas: FabricCanvas | null;

    constructor( canvas : FabricCanvas | null) {
        this.canvas = canvas;
    }

    public addRectangle(params: Partial<Shape> = defaultRectangle) {
        if (this.canvas) {
            const rect = new Rect({
                top: params.top,
                left: params.left,
                width: params.width,
                height: params.height,
                fill: params.fill,
                stroke: params.stroke,
            });
            this.canvas.add(rect);
        }
    }

    public addCircle(params: Partial<Shape> = defaultCircle) {
        if (this.canvas) {
            const circle = new Circle({
                top: params.top,
                left: params.left,
                radius: params.radius,
                fill: params.fill,
                stroke: params.stroke,
            });
            this.canvas.add(circle);
        }
    }

    public getCanvas(): FabricCanvas | null {
        return this.canvas;
    }
}

export default Canvas;
