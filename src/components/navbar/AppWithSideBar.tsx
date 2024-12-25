import { AppSidebar } from "./AppSidebar"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import Board from "../Board"
import { CanvasProvider } from "@/canvas/CanvasProvider"
import { ThemeProvider } from "../ThemeProvider"
import '@/css/App.css'
import Toolbar from "../Toolbar"

export default function AppWithSidebar() {
  return (
    <ThemeProvider>
      <CanvasProvider>
        <SidebarProvider>
          <AppSidebar />
          <SidebarInset>
            <header className="w-full p-4 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
              <div className="flex items-center gap-2 px-4">
                <SidebarTrigger className="-ml-1" />
                <Separator orientation="vertical" className="mr-2 h-4" />
                <div className="w-full">
                  <Toolbar fileName="untitled"></Toolbar>
                </div>
              </div>
            </header>
              <div className="w-full flex justify-center items-center h-full">
                <Board />
              </div>
          </SidebarInset>
        </SidebarProvider>
      </CanvasProvider>
    </ThemeProvider>
  )
}
