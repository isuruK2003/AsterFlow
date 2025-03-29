import { useEffect, useRef, useState } from "react";
import { Canvas, Rect, Circle, Triangle, Ellipse, Line } from "fabric";
import Settings from "./Settings";

import { icons } from "lucide-react";
import { Button } from "@/components/ui/button";
import TopMenu from "./TopMenu";
import { SideMenu } from "./SideMenu";
import { ModeToggle } from "@/components/mode-toggle";

import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";
import { ThemeProvider, useTheme } from "@/components/theme-provider";
import { AvatarBar } from "./AvatarBar";
import FileCard from "./FileCard";

import { LineIcon } from "@/components/shapes/line-icon"
import { EllipseIcon } from "@/components/shapes/ellipse-icon";
import { Analytics } from "@vercel/analytics/react"

export default function App() {
  const canvasRef = useRef(null);
  const [canvas, setCanvas] = useState<Canvas | null>(null);
  const { theme } = useTheme();

  const [canvasBg, setCanvasBg] = useState<string>("#fff");
  const [canvasFg, setCanvasFg] = useState<string>("#000");

  useEffect(() => {
    setCanvasBg(theme === "dark" ? "#151515" : "#fff");
    setCanvasFg(theme === "dark" ? "#fff" : "#000");
  }, [theme]);

  useEffect(() => {
    if (canvasRef.current) {
      const initCanvas = new Canvas(canvasRef.current, {
        width: 900,
        height: 450,
      });

      initCanvas.backgroundColor = canvasBg;
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
        stroke: canvasFg,
        fill: null,
        strokeUniform: true,
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
        stroke: canvasFg,
        fill: null,
        strokeUniform: true,
      });
      canvas.add(circle);
    }
  };

  const addTriangle = () => {
    if (canvas) {
      const triangle = new Triangle({
        top: 100,
        left: 100,
        width: 100,
        height: 100,
        stroke: canvasFg,
        fill: null,
        strokeUniform: true,
      });
      canvas.add(triangle);
    }
  };

  const addEllipse = () => {
    if (canvas) {
      const ellipse = new Ellipse({
        top: 100,
        left: 100,
        rx: 50,
        ry: 37.5,
        stroke: canvasFg,
        fill: null,
        strokeUniform: true,
      });
      canvas.add(ellipse);
    }
  };

  const addLine = () => {
    if (canvas) {
      const line = new Line([50, 50, 200, 200], {
        stroke: canvasFg,
        strokeWidth: 1,
        strokeUniform: true,
      });
      canvas.add(line);
    }
  };

  const menuItems = [
    {
      title: "Objects",
      content: [(
        <div className="w-full grid grid-cols-4 gap-2">
          <Button variant="outline" onClick={addRectangle}><icons.Square /></Button>
          <Button variant="outline" onClick={addCircle}><icons.Circle /></Button>
          <Button variant="outline" onClick={addTriangle}><icons.Triangle /></Button>
          <Button variant="outline" onClick={addEllipse}><EllipseIcon /></Button>
          <Button variant="outline"><icons.MoveUpRight /></Button>
          <Button variant="outline" onClick={addLine}><LineIcon /></Button>
        </div>
      )],
    },
    {
      title: "Settings",
      content: [<Settings canvas={canvas} />],
    },
  ];

  const sidebarHeader = (
    <FileCard />
  );

  const sidebarFooter = (
    <AvatarBar
      user={{
        name: "Isuru",
        email: "m@example.com",
        avatar: "/avatars/shadcn.jpg",
      }}
    />
  );

  return (
    <div className="app bg-zinc-900 h-screen flex flex-col">
      <ThemeProvider>
        <SidebarProvider>
          <SideMenu
            header={sidebarHeader}
            menuItems={menuItems}
            footer={sidebarFooter}
          />
          <SidebarInset>

            <header className="flex h-16 items-center gap-2 px-4">
              <SidebarTrigger className="-ml-1" />
              <Separator orientation="vertical" className="h-4" />
              <TopMenu className="w-full" />
              <ModeToggle />
            </header>

            <div className="w-full h-full p-4">
              <div className="w-full h-full flex items-center justify-center rounded-lg bg-zinc-950 bg-opacity-10">
                <canvas className="rounded-lg" ref={canvasRef} />
              </div>
            </div>

            <div className="py-4 border-t">
              <div className="opacity-50 text-sm flex flex-row items-center justify-center ">
                ⚠️ Development in progress so some features are in experimental state and may not be in working condition, but will be soon.
              </div>
            </div>

          </SidebarInset>
        </SidebarProvider>
      </ThemeProvider>
      <Analytics />
    </div>
  );
}
