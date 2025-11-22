"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

export function BookingsStatusCards() {
    const upcoming = [
        { id: 1, title: "Test", subtitle: "Service Name" },
        { id: 2, title: "Test", subtitle: "Service Name" },
        { id: 3, title: "Test", subtitle: "Service Name" },
    ];

    const inProgress = [{ id: 4, title: "Test", subtitle: "Service Name" }];

    const completed = [
        { id: 5, title: "Test", subtitle: "Service Name" },
        { id: 6, title: "Test", subtitle: "Service Name" },
    ];

    function ListItem({ item }) {
        return (
            <div className="flex items-center justify-between py-4">
                <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/20 shrink-0" />
                    <div>
                        <div className="text-sm font-medium text-primary">
                            {item.title}
                        </div>
                        <div className="text-xs text-[#3f3f59]">
                            {item.subtitle}
                        </div>
                    </div>
                </div>

                <a href="#" className="text-primary">
                    <ExternalLink className="w-5 h-5" />
                </a>
            </div>
        );
    }

    return (
        <div className="grid grid-cols-3 gap-4">
            {/* Upcoming */}
            <Card className="border-0 shadow-sm">
                <CardHeader className="border-b pb-4">
                    <div className="flex items-center justify-between">
                        <CardTitle className="text-lg font-semibold">
                            Upcoming
                        </CardTitle>
                        <a
                            href="#"
                            className="text-accent underline hover:text-teal-600 text-sm font-medium"
                        >
                            View More
                        </a>
                    </div>
                </CardHeader>
                <CardContent className="pt-0">
                    <div className="flex flex-col">
                        {upcoming.map((item, idx) => (
                            <div key={item.id}>
                                <ListItem item={item} />
                                {idx !== upcoming.length - 1 && (
                                    <div className="h-px bg-slate-200" />
                                )}
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>

            {/* In Progress */}
            <Card className="border-0 shadow-sm">
                <CardHeader className="border-b pb-4">
                    <div className="flex items-center justify-between">
                        <CardTitle className="text-lg font-semibold">
                            In Progress
                        </CardTitle>
                        <a
                            href="#"
                            className="text-accent underline hover:text-teal-600 text-sm font-medium"
                        >
                            View More
                        </a>
                    </div>
                </CardHeader>
                <CardContent className="pt-0">
                    <div className="flex flex-col">
                        {inProgress.map((item, idx) => (
                            <div key={item.id}>
                                <ListItem item={item} />
                                {idx !== inProgress.length - 1 && (
                                    <div className="h-px bg-slate-200" />
                                )}
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>

            {/* Completed */}
            <Card className="border-0 shadow-sm">
                <CardHeader className="border-b pb-4">
                    <div className="flex items-center justify-between">
                        <CardTitle className="text-lg font-semibold">
                            Completed
                        </CardTitle>
                        <a
                            href="#"
                            className="text-accent underline hover:text-teal-600 text-sm font-medium"
                        >
                            View More
                        </a>
                    </div>
                </CardHeader>
                <CardContent className="pt-0">
                    <div className="flex flex-col">
                        {completed.map((item, idx) => (
                            <div key={item.id}>
                                <ListItem item={item} />
                                {idx !== completed.length - 1 && (
                                    <div className="h-px bg-slate-200" />
                                )}
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
