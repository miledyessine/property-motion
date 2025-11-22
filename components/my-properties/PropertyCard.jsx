"use client";

import { Card } from "@/components/ui/card";
import { Bath, BedDouble, Expand } from "lucide-react";
import Image from "next/image";

export function PropertyCard({ p }) {
    return (
        <Card className="p-0 overflow-hidden">
            <div className="relative h-56 bg-gray-200">
                {p.image ? (
                    <Image
                        src={p.image}
                        alt={p.title}
                        fill
                        className="object-cover"
                    />
                ) : (
                    <div className="absolute inset-0 bg-gray-200" />
                )}
            </div>
            <div className="p-4">
                <h3 className="text-lg font-semibold">{p.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">
                    {p.address}
                </p>

                <div className="flex items-center gap-4 mt-3 text-sm text-slate-600">
                    <div className="flex items-center gap-2">
                        <BedDouble className="w-4 h-4 text-accent" />
                        <span>{p.beds} Beds</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Bath className="w-4 h-4 text-accent" />
                        <span>{p.baths} Bathrooms</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Expand className="w-4 h-4 text-accent" />
                        <span>{p.area}</span>
                    </div>
                </div>

                <div className="border-t-2 mt-4 pt-4">
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <div className="text-sm mb-2">
                                <div className="font-medium">Marketing</div>
                            </div>
                            <div className="relative w-full bg-[#27c499]/20 rounded-md h-7">
                                <div
                                    className="absolute left-0 top-0 bottom-0 bg-[#27c499] rounded-md"
                                    style={{ width: `${p.marketing}%` }}
                                />
                                <div className="absolute inset-0 flex items-center justify-center text-sm font-medium text-[#3f3f59]">
                                    <span>{p.marketing}%</span>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="text-sm mb-2">
                                <div className="font-medium">Compliance</div>
                            </div>
                            <div className="relative w-full bg-[#27c499]/20 rounded-md h-7">
                                <div
                                    className="absolute left-0 top-0 bottom-0 bg-[#27c499] rounded-md"
                                    style={{ width: `${p.compliance}%` }}
                                />
                                <div className="absolute inset-0 flex items-center justify-center text-sm font-medium text-[#3f3f59]">
                                    <span>{p.compliance}%</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Card>
    );
}

export default PropertyCard;
