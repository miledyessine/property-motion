import { BookingsStatusCards } from "@/components/dashboard/BookingsStatusCards";
import { BookingsTable } from "@/components/dashboard/BookingsTable";
import { Charts } from "@/components/dashboard/Charts";
import { HeroCard } from "@/components/HeroCard";
import DashboardLayout from "@/components/layouts/dashboard-layout";

export default function DashboardPage() {
    return (
        <DashboardLayout>
            <div className="p-2 space-y-4">
                <h1 className="text-3xl font-bold">Dashboard</h1>
                <HeroCard />
                <Charts />
                <BookingsTable />
                <BookingsStatusCards />
            </div>
        </DashboardLayout>
    );
}
