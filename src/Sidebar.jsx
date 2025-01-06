import React from "react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import {  Home,  LogIn, LogOut,  Settings, Users } from "lucide-react";

import {
  Sidebar as UISidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

// Menu items.
const items = [
  {
    title: "Home",
    url: "/",
    icon: Home,
  },
  {
    title: "Login",
    url: "/Login",
    icon: LogIn,
  },
  {
    title: "Users",
    url: "/Users",
    icon: Users,
  },
  {
    title: "Settings",
    url: "/Settings",
    icon: Settings,
  },
  {
    title: "Logout",
    url: "/Logout",
    icon: LogOut,
  },
];

export function Sidebar() { 
  return (
    <SidebarProvider>
      <UISidebar>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Application</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <a href={item.url} className="sidebar-link flex items-center">
                        <item.icon className="icon mr-2" /> {/* Ensure `item.icon` is valid */}
                        <span>{item.title}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </UISidebar>
      <SidebarTrigger/>
    </SidebarProvider>
  );
}
