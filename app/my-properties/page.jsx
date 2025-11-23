"use client";
import DashboardLayout from "@/components/layouts/dashboard-layout";
import { useState } from "react";
import { NewPropertyCard } from "@/components/my-properties/NewPropertyCard";
import PropertiesListing from "@/components/my-properties/PropertiesListing";
import AddPropertyForm from "@/components/my-properties/AddPropertyForm";

import { useRouter } from "next/navigation";

export default function MyPropertiesPage() {
    const [showAddForm, setShowAddForm] = useState(false);

    const router = useRouter();
    function handleAddClick() {
        setShowAddForm(true);
    }

    function handleSubmit(form) {
        console.log("Adding property", form);
        setShowAddForm(false);
        if (form.id) {
            router.push(`/my-properties/${form.id}`);
        } else {
            router.push("/my-properties");
        }
    }

    return (
        <DashboardLayout>
            <div className="p-2 space-y-4">
                <div className="space-y-1">
                    <h1 className="text-3xl font-bold">My Properties</h1>
                    <p className="text-muted-foreground font-medium">
                        Easily manage and track all your properties in one
                        place.
                    </p>
                </div>

                {showAddForm ? (
                    <AddPropertyForm
                        onSubmit={handleSubmit}
                    />
                ) : (
                    <>
                        <NewPropertyCard onAdd={handleAddClick} />
                        <PropertiesListing />
                    </>
                )}
            </div>
        </DashboardLayout>
    );
}
