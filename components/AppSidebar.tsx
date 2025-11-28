"use client";

import {
  ChartPie,
  ChevronDown,
  Clipboard,
  HelpCircle,
  Home,
  LogOut,
  ReceiptText,
  Settings,
  ShieldUser,
  User,
  Wallet,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "./ui/sidebar";
import { useSidebar } from "./ui/sidebar";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export const menuItems = [
  {
    title: "Dashboard",
    href: "/",
    icon: Home,
    description: "Tracke finances easily with AI insight and remcommendations.",
    label: "Main menu",
  },
  {
    title: "Transactions",
    href: "/transaction",
    icon: ReceiptText,
    description: "View, track, and manage all expenses with ease.",
    label: "Main menu",
  },
  {
    title: "My Wallet",
    href: "/wallet",
    icon: Wallet,
    description: "Securely store, track and manage your money.",
    label: "Main menu",
  },
  {
    title: "Invoices",
    href: "/invoice",
    icon: Clipboard,
    label: "Main menu",
  },
  {
    title: "Report",
    href: "/report",
    icon: ChartPie,
    label: "Main menu",
  },
  {
    title: "Settings",
    href: "/settings",
    icon: Settings,
    label: "Preferences",
  },
  {
    title: "Help Center",
    href: "/help",
    icon: HelpCircle,
    label: "Preferences",
  },
];

const AppSidebar = () => {
  const { state } = useSidebar();
  const isCollapsed = state === "collapsed";
  const pathName = usePathname();
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        {/* Logo */}
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="/" className="flex items-center justify-center">
                    {isCollapsed ? (
                      <span className="font-black text-xl text-custom-primary">
                        F
                      </span>
                    ) : (
                      <span className="font-black text-2xl text-custom-primary">
                        Fynix
                      </span>
                    )}
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        {/* User Account */}
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <SidebarMenuButton className="flex items-center justify-center w-full h-fit bg-white border shadow-lg rounded-xs">
                      <div className="flex items-center justify-center gap-4">
                        <Avatar className={isCollapsed ? "h-6 w-6" : "w-7 h-7"}>
                          <AvatarImage src="https://avatars.githubusercontent.com/u/73063097" />
                          <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        {!isCollapsed && (
                          <div className="flex flex-col gap-1">
                            <h2 className="font-semibold text-base text-blue-900">
                              Kendy
                            </h2>
                            <span className="text-sm font-medium text-muted-foreground">
                              Personal Account
                            </span>
                          </div>
                        )}
                        {!isCollapsed && (
                          <ChevronDown className="ml-2 w-4 h-4 text-muted-foreground" />
                        )}
                      </div>
                    </SidebarMenuButton>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent sideOffset={10}>
                    <DropdownMenuItem>
                      <User className="w-[1.2rem] h-[1.2rem] mr-2" />
                      Profile
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <ShieldUser className="w-[1.2rem] h-[1.2rem] mr-2" />{" "}
                      Change Password
                    </DropdownMenuItem>
                    <DropdownMenuItem variant="destructive">
                      <LogOut className="w-[1.2rem] h-[1.2rem] mr-2" /> Log Out
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarHeader>

      <SidebarContent>
        {(() => {
          const mainMenuItems = menuItems.filter(
            (i) => i.label === "Main menu"
          );
          const preferenceItems = menuItems.filter(
            (i) => i.label === "Preferences"
          );

          const renderGroup = (title: string, items: typeof menuItems) => (
            <SidebarGroup>
              <SidebarGroupLabel>{title}</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {items.map((item) => {
                    const Icon = item.icon;
                    const isActive = pathName === item.href;
                    return (
                      <SidebarMenuItem key={item.title}>
                        <SidebarMenuButton asChild>
                          <Link
                            href={item.href}
                            className={cn(
                              "flex items-center gap-2",
                              isActive
                                ? "bg-white text-blue-900"
                                : "text-muted-foreground"
                            )}
                          >
                            <Icon className="w-6 h-6" />
                            <span>{item.title}</span>
                          </Link>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    );
                  })}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          );

          return (
            <>
              {renderGroup("Main Menu", mainMenuItems)}
              {renderGroup("Preferences", preferenceItems)}
            </>
          );
        })()}
      </SidebarContent>
    </Sidebar>
  );
};

export default AppSidebar;
