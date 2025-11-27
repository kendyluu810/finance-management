"use client";
import {
  HelpCircle,
  LogOut,
  SearchIcon,
  Settings,
  ShieldUser,
  User,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import { InputGroup, InputGroupAddon, InputGroupInput } from "./ui/input-group";
import { SidebarTrigger } from "./ui/sidebar";
import { usePathname } from "next/navigation";
import { menuItems } from "./AppSidebar";

const Navbar = () => {
  const pathname = usePathname();

  const current = (() => {
    // Try exact match first, then startsWith for nested routes.
    let match = menuItems.find((m) => m.href === pathname);
    if (!match) {
      match = menuItems.find((m) => pathname?.startsWith(m.href));
    }
    // Fallback to Dashboard
    return (
      match || {
        title: "Home",
        description: "Track finance easy with us",
      }
    );
  })();
  return (
    <nav className="p-3 flex items-center justify-between">
      {/* left */}
      <div className="flex gap-2 items-center">
        <SidebarTrigger />
        <div className="flex flex-col justify-center">
          <h2 className="text-xl font-semibold">{current.title}</h2>
          {current.description && (
            <span className="text-sm font-mono text-gray-400">
              &quot;{current.description}&quot;
            </span>
          )}
        </div>
      </div>
      {/* right */}
      <div className="flex items-center justify-center gap-4">
        <div className="">
          <InputGroup>
            <InputGroupInput placeholder="Search..." />
            <InputGroupAddon>
              <SearchIcon />
            </InputGroupAddon>
          </InputGroup>
        </div>
        <div className="flex gap-1 items-center justify-center">
          <Button variant="secondary" size="icon">
            <Settings />
          </Button>
          <Button variant="secondary" size="icon">
            <HelpCircle />
          </Button>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Avatar>
              <AvatarImage src="https://avatars.githubusercontent.com/u/73063097" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent sideOffset={10}>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <User className="w-[1.2rem] h-[1.2rem] mr-2" />
              Profile
            </DropdownMenuItem>
            <DropdownMenuItem>
              <ShieldUser className="w-[1.2rem] h-[1.2rem] mr-2" /> Change
              Password
            </DropdownMenuItem>
            <DropdownMenuItem variant="destructive">
              <LogOut className="w-[1.2rem] h-[1.2rem] mr-2" /> Log Out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
};

export default Navbar;
