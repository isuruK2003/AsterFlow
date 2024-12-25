import '@/css/App.css'
import Toolbar from './Toolbar';
import Board from './Board';
import Menu from './Menu';
import Container from './Container';
import { ThemeProvider } from "@/components/ThemeProvider"
import { CanvasProvider } from '@/canvas/CanvasProvider';

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <CanvasProvider>
        <Container className="flex flex-col h-screen">
          <Toolbar fileName='Untitled Graph' />
          <Container className="flex flex-row w-screen h-full">
            <Menu className="w-[300px] bg-slate-800 bg-opacity-40"></Menu>
            <Container className="w-full flex justify-center items-center bg-slate-800 bg-opacity-80">
              <Board />
            </Container>
          </Container>
        </Container>
      </CanvasProvider>
    </ThemeProvider>
  )
}

export default App;
