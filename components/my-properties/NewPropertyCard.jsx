"use client";
import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardAction,
    CardContent,
} from "@/components/ui/card";
import { SquarePlus } from "lucide-react";

export function NewPropertyCard({ onAdd }) {
    return (
        <Card>
            <CardHeader>
                <CardTitle className="text-lg">New property</CardTitle>
                <CardDescription>
                    You can add your property listings
                </CardDescription>
                <CardAction className="w-full">
                    <button
                        onClick={() => onAdd && onAdd()}
                        className="px-6 py-4 rounded-md font-bold text-base cursor-pointer outline-2  outline-primary inline-flex justify-center items-center gap-3"
                        size="lg"
                    >
                        <SquarePlus className="mr-1 h-4 w-4" />
                        Add New Property
                    </button>
                </CardAction>
            </CardHeader>
        </Card>
    );
}
