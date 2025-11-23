import { NextRequest, NextResponse } from "next/server";
import {
    readProperties,
    writeProperties,
    generateId,
} from "@/lib/propertiesDb";

export async function GET(req) {
    const url = new URL(req.url);
    const id = url.searchParams.get("id");

    const properties = readProperties();

    if (id) {
        const property = properties.find((p) => p.id === id);
        if (!property) {
            return NextResponse.json(
                { error: "Property not found" },
                { status: 404 }
            );
        }
        return NextResponse.json(property);
    }

    return NextResponse.json(properties);
}

export async function POST(req) {
    try {
        const data = await req.json();
        const properties = readProperties();

        const newProperty = {
            id: generateId(),
            ...data,
        };

        properties.push(newProperty);
        writeProperties(properties);

        return NextResponse.json(newProperty, { status: 201 });
    } catch (err) {
        return NextResponse.json({ error: "Invalid data" }, { status: 400 });
    }
}
