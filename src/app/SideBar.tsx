import {
  Sidebar as ShadSidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarGroupContent,
} from "@/components/ui/sidebar"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { ChevronRight } from "lucide-react"

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
          {menuItems.map((item) => (
            <Collapsible key={item.title} title={item.title} defaultOpen className="group/collapsible">
              <SidebarGroup>
                
                <SidebarGroupLabel asChild className="group/label text-sm text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground">
                  <CollapsibleTrigger>
                    {item.title}{" "}<ChevronRight className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-90" />
                  </CollapsibleTrigger>
                </SidebarGroupLabel>

                <CollapsibleContent>
                  <SidebarGroupContent>
                    <SidebarMenu>
                      {item.content.map((contentItem) => (
                        <SidebarMenuItem key={item.title}>
                          { contentItem }
                        </SidebarMenuItem>
                      ))}
                    </SidebarMenu>
                  </SidebarGroupContent>
                </CollapsibleContent>

              </SidebarGroup>
            </Collapsible>
          ))}
        </SidebarContent>
        {footer && <SidebarFooter>{footer}</SidebarFooter>}
        <SidebarRail />
      </ShadSidebar>
    );
  }
  