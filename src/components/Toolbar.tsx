import '@/css/Toolbar.css';
import { ModeToggle } from './ModeToggle';
import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarTrigger,
} from "@/components/ui/menubar";

import Container from './Container';

function Toolbar({ className, fileName }: { className?: string; fileName: string }) {
    return (
        <Menubar className={`${className} flex flex-row justify-between`} style={styles}>
            <Container className="flex flex-row">
                <MenubarMenu>
                    <MenubarTrigger>File</MenubarTrigger>
                    <MenubarContent>
                        <MenubarItem>New Diagram</MenubarItem>
                        <MenubarItem>Export Diagram</MenubarItem>
                        <MenubarSeparator />
                        <MenubarItem>Share</MenubarItem>
                        <MenubarSeparator />
                        <MenubarItem>Close</MenubarItem>
                    </MenubarContent>
                </MenubarMenu>
                <MenubarMenu>
                    <MenubarTrigger>Edit</MenubarTrigger>
                    <MenubarContent>
                        <MenubarItem>Undo</MenubarItem>
                        <MenubarItem>Redo</MenubarItem>
                    </MenubarContent>
                </MenubarMenu>
                <MenubarMenu>
                    <MenubarTrigger>About</MenubarTrigger>
                    <MenubarContent>
                        <MenubarItem>About AsterFlow</MenubarItem>
                        <MenubarItem>Help</MenubarItem>
                    </MenubarContent>
                </MenubarMenu>
            </Container>
            <Container>{fileName}</Container>
            <ModeToggle />
        </Menubar>
    );
}

const styles = {
    borderRadius: '0px',
    border: 'none',
};

export default Toolbar;
