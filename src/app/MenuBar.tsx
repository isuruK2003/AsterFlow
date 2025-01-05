import React from "react";
import {
    Menubar as ShadMenuBar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarShortcut,
    MenubarTrigger,
    MenubarSub,
    MenubarSubContent,
    MenubarSubTrigger,
} from "@/components/ui/menubar";

type MenuItemCallback = () => void;

interface MenuItem {
    itemName: string;
    callback?: MenuItemCallback;
    shortcut?: string | null;
    content?: MenuItem[];
}

interface MenuGroup {
    trigger: string;
    content: MenuItem[][];
}

const sampleFunction = () => {
    console.log("Menu item clicked!");
};

const menuBar: MenuGroup[] = [
    {
        trigger: "File",
        content: [
            [
                { itemName: "New", callback: sampleFunction, shortcut: "Ctrl+N" },
                { itemName: "Open", callback: sampleFunction, shortcut: "Ctrl+O" },
                { itemName: "Save", callback: sampleFunction, shortcut: "Ctrl+S" },
            ],
            [
                { itemName: "Share", callback: sampleFunction },
                { itemName: "Export", callback: sampleFunction },
                { itemName: "Print", callback: sampleFunction },
            ],
            [
                { itemName: "Rename", callback: sampleFunction },
                { itemName: "Properties", callback: sampleFunction },
                { itemName: "Page Setup", callback: sampleFunction },
            ],
            [{ itemName: "Close", callback: sampleFunction, shortcut: "Ctrl+W" }],
        ],
    },
    {
        trigger: "Edit",
        content: [
            [
                { itemName: "Undo", callback: sampleFunction, shortcut: "Ctrl+Z" },
                { itemName: "Redo", callback: sampleFunction, shortcut: "Ctrl+Y" },
            ]
        ],
    },
    {
        trigger: "Help",
        content: [
            [
                { itemName: "Shortcuts", callback: sampleFunction },
                { itemName: "Quick Start Guide", callback: sampleFunction },
                { itemName: "Documentation", callback: sampleFunction, shortcut: "Ctrl+H" },
            ]
        ],
    },
];

const renderMenuItem = (item: MenuItem) => {
    // Handle nested menu items
    if (item.content) {
        return (
            <MenubarSub>
                <MenubarSubTrigger>{item.itemName}</MenubarSubTrigger>
                <MenubarSubContent>
                    {item.content.map((subItem, subIndex) => (
                        <React.Fragment key={`sub-${subItem.itemName}-${subIndex}`}>
                            {renderMenuItem(subItem)}
                        </React.Fragment>
                    ))}
                </MenubarSubContent>
            </MenubarSub>
        );
    }

    // Render regular menu item
    return (
        <MenubarItem onClick={item.callback}>
            {item.itemName}
            {item.shortcut && <MenubarShortcut>{item.shortcut}</MenubarShortcut>}
        </MenubarItem>
    );
};

const renderMenuContent = (content: MenuItem[][]) => {
    return (
        <MenubarContent>
            {content.map((group, groupIndex) => (
                <React.Fragment key={`group-${groupIndex}`}>
                    {group.map((item, itemIndex) => (
                        <React.Fragment key={`item-${item.itemName}-${itemIndex}`}>
                            {renderMenuItem(item)}
                        </React.Fragment>
                    ))}
                    {groupIndex < content.length - 1 && <MenubarSeparator />}
                </React.Fragment>
            ))}
        </MenubarContent>
    );
};

export default function MenuBar({ className }: { className?: string }) {
    return (
        <ShadMenuBar className={className}>
            {menuBar.map((menu) => (
                <MenubarMenu key={`menu-${menu.trigger}`}>
                    <MenubarTrigger>{menu.trigger}</MenubarTrigger>
                    {menu.content.length > 0 && renderMenuContent(menu.content)}
                </MenubarMenu>
            ))}
        </ShadMenuBar>
    );
}