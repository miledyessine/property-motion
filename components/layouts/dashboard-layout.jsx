"use client";

import { AppSidebar } from "@/components/app-sidebar";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import Topbar from "../Topbar";

export default function DashboardLayout({ children }) {
    return (
        <SidebarProvider>
            <AppSidebar />
            <SidebarInset>
                <Topbar />
                <main className="p-6">{children}</main>
            </SidebarInset>
        </SidebarProvider>
    );
}
