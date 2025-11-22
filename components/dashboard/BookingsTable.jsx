"use client";

import { EllipsisVertical, Plus, SquarePlus } from "lucide-react";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "../ui/button";

const bookings = [
    {
        id: 1,
        service: "Home Inspection",
        total: 2,
        details: "View All",
        status: "Completed",
    },
    {
        id: 2,
        service: "Thermal Camera Scan",
        total: 1,
        details: "View All",
        status: "Pending",
    },
    {
        id: 3,
        service: "Roof Damage Assessment",
        total: 3,
        details: "View All",
        status: "In Progress",
    },
    {
        id: 4,
        service: "3D Virtual Tour",
        total: 5,
        details: "View All",
        status: "Completed",
    },
];

const statusColors = {
    Completed: "text-teal-500",
    Pending: "text-red-500",
    "In Progress": "text-orange-500",
};

export function BookingsTable() {
    return (
        <Card className="border-0 shadow-sm">
            <CardHeader className="border-b pb-4 flex flex-row items-center justify-between">
                <CardTitle className="text-lg font-semibold">
                    Bookings
                </CardTitle>
                <Select defaultValue="january-2026">
                    <SelectTrigger className="w-40 border-0 bg-slate-50 text-sm font-medium">
                        <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="january-2026">
                            January 2026
                        </SelectItem>
                        <SelectItem value="december-2025">
                            December 2025
                        </SelectItem>
                        <SelectItem value="november-2025">
                            November 2025
                        </SelectItem>
                    </SelectContent>
                </Select>
                <EllipsisVertical className="w-5 h-5 text-slate-400 cursor-pointer hover:text-slate-600" />
            </CardHeader>
            <CardContent className="pt-6">
                <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                        <thead>
                            <tr className="border-b">
                                <th className="text-left py-3 px-4 font-semibold text-slate-700">
                                    Service
                                </th>
                                <th className="text-left py-3 px-4 font-semibold text-slate-700">
                                    Total
                                </th>
                                <th className="text-left py-3 px-4 font-semibold text-slate-700">
                                    Details
                                </th>
                                <th className="text-left py-3 px-4 font-semibold text-slate-700">
                                    Status
                                </th>
                                <th className="text-center py-3 px-4 font-semibold text-slate-700">
                                    Add
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {bookings.map((booking) => (
                                <tr
                                    key={booking.id}
                                    className="border-b hover:bg-slate-50 transition-colors"
                                >
                                    <td className="py-3 px-4 text-slate-900">
                                        {booking.service}
                                    </td>
                                    <td className="py-3 px-4 text-slate-600">
                                        {booking.total}
                                    </td>
                                    <td className="py-3 px-4">
                                        <a
                                            href="#"
                                            className="text-primary underline font-medium"
                                        >
                                            View All
                                        </a>
                                    </td>
                                    <td className="py-3 px-4">
                                        <span
                                            className={`
                                                inline-block px-3 py-1 rounded-full text-sm font-semibold
                                                ${
                                                    statusColors[
                                                        booking.status
                                                    ] ||
                                                    "bg-gray-100 text-gray-600"
                                                }
                                            `}
                                        >
                                            {booking.status}
                                        </span>
                                    </td>
                                    <td className="py-3 px-4 text-center">
                                        <Button
                                            size="icon"
                                            variant="ghost"
                                            className="p-1 hover:bg-slate-200 rounded transition-colors"
                                        >
                                            <SquarePlus className="w-4 h-4 text-slate-400" />
                                        </Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </CardContent>
        </Card>
    );
}
