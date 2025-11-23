"use client";

import React from "react";
import { ResponsiveContainer, PieChart, Pie, Cell, Label } from "recharts";

export function PropertyCharts({ marketing = 20, compliance = 20 }) {
    const marketingData = [
        { name: "Completed", value: marketing },
        { name: "Remaining", value: 100 - marketing },
    ];

    const complianceData = [
        { name: "Completed", value: compliance },
        { name: "Remaining", value: 100 - compliance },
    ];

    const COLORS = ["#001f3f", "#10b981"]; // dark, green

    return (
        <div className="flex justify-between">
            <div className="flex flex-col items-center">
                <div className="items-center">
                    <h4 className="font-semibold text-center mb-3">
                        Marketing
                    </h4>
                    <div className="w-full flex items-center">
                        <div style={{ width: 220, height: 220 }}>
                            <ResponsiveContainer width="100%" height={220}>
                                <PieChart>
                                    <Pie
                                        data={marketingData}
                                        cx="50%"
                                        cy="50%"
                                        innerRadius={60}
                                        outerRadius={90}
                                        paddingAngle={2}
                                        dataKey="value"
                                    >
                                        {marketingData.map((entry, index) => (
                                            <Cell
                                                key={`mcell-${index}`}
                                                fill={
                                                    COLORS[
                                                        index % COLORS.length
                                                    ]
                                                }
                                            />
                                        ))}
                                        <Label
                                            position="center"
                                            content={() => (
                                                <text
                                                    x="50%"
                                                    y="50%"
                                                    textAnchor="middle"
                                                    dominantBaseline="middle"
                                                    fontSize={24}
                                                    fontWeight="bold"
                                                    fill="#111827"
                                                >
                                                    {marketing}%
                                                </text>
                                            )}
                                        />
                                    </Pie>
                                </PieChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                </div>

                <div className="flex gap-24 mt-4 text-sm">
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-[#001f3f]" />
                        <span className="font-medium">
                            {marketing}% Completed
                        </span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-[#10b981]" />
                        <span className="font-medium">
                            {100 - marketing}% Remaining
                        </span>
                    </div>
                </div>
            </div>

            <div className="flex flex-col items-center">
                <div className="items-center">
                    <h4 className="font-semibold text-center mb-3">
                        Compliance
                    </h4>
                    <div className="w-full flex items-center">
                        <div style={{ width: 220, height: 220 }}>
                            <ResponsiveContainer width="100%" height={220}>
                                <PieChart>
                                    <Pie
                                        data={complianceData}
                                        cx="50%"
                                        cy="50%"
                                        innerRadius={60}
                                        outerRadius={90}
                                        paddingAngle={2}
                                        dataKey="value"
                                    >
                                        {complianceData.map((entry, index) => (
                                            <Cell
                                                key={`ccell-${index}`}
                                                fill={
                                                    COLORS[
                                                        index % COLORS.length
                                                    ]
                                                }
                                            />
                                        ))}
                                        <Label
                                            position="center"
                                            content={() => (
                                                <text
                                                    x="50%"
                                                    y="50%"
                                                    textAnchor="middle"
                                                    dominantBaseline="middle"
                                                    fontSize={24}
                                                    fontWeight="bold"
                                                    fill="#111827"
                                                >
                                                    {compliance}%
                                                </text>
                                            )}
                                        />
                                    </Pie>
                                </PieChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                </div>

                <div className="flex gap-24 mt-4 text-sm">
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-[#001f3f]" />
                        <span className="font-medium">
                            {compliance}% Completed
                        </span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-[#10b981]" />
                        <span className="font-medium">
                            {100 - compliance}% Remaining
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PropertyCharts;
