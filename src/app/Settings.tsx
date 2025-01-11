import { useState, useEffect } from "react";
import { Canvas, TFiller, FabricObject, Circle } from "fabric";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

import { icons } from "lucide-react";

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

    const handleDelete = () => {
        if (canvas && selectedObject) {
            canvas.remove(selectedObject);
        }
    }

    return (
        <div className="grid gap-2">
            {selectedObject && (
                <div className="grid gap-2">
                    {width &&
                        <div className="grid grid-cols-[50px_auto] gap-1 items-center ">
                            <Label className=" text-[0.8rem] opacity-85">Width</Label>
                            <Input value={width} onChange={handleWidthChange} type="number" placeholder="Width" />
                        </div>
                    }
                    {height &&
                        <div className="grid grid-cols-[50px_auto] gap-1 items-center">
                            <Label className="text-[0.8rem] w-[50px] opacity-85">Height</Label>
                            <Input value={height} onChange={handleHeightChange} type="number" placeholder="Height" />
                        </div>
                    }
                    
                        <div className="grid grid-cols-[50px_auto] gap-1 items-center">
                            <Label className="text-[0.8rem] w-[50px] opacity-85">Color</Label>
                            <div className="flex items-center justify-around border rounded-md">
                                <span>{fill ? fill.toString() : "null"}</span>
                                <Input className="appearance-none w-50 rounded-md" value={fill ? fill.toString() : "null"} onChange={handleFillChange} type="color" placeholder="Color" />
                            </div>
                        </div>
                    
                </div>
            )}
            {selectedObject && selectedObject instanceof Circle && radius && (
                        <div className="grid grid-cols-[50px_auto] gap-1 items-center">
                            <Label className="text-[0.8rem] w-[50px] opacity-85">Radius</Label>
                            <Input value={radius} onChange={handleRadiusChange} type="number" placeholder="Radius" />
                        </div>
            )}
            {selectedObject && (
                <div className="grid grid-cols-3 gap-2 justify-between">
                    <Button variant="outline" onClick={handleDelete}><icons.Trash/></Button>
                    <Button variant="outline"><icons.Copy /></Button>
                    <Button variant="outline"><icons.Clipboard /></Button>
                </div>
            )}
        </div>
    );
}