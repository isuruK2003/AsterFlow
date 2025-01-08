import {
  Sidebar as ShadSidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  SidebarGroupContent,
} from "@/components/ui/sidebar"

export function Sidebar({
    header,
    menuItems,
    footer,
    defaultOpen = true,
    ...props
  }: {
    header: React.ReactNode;
    menuItems: { title: string; content: React.ReactNode[] }[];
    footer: React.ReactNode;
    defaultOpen?: boolean;
  } & React.ComponentProps<typeof ShadSidebar>) {
    return (
      <ShadSidebar collapsible="offcanvas" {...props}>
        {header && <SidebarHeader>{ header }</SidebarHeader>}
        <SidebarContent>
          {menuItems.map((item, index) => item.content && (
              <SidebarGroup key={index}>
                <SidebarGroupLabel>
                  {item.title}
                </SidebarGroupLabel>
                <SidebarGroupContent>
                  <SidebarMenu>
                    {item.content.map((contentItem) => (
                      <SidebarMenuItem key={item.title}>
                        { contentItem }
                      </SidebarMenuItem>
                    ))}
                  </SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>
          ))}
        </SidebarContent>
        {footer && <SidebarFooter>{footer}</SidebarFooter>}
        <SidebarRail />
      </ShadSidebar>
    );
  }
  