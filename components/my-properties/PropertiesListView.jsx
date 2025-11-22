"use client";

import React from "react";

export function PropertiesListView({ items = [] }) {
    return (
        <div className="overflow-x-auto mt-4">
            <table className="w-full table-fixed text-sm">
                <thead>
                    <tr className="text-left text-slate-600 border-b-2 pb-2">
                        <th className="pb-4">Property Name</th>
                        <th className="pb-4">Address</th>
                        <th className="pb-4">No. beds</th>
                        <th className="pb-4">No. baths</th>
                        <th className="pb-4">Dimension</th>
                        <th className="pb-4">Marketing</th>
                        <th className="pb-4">Compliance</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map((p) => (
                        <tr key={p.id} className="">
                            <td className="py-4 align-top">{p.title}</td>
                            <td className="py-4 align-top">{p.address}</td>
                            <td className="py-4 align-top">{p.beds}</td>
                            <td className="py-4 align-top">{p.baths}</td>
                            <td className="py-4 align-top">{p.area}</td>
                            <td className="py-4 align-top">
                                <div className="inline-block bg-[#27c499]/20 text-[#3f3f59] rounded-md w-1/2 text-center px-3 py-1 text-sm font-medium">
                                    {p.marketing}%
                                </div>
                            </td>
                            <td className="py-4 align-top">
                                <div className="inline-block bg-[#27c499]/20 text-[#3f3f59] rounded-md w-1/2 text-center px-3 py-1 text-sm font-medium">
                                    {p.compliance}%
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default PropertiesListView;
