"use client";

import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";

import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";

import { Bell, ChevronDown, Search, Settings } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";

export default function Topbar() {
    const user = useAuth((s) => s.user);
    const logout = useAuth((s) => s.logout);
    console.log("Topbar user:", user);

    return (
        <header className="sticky top-0 z-50 flex h-16 shrink-0 items-center border-b-2 gap-2 bg-background backdrop-blur">
            <div className="flex items-center gap-2 px-4 w-full justify-between">
                {/* Left */}
                <div className="flex items-center gap-2">
                    <SidebarTrigger className="-ml-1" />
                    <Separator orientation="vertical" className="h-4" />

                    <h1 className="text-lg font-semibold hidden sm:block">
                        Hello, {user?.businessName || "User Name"}!
                    </h1>
                </div>

                {/* Right */}
                <div className="flex items-center gap-3 sm:gap-4">
                    {/* Search (Desktop / Tablet) */}
                    <div className="relative w-40 md:w-64 hidden sm:block">
                        <Search className="absolute left-3 top-2.5 w-4 h-4 text-slate-400" />
                        <Input
                            type="text"
                            placeholder="Search..."
                            className="pl-10 bg-white border-slate-300"
                        />
                    </div>

                    {/* Search Icon (Mobile) */}
                    <button className="p-2 hover:bg-slate-200 rounded-lg transition sm:hidden">
                        <Search className="w-5 h-5 text-slate-600" />
                    </button>

                    {/* Icons */}
                    <button className="p-2 hover:bg-slate-200 rounded-lg transition">
                        <Bell className="w-5 h-5 text-slate-600" />
                    </button>

                    <button className="p-2 hover:bg-slate-200 rounded-lg transition hidden sm:block">
                        <Settings className="w-5 h-5 text-slate-600" />
                    </button>

                    {/* User Dropdown */}
                    <DropdownMenu>
                        <DropdownMenuTrigger className="flex items-center gap-2 sm:gap-3 px-2 sm:px-3 py-2 rounded-lg hover:bg-slate-200 transition">
                            {/* Avatar */}
                            <div className="w-8 h-8 bg-linear-to-br from-teal-400 to-teal-600 rounded-full flex items-center justify-center text-white text-xs sm:text-sm font-semibold">
                                {user?.businessName
                                    ?.split(" ")
                                    .map((n) => n[0])
                                    .join("") || "UN"}
                            </div>

                            {/* Username hidden on mobile */}
                            <span className="text-sm font-medium text-slate-900 hidden sm:block">
                                {user?.businessName || "User Name"}
                            </span>

                            {/* Dropdown arrow hidden on mobile */}
                            <ChevronDown className="w-4 h-4 text-slate-600 hidden sm:block" />
                        </DropdownMenuTrigger>

                        <DropdownMenuContent align="end" className="w-48">
                            <DropdownMenuItem>My Profile</DropdownMenuItem>
                            <DropdownMenuItem>Settings</DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem
                                className="text-red-600"
                                onSelect={() => {
                                    logout();
                                }}
                            >
                                Logout
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>
        </header>
    );
}
