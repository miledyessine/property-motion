"use client";

import PropertyCard from "./PropertyCard";

export function PropertiesCardView({ items = [] }) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
            {items.map((p) => (
                <PropertyCard key={p.id} p={p} />
            ))}
        </div>
    );
}

export default PropertiesCardView;
