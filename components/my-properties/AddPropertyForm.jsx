"use client";

import { useState } from "react";
import Image from "next/image";
import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "../ui/label";
import { ImagePlus, Upload } from "lucide-react";
import { Input } from "../ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "../ui/select";

export function AddPropertyForm({ onSubmit }) {
    const [formData, setFormData] = useState({
        propertyName: "",
        address: "",
        city: "",
        country: "",
        postCode: "",
        reference: "",
        value: "",
        propertyType: "",
        access: "",
        listingType: "sale",
        dimension: "",
        bedrooms: "",
        bathrooms: "",
        floors: "",
        parking: false,
        garden: false,
        garage: false,
    });
    const [imagePreview, setImagePreview] = useState(null);
    const [imageFile, setImageFile] = useState(null);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSelectChange = (name, value) => {
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleToggle = (name) => {
        setFormData((prev) => ({ ...prev, [name]: !prev[name] }));
    };

    const handleImageUpload = (e) => {
        const file = e.target.files?.[0];
        if (file) {
            // Validate file size (less than 2MB)
            if (file.size > 2 * 1024 * 1024) {
                alert("File size must be less than 2MB");
                return;
            }
            setImageFile(file);
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const payload = { ...formData };

        // Convert file to base64 (optional)
        if (imageFile) {
            const reader = new FileReader();
            reader.onloadend = async () => {
                payload.image = reader.result;
                await submitProperty(payload);
            };
            reader.readAsDataURL(imageFile);
        } else {
            await submitProperty(payload);
        }
    };

    async function submitProperty(payload) {
        try {
            const res = await fetch("/api/properties", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });

            if (!res.ok) throw new Error("Failed to add property");

            const newProperty = await res.json();
            console.log("Property added:", newProperty);
            onSubmit?.(newProperty);
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <Card>
            <CardHeader>
                <CardTitle className="text-lg">Add Property</CardTitle>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit} className="max-w-2xl">
                    {/* Image Upload Section */}
                    <div className="mb-8">
                        <Label className="block text-sm font-semibold mb-3">
                            Upload Image
                        </Label>
                        <div className="flex gap-4">
                            {/* Square upload area */}
                            <label className="w-32 h-32 shrink-0">
                                <div className="w-full h-full border-2 border-dashed border-primary rounded-lg p-4 text-center hover:bg-muted/50 transition cursor-pointer flex flex-col items-center justify-center bg-background">
                                    {imagePreview ? (
                                        <div className="relative w-full h-full">
                                            <Image
                                                src={
                                                    imagePreview ||
                                                    "/placeholder.svg"
                                                }
                                                alt="Preview"
                                                fill
                                                className="object-cover rounded"
                                            />
                                        </div>
                                    ) : (
                                        <>
                                            <ImagePlus className="h-6 w-6 text-muted-foreground mb-3" />
                                            <p className="text-xs text-muted-foreground">
                                                Upload Image
                                            </p>
                                        </>
                                    )}
                                </div>
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={handleImageUpload}
                                    className="hidden"
                                />
                            </label>

                            {/* Text section */}
                            <div className="flex flex-col justify-center">
                                <p className="text-xs font-medium text-foreground mb-2">
                                    Recommended resolution
                                </p>
                                <p className="text-xs text-muted-foreground">
                                    is 640*640 with file size
                                    <br />
                                    less than 2MB
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Property Name */}
                    <div className="mb-6">
                        <Label
                            htmlFor="propertyName"
                            className="text-sm font-semibold mb-2 block"
                        >
                            Property Name
                        </Label>
                        <Input
                            id="propertyName"
                            name="propertyName"
                            placeholder="Enter property name"
                            value={formData.propertyName}
                            onChange={handleInputChange}
                            className="h-12 border-primary"
                        />
                    </div>

                    {/* Address Section */}
                    <div className="mb-6">
                        <Label className="text-sm font-semibold mb-3 block">
                            Address
                        </Label>
                        <div className="grid grid-cols-2 gap-4 mb-4">
                            <Input
                                name="address"
                                placeholder="Address"
                                value={formData.address}
                                onChange={handleInputChange}
                                className="h-12 border-primary"
                            />
                            <Input
                                name="city"
                                placeholder="City"
                                value={formData.city}
                                onChange={handleInputChange}
                                className="h-12 border-primary"
                            />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <Input
                                name="country"
                                placeholder="Country"
                                value={formData.country}
                                onChange={handleInputChange}
                                className="h-12 border-primary"
                            />
                            <Input
                                name="postCode"
                                placeholder="Post Code"
                                value={formData.postCode}
                                onChange={handleInputChange}
                                className="h-12 border-primary"
                            />
                        </div>
                    </div>

                    {/* Details Section */}
                    <div className="mb-6">
                        <Label className="text-sm font-semibold mb-3 block">
                            Details
                        </Label>
                        <div className="grid grid-cols-2 gap-4 mb-4">
                            <Input
                                name="reference"
                                placeholder="Property reference"
                                value={formData.reference}
                                onChange={handleInputChange}
                                className="h-12 border-primary"
                            />
                            <Select
                                className="h-12"
                                value={formData.value}
                                onValueChange={(val) =>
                                    handleSelectChange("value", val)
                                }
                            >
                                <SelectTrigger className="h-12 border-primary w-full">
                                    <SelectValue placeholder="£ Property value" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="under-500k">
                                        Under £500k
                                    </SelectItem>
                                    <SelectItem value="500k-1m">
                                        £500k - £1m
                                    </SelectItem>
                                    <SelectItem value="1m-2m">
                                        £1m - £2m
                                    </SelectItem>
                                    <SelectItem value="over-2m">
                                        Over £2m
                                    </SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        <div className="grid grid-cols-2 gap-4 mb-4">
                            <Select
                                value={formData.propertyType}
                                onValueChange={(val) =>
                                    handleSelectChange("propertyType", val)
                                }
                            >
                                <SelectTrigger className="h-12 border-primary w-full">
                                    <SelectValue placeholder="Property Type" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="apartment">
                                        Apartment
                                    </SelectItem>
                                    <SelectItem value="house">House</SelectItem>
                                    <SelectItem value="townhouse">
                                        Townhouse
                                    </SelectItem>
                                    <SelectItem value="commercial">
                                        Commercial
                                    </SelectItem>
                                </SelectContent>
                            </Select>
                            <Select
                                value={formData.access}
                                onValueChange={(val) =>
                                    handleSelectChange("access", val)
                                }
                            >
                                <SelectTrigger className="h-12 border-primary w-full">
                                    <SelectValue placeholder="Access property" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="concierge">
                                        Concierge / Porter
                                    </SelectItem>
                                    <SelectItem value="key">
                                        Key / Unrestricted
                                    </SelectItem>
                                    <SelectItem value="appointment">
                                        By Appointment
                                    </SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        {/* Sale/Let Buttons */}
                        <div className="grid grid-cols-2 gap-4 mb-4">
                            <Button
                                type="button"
                                variant={
                                    formData.listingType === "sale"
                                        ? "default"
                                        : "outline"
                                }
                                onClick={() =>
                                    handleSelectChange("listingType", "sale")
                                }
                                className="h-12 border-primary"
                            >
                                <img
                                    src="/icons/Tag.svg"
                                    alt="Sale"
                                    className="h-4 w-4"
                                />
                                Sale
                            </Button>
                            <Button
                                type="button"
                                variant={
                                    formData.listingType === "let"
                                        ? "default"
                                        : "outline"
                                }
                                onClick={() =>
                                    handleSelectChange("listingType", "let")
                                }
                                className="h-12 border-primary"
                            >
                                <img
                                    src="/icons/Flag.svg"
                                    alt="Let"
                                    className="h-4 w-4"
                                />
                                Let
                            </Button>
                        </div>
                    </div>

                    {/* Property Features */}
                    <div className="mb-8">
                        <div className="grid grid-cols-4 gap-2 mb-4">
                            <Input
                                name="dimension"
                                placeholder="Dimension"
                                value={formData.dimension}
                                onChange={handleInputChange}
                                className="h-12 border-primary"
                            />
                            <Input
                                name="bedrooms"
                                type="number"
                                placeholder="No. bedrooms"
                                value={formData.bedrooms}
                                onChange={handleInputChange}
                                className="h-12 border-primary"
                            />
                            <Input
                                name="bathrooms"
                                type="number"
                                placeholder="No. bathrooms"
                                value={formData.bathrooms}
                                onChange={handleInputChange}
                                className="h-12 border-primary"
                            />
                            <Input
                                name="floors"
                                type="number"
                                placeholder="No. floors"
                                value={formData.floors}
                                onChange={handleInputChange}
                                className="h-12 border-primary"
                            />
                        </div>

                        {/* Amenities */}
                        <div className="grid grid-cols-3 gap-2">
                            <Button
                                type="button"
                                variant={
                                    formData.parking ? "default" : "outline"
                                }
                                onClick={() => handleToggle("parking")}
                                className="h-12 border-primary"
                            >
                                <img
                                    src="/icons/Parking.svg"
                                    alt="Parking"
                                    className="h-4 w-4"
                                />
                                Parking
                            </Button>
                            <Button
                                type="button"
                                variant={
                                    formData.garden ? "default" : "outline"
                                }
                                onClick={() => handleToggle("garden")}
                                className="h-12 border-primary"
                            >
                                <img
                                    src="/icons/garden.svg"
                                    alt="Garden"
                                    className="h-4 w-4"
                                />
                                Garden
                            </Button>
                            <Button
                                type="button"
                                variant={
                                    formData.garage ? "default" : "outline"
                                }
                                onClick={() => handleToggle("garage")}
                                className="h-12 border-primary"
                            >
                                <img
                                    src="/icons/garage.svg"
                                    alt="Garage"
                                    className="h-4 w-4"
                                />
                                Garage
                            </Button>
                        </div>
                    </div>

                    {/* Submit Button */}
                    <div className="flex justify-center">
                        <Button
                            type="submit"
                            className="bg-primary text-primary-foreground px-12 h-12 font-semibold"
                        >
                            Add Property
                        </Button>
                    </div>
                </form>
            </CardContent>
        </Card>
    );
}

export default AddPropertyForm;
