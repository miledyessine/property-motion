"use client";

import { useState } from "react";
import { LayoutGrid, List } from "lucide-react";
import PropertiesListView from "./PropertiesListView";
import PropertiesCardView from "./PropertiesCardView";
import { Button } from "@/components/ui/button";
import { Card } from "../ui/card";

export function PropertiesListing({ items }) {
    const [view, setView] = useState("cards");

    const sample = items ?? [
        {
            id: 1,
            image:"/images/properties/property1.png",
            title: "Test",
            address: "19 College Parade Salusbury Road",
            beds: 4,
            baths: 2,
            area: "100 m²",
            marketing: 20,
            compliance: 20,
        },
        {
            id: 2,
            image:"/images/properties/property2.png",
            title: "Test",
            address: "19 College Parade Salusbury Road",
            beds: 4,
            baths: 2,
            area: "100 m²",
            marketing: 0,
            compliance: 0,
        },
        {
            id: 3,
            image:"/images/properties/property3.png",
            title: "Test",
            address: "19 College Parade Salusbury Road",
            beds: 4,
            baths: 2,
            area: "100 m²",
            marketing: 0,
            compliance: 0,
        },
    ];

    return (
        <Card className="p-6">
            <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold">Properties listing</h2>
                <div className="flex items-center gap-2">
                    <Button
                        size="sm"
                        variant={view === "cards" ? "default" : "outline"}
                        onClick={() => setView("cards")}
                    >
                        <LayoutGrid className="w-4 h-4" fill="currentColor" />
                        Cards
                    </Button>
                    <Button
                        size="sm"
                        variant={view === "list" ? "default" : "outline"}
                        onClick={() => setView("list")}
                    >
                        <List className="w-4 h-4" />
                        List
                    </Button>
                </div>
            </div>

            {view === "cards" ? (
                <PropertiesCardView items={sample} />
            ) : (
                <PropertiesListView items={sample} />
            )}
        </Card>
    );
}

export default PropertiesListing;
