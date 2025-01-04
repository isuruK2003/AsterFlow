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
    menuItems: { label: string; content: React.ReactNode }[];
    footer: React.ReactNode;
    defaultOpen?: boolean;
  } & React.ComponentProps<typeof ShadSidebar>) {
    return (
      <ShadSidebar collapsible="icon" {...props}>
        {header && <SidebarHeader>{header}</SidebarHeader>}
        <SidebarContent>
          {menuItems.map((menuItem, index) => (
            <SidebarGroup key={index}>
              <SidebarMenu>
                <Collapsible
                  key={menuItem.label}
                  asChild
                  defaultOpen={defaultOpen}
                  className="group/collapsible"
                >
                  <SidebarMenuItem>
                    <CollapsibleTrigger asChild>
                      <SidebarMenuButton tooltip={menuItem.label}>
                        <SidebarGroupLabel>{menuItem.label}</SidebarGroupLabel>
                        <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                      </SidebarMenuButton>
                    </CollapsibleTrigger>
                    <CollapsibleContent>{menuItem.content}</CollapsibleContent>
                  </SidebarMenuItem>
                </Collapsible>
              </SidebarMenu>
            </SidebarGroup>
          ))}
        </SidebarContent>
        {footer && <SidebarFooter>{footer}</SidebarFooter>}
        <SidebarRail />
      </ShadSidebar>
    );
  }
  