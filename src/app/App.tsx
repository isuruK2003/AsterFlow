import { useEffect, useRef, useState } from "react";
import { Canvas, Rect, Circle } from "fabric";
import Settings from "./Settings";

import { icons } from "lucide-react";
import { Button } from "@/components/ui/button";
import MenuBar from "./MenuBar";
import { Sidebar } from "./SideBar";
import { ModeToggle } from "@/components/mode-toggle";

import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";
import { ThemeProvider } from "@/components/theme-provider";

export default function App() {
  const canvasRef = useRef(null);
  const [canvas, setCanvas] = useState<Canvas | null>(null);

  useEffect(() => {
    if (canvasRef.current) {
      const initCanvas = new Canvas(canvasRef.current, {
        width: 500,
        height: 500,
      });

      initCanvas.backgroundColor = "#fff";
      initCanvas.renderAll();

      setCanvas(initCanvas);

      return () => {
        initCanvas.dispose();
      };
    }
  }, [canvasRef]);

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

  const menuItems = [
    {
      label: "Shapes",
      content: (
        <div className="flex flex-col gap-2">
          <Button variant="outline" onClick={addRectangle}>
            <icons.Square className="mr-2" /> Rectangle
          </Button>
          <Button variant="outline" onClick={addCircle}>
            <icons.Circle className="mr-2" /> Circle
          </Button>
        </div>
      ),
    },
    {
      label: "Settings",
      content: <Settings canvas={canvas} />,
    },
  ];

  return (
    <div className="app bg-zinc-900 h-screen flex flex-col">
      <ThemeProvider>
      <SidebarProvider>
        <Sidebar
          header={<div className="p-4 text-lg font-bold">Header</div>}
          menuItems={menuItems}
          footer={<div>Footer</div>}
        />
        <SidebarInset>
          
          <header className="flex h-16 items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="h-4" />
              <MenuBar className="w-full" />
            <ModeToggle />
          </header>
          
          <div className="w-full h-full p-4">
            <div className="w-full h-full flex items-center justify-center rounded-lg bg-zinc-950 bg-opacity-10">
              <canvas className="rounded-lg" ref={canvasRef} />
            </div>
          </div>

        </SidebarInset>
      </SidebarProvider>
      </ThemeProvider>
    </div>
  );
}
