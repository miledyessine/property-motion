"use client";

import DashboardLayout from "@/components/layouts/dashboard-layout";
import { Card } from "@/components/ui/card";
import { EllipsisVertical } from "lucide-react";
import Image from "next/image";
import PropertyCharts from "@/components/my-properties/PropertyCharts";
import React, { useState, useEffect } from "react";
import { NewPropertyCard } from "@/components/my-properties/NewPropertyCard";
import AddPropertyForm from "@/components/my-properties/AddPropertyForm";
import { useParams, useRouter } from "next/navigation";

export default function PropertyPage() {
    
        const router = useRouter();
    const params = useParams();
    const propertyId = params?.id;

    const [property, setProperty] = useState(null);
    const [loading, setLoading] = useState(true);
    const [showAddForm, setShowAddForm] = useState(false);

    // Fetch property by id from API
    useEffect(() => {
        async function fetchProperty() {
            try {
                const res = await fetch(`/api/properties?id=${propertyId}`);
                if (!res.ok) throw new Error("Property not found");

                const data = await res.json();

                // Map API fields to your UI props
                const mapped = {
                    ...data,
                    title: data.propertyName,
                    beds: data.bedrooms,
                    baths: data.bathrooms,
                    area: data.dimension,
                    marketing: data.marketing ?? 0,
                    compliance: data.compliance ?? 0,
                    image: data.image ?? "/images/properties/property1.png",
                };

                setProperty(mapped);
            } catch (err) {
                console.error(err);
                setProperty(null);
            } finally {
                setLoading(false);
            }
        }

        if (propertyId) fetchProperty();
    }, [propertyId]);

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

    if (loading)
        return (
            <DashboardLayout>
                <div className="p-4">Loading property...</div>
            </DashboardLayout>
        );

    if (!property)
        return (
            <DashboardLayout>
                <div className="p-4">Property not found.</div>
            </DashboardLayout>
        );

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

                        <Card className="p-6">
                            <div className="flex gap-6 items-start">
                                <div className="w-60 h-40 relative bg-gray-200 rounded-md overflow-hidden">
                                    {property.image ? (
                                        <Image
                                            src={property.image}
                                            alt={property.title}
                                            width={320}
                                            height={240}
                                            className="object-cover rounded-md"
                                        />
                                    ) : (
                                        <div className="absolute inset-0 bg-gray-200" />
                                    )}
                                </div>

                                <div className="flex-1">
                                    <div className="flex justify-between">
                                        <div>
                                            <h2 className="text-xl font-semibold">
                                                {property.title}
                                            </h2>
                                            <div className="text-md text-muted-foreground mt-2">
                                                {property.address}
                                            </div>
                                            <div className="text-md text-muted-foreground mt-2">
                                                Ref:{" "}
                                                {property.reference || "N/A"}
                                            </div>
                                        </div>
                                        <EllipsisVertical className="w-6 h-6 text-muted-foreground cursor-pointer" />
                                    </div>
                                </div>
                            </div>

                            {/* Property Details */}
                            <div className="mt-6">
                                <h3 className="font-semibold text-lg mb-3">
                                    Property Details
                                </h3>
                                <div className="grid grid-cols-3 gap-6 text-md text-slate-700">
                                    <div>
                                        <div>
                                            <span className="font-medium">
                                                Property type:
                                            </span>{" "}
                                            {property.propertyType}
                                        </div>
                                        <div className="mt-2">
                                            <span className="font-medium">
                                                No. of bedrooms:
                                            </span>{" "}
                                            {property.bedrooms}
                                        </div>
                                        <div className="mt-2">
                                            <span className="font-medium">
                                                Dimension:
                                            </span>{" "}
                                            {property.dimension} m²
                                        </div>
                                    </div>
                                    <div>
                                        <div>
                                            <span className="font-medium">
                                                Property value:
                                            </span>{" "}
                                            {property.value}
                                        </div>
                                        <div className="mt-2">
                                            <span className="font-medium">
                                                No. of bathrooms:
                                            </span>{" "}
                                            {property.bathrooms}
                                        </div>
                                        <div className="mt-2">
                                            <span className="font-medium">
                                                Rest of:
                                            </span>{" "}
                                            {[
                                                property.parking
                                                    ? "Parking"
                                                    : null,
                                                property.garden
                                                    ? "Garden"
                                                    : null,
                                                property.garage
                                                    ? "Garage"
                                                    : null,
                                            ]
                                                .filter(Boolean)
                                                .join(", ") || "None"}
                                        </div>
                                    </div>
                                    <div>
                                        <div>
                                            <span className="font-medium">
                                                Property on:
                                            </span>{" "}
                                            {property.listingType}
                                        </div>
                                        <div className="mt-2">
                                            <span className="font-medium">
                                                No. of floors:
                                            </span>{" "}
                                            {property.floors}
                                        </div>
                                        <div className="mt-2">
                                            <span className="font-medium">
                                                Access through:
                                            </span>{" "}
                                            {property.access}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="border-t my-6" />
                            <PropertyCharts
                                marketing={property.marketing}
                                compliance={property.compliance}
                            />
                        </Card>
                    </>
                )}
            </div>
        </DashboardLayout>
    );
}
