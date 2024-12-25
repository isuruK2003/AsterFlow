import * as React from "react"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
} from "@/components/ui/sidebar"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { ChevronRight } from "lucide-react"
import Menu from "../Menu"
import { NavUser } from "./NavUser"
import Toolbar from "../Toolbar"

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        { /* Header Here */ }
      </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarMenu>
              <Collapsible key="Basic Shapes" asChild defaultOpen={true} className="group/collapsible">
                <SidebarMenuItem>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton tooltip="Basic Shapes">
                      <SidebarGroupLabel>Basic Shapes</SidebarGroupLabel>
                      <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <SidebarMenuSub>
                      <Menu></Menu>
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </SidebarMenuItem>
              </Collapsible>
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={
          {
            name: "isuru",
            email: "m@example.com",
            avatar: "/avatars/shadcn.jpg",
          }
        } />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}