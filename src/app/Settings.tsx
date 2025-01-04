import { useState, useEffect } from "react";
import { Canvas, TFiller, FabricObject, Circle, Rect } from "fabric";

interface settingsProps {
    canvas: Canvas | null
}

export default function Settings({ canvas }: settingsProps) {
    const [selectedObject, setSelectedObject] = useState<FabricObject | null>(null);
    const [width, setWidth] = useState<number | null>(0);
    const [height, setHeight] = useState<number | null>(0);
    const [radius, setRadius] = useState<number | null>(0);
    const [fill, setFill] = useState<string | TFiller | null>(null);

    useEffect(() => {
        if (canvas) {

            canvas.on("selection:created", (event) => {
                handleObjectSelection(event.selected[0]);
            });

            canvas.on("selection:updated", (event) => {
                handleObjectSelection(event.selected[0]);
            });

            canvas.on("selection:cleared", () => {
                setSelectedObject(null);
                clearSettings();
            });

            canvas.on("object:modified", (event) => {
                handleObjectSelection(event.target);
            });

            canvas.on("object:scaling", (event) => {
                handleObjectSelection(event.target);
            });
        }
    }, [canvas]);

    const handleObjectSelection = (object: FabricObject) => {
        if (!object) return;

        setSelectedObject(object);

        setWidth(Math.round(object.width * object.scaleX));
        setHeight(Math.round(object.height * object.scaleY));
        setFill(object.fill);

        if (object instanceof Circle) {
            setRadius(Math.round(object.radius))
        }
    };

    const clearSettings = () => {
        setWidth(null);
        setHeight(null);
        setFill(null);
        setRadius(null);
    };

    const handleWidthChange = (event: any) => {
        const value = event.target.value.replace(/,/g, "");
        const intValue = parseInt(value, 10)

        if (canvas === null || intValue < 0 || selectedObject === null) return;

        setWidth(intValue);
        selectedObject.set({ width: intValue / selectedObject.scaleX })
        canvas.renderAll();
    };

    const handleHeightChange = (event: any) => {
        const value = event.target.value.replace(/,/g, "");
        const intValue = parseInt(value, 10)

        if (canvas === null || intValue < 0 || selectedObject === null) return;

        setHeight(intValue);
        selectedObject.set({ height: intValue / selectedObject.scaleY })
        canvas.renderAll();
    };

    const handleRadiusChange = (event: any) => {
        const value = event.target.value.replace(/,/g, "");
        const intValue = parseInt(value, 10)

        if (canvas === null || intValue < 0 || selectedObject === null || !(selectedObject instanceof Circle)) return;

        setRadius(intValue);
        selectedObject.set({ height: intValue / selectedObject.scaleX })
        canvas.renderAll();
    };

    const handleFillChange = (event: any) => {
        const value = event.target.value; // todo : add filtering for invalid values

        if (canvas === null || selectedObject === null) return;

        setFill(value);
        selectedObject.set({ fill: value })
        canvas.renderAll();
    };

    return (
        <div>
            {selectedObject && (
                <>
                    {width && (<>
                        <label>Width</label>
                        <input value={width} onChange={handleWidthChange} />
                    </>)}

                    {height && (<>
                        <label>Height</label>
                        <input value={height} onChange={handleHeightChange} />
                    </>)}

                    <label>Fill</label>
                    <input type="color" value={fill ? fill.toString() : "null"} onChange={handleFillChange} />
                </>
            )}
            {selectedObject && selectedObject instanceof Circle && radius && (
                <>
                    <label>Radius</label>
                    <input value={radius} onChange={handleRadiusChange} />
                </>
            )}
        </div>
    );
}