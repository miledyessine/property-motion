"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const data = [
    { name: "Completed", value: 20 },
    { name: "Remaining", value: 80 },
];

const COLORS = ["#001f3f", "#10b981"];

export function Charts() {
    return (
        <div className="grid grid-cols-2 gap-6">
            {/* Marketing */}
            <Card className="border-0 shadow-sm">
                <CardHeader className="border-b pb-4">
                    <div className="flex items-center justify-between">
                        <CardTitle className="text-lg font-semibold">
                            Marketing
                        </CardTitle>
                        <a
                            href="#"
                            className="text-accent hover:text-teal-600 text-sm font-medium"
                        >
                            View More
                        </a>
                    </div>
                </CardHeader>
                <CardContent className="pt-8">
                    <div className="flex flex-col items-center">
                        <ResponsiveContainer width="100%" height={200}>
                            <PieChart>
                                <Pie
                                    data={data}
                                    cx="50%"
                                    cy="50%"
                                    innerRadius={60}
                                    outerRadius={90}
                                    paddingAngle={2}
                                    dataKey="value"
                                >
                                    {data.map((entry, index) => (
                                        <Cell
                                            key={`cell-${index}`}
                                            fill={COLORS[index % COLORS.length]}
                                        />
                                    ))}
                                </Pie>
                            </PieChart>
                        </ResponsiveContainer>
                        <div className="flex gap-6 mt-4 text-sm font-medium">
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full bg-slate-900" />
                                <span>20% Completed</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full bg-accent" />
                                <span>80% Remaining</span>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Compliance */}
            <Card className="border-0 shadow-sm">
                <CardHeader className="border-b pb-4">
                    <div className="flex items-center justify-between">
                        <CardTitle className="text-lg font-semibold">
                            Compliance
                        </CardTitle>
                        <a
                            href="#"
                            className="text-accent hover:text-teal-600 text-sm font-medium"
                        >
                            View More
                        </a>
                    </div>
                </CardHeader>
                <CardContent className="pt-8">
                    <div className="flex flex-col items-center">
                        <ResponsiveContainer width="100%" height={200}>
                            <PieChart>
                                <Pie
                                    data={data}
                                    cx="50%"
                                    cy="50%"
                                    innerRadius={60}
                                    outerRadius={90}
                                    paddingAngle={2}
                                    dataKey="value"
                                >
                                    {data.map((entry, index) => (
                                        <Cell
                                            key={`cell-${index}`}
                                            fill={COLORS[index % COLORS.length]}
                                        />
                                    ))}
                                </Pie>
                            </PieChart>
                        </ResponsiveContainer>
                        <div className="flex gap-6 mt-4 text-sm font-medium">
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full bg-slate-900" />
                                <span>20% Completed</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full bg-accent" />
                                <span>80% Remaining</span>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
