"use client";

import { useState, useEffect } from "react";
import { LayoutGrid, List } from "lucide-react";
import PropertiesListView from "./PropertiesListView";
import PropertiesCardView from "./PropertiesCardView";
import { Button } from "@/components/ui/button";
import { Card } from "../ui/card";

export function PropertiesListing() {
    const [view, setView] = useState("cards");
    const [properties, setProperties] = useState([]);

    useEffect(() => {
        async function fetchProperties() {
            try {
                const res = await fetch("/api/properties");
                if (!res.ok) throw new Error("Failed to fetch properties");
                const data = await res.json();
                setProperties(data);
            } catch (err) {
                console.error(err);
            }
        }

        fetchProperties();
    }, []);

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
                <PropertiesCardView items={properties} />
            ) : (
                <PropertiesListView items={properties} />
            )}
        </Card>
    );
}

export default PropertiesListing;
