// "use client";

// import * as React from "react";
// import {
//     AudioWaveform,
//     BookOpen,
//     Bot,
//     Building2,
//     Calendar,
//     CalendarPlus,
//     CalendarPlus2,
//     Command,
//     Frame,
//     GalleryVerticalEnd,
//     HelpCircle,
//     LayoutDashboard,
//     LogOut,
//     LucideLayoutGrid,
//     Map,
//     Maximize,
//     Wallet,
// } from "lucide-react";

// import { cn } from "@/lib/utils";
// import { NavMain } from "@/components/nav-main";
// import {
//     Sidebar,
//     SidebarContent,
//     SidebarFooter,
//     SidebarHeader,
//     SidebarRail,
// } from "@/components/ui/sidebar";
// import Image from "next/image";
// import { usePathname } from "next/navigation";
// import Link from "next/link";
// const navItems = [
//     { href: "/dashboard", label: "Dashboard", icon: LucideLayoutGrid },
//     { href: "#", label: "Bookings", icon: Calendar },
//     { href: "#", label: "New Booking", icon: CalendarPlus2 },
//     { href: "#", label: "Amendments", icon: Maximize },
//     { href: "#", label: "My Properties", icon: Building2 },
//     { href: "#", label: "Payments", icon: Wallet },
// ];

// export function AppSidebar({ ...props }) {
//     const pathname = usePathname();
//     return (
//         <Sidebar collapsible="icon" {...props}>
//             <SidebarHeader className="pt-4 pb-6 px-6">
//                 <Image
//                     src="/Logo_white.svg"
//                     alt="Property Motion Logo"
//                     width={238}
//                     height={28}
//                     priority
//                 />
//             </SidebarHeader>
//             <SidebarContent>
//                 {/* Navigation */}
//                 <nav className="flex-1 px-3 py-6 space-y-2">
//                     {navItems.map((item) => {
//                         const Icon = item.icon;
//                         const isActive = pathname === item.href;
//                         return (
//                             <Link
//                                 key={item.href}
//                                 href={item.href}
//                                 className={cn(
//                                     "flex items-center gap-3 px-4 py-3  transition-colors",
//                                     isActive
//                                         ? "bg-white/5 text-white border-l-2 border-white"
//                                         : "text-slate-300 hover:bg-white/5 hover:text-white"
//                                 )}
//                             >
//                                 <Icon className="w-5 h-5" />
//                                 <span className="text-sm font-medium">
//                                     {item.label}
//                                 </span>
//                             </Link>
//                         );
//                     })}
//                 </nav>
//             </SidebarContent>
//             <SidebarFooter>
//                 <Link
//                     href="#"
//                     className="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-300 hover:bg-slate-800/50 hover:text-white transition-colors"
//                 >
//                     <HelpCircle className="w-5 h-5" />
//                     <span className="text-sm font-medium">Help Center</span>
//                 </Link>
//                 <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-slate-300 hover:bg-red-900/20 hover:text-red-400 transition-colors">
//                     <LogOut className="w-5 h-5" />
//                     <span className="text-sm font-medium">Log out</span>
//                 </button>
//             </SidebarFooter>
//             <SidebarRail />
//         </Sidebar>
//     );
// }

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    Calendar,
    HelpCircle,
    LogOut,
    LucideLayoutGrid,
    CalendarPlus2,
    Maximize,
    Building2,
    Wallet,
} from "lucide-react";
import {
    Sidebar,
    SidebarContent as SidebarUIContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
import Image from "next/image";

const navItems = [
    { href: "/dashboard", label: "Dashboard", icon: LucideLayoutGrid },
    { href: "#bookings", label: "Bookings", icon: Calendar },
    { href: "#newbooking", label: "New Booking", icon: CalendarPlus2 },
    { href: "#amendments", label: "Amendments", icon: Maximize },
    { href: "/my-properties", label: "My Properties", icon: Building2 },
    { href: "#payments", label: "Payments", icon: Wallet },
];

export function AppSidebar({ ...props }) {
    const pathname = usePathname();

    async function logout() {
        await fetch("/api/auth/logout", { method: "POST" });
        window.location.href = "/login";
    }
    return (
        <Sidebar collapsible="icon" {...props}>
            {/* Header */}
            <SidebarHeader className="pt-4 pb-6 px-6 ">
                <Image
                    src="/Logo_white.svg"
                    alt="Property Motion Logo"
                    width={238}
                    height={28}
                    priority
                />
            </SidebarHeader>

            {/* Navigation */}
            <SidebarUIContent>
                <SidebarGroup>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {navItems.map((item) => {
                                const Icon = item.icon;
                                const isActive = pathname.startsWith(item.href);
                                return (
                                    <SidebarMenuItem key={item.href}>
                                        <SidebarMenuButton
                                            asChild
                                            isActive={isActive}
                                            className={cn(
                                                "text-white text-md hover:text-white h-10 hover:bg-white/5 hover:border-none",
                                                isActive &&
                                                    "bg-white/5 border-l-2 border-white text-white"
                                            )}
                                        >
                                            <Link href={item.href}>
                                                <Icon className="w-6 h-6" />
                                                <span>{item.label}</span>
                                            </Link>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                );
                            })}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarUIContent>

            {/* Footer */}
            <SidebarFooter className="border-t border-slate-800 ">
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton
                            asChild
                            className="text-white text-md hover:text-white hover:bg-slate-800/50"
                        >
                            <Link href="#help">
                                <HelpCircle className="w-6 h-6" />
                                <span>Help Center</span>
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                        <SidebarMenuButton
                            className="text-white cursor-pointer text-md hover:text-red-400 hover:bg-red-900/20"
                            onClick={() => logout()}
                        >
                            <LogOut className="w-6 h-6" />
                            <span>Log out</span>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarFooter>
        </Sidebar>
    );
}
