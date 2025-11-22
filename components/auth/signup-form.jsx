"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { Eye, EyeOff } from "lucide-react";
export default function SignupForm() {
    const [formData, setFormData] = useState({
        businessName: "",
        officeAddress: "",
        postCode: "",
        email: "",
        password: "",
        confirmPassword: "",
    });
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            alert("Passwords do not match");
            return;
        }
        console.log(formData);
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
                <Label htmlFor="businessName" className="text-sm font-medium">
                    Business Name
                </Label>
                <Input
                    id="businessName"
                    name="businessName"
                    placeholder="Enter Business Name"
                    value={formData.businessName}
                    onChange={handleChange}
                    required
                    className="bg-input border-border"
                />
            </div>

            <div className="space-y-2">
                <Label htmlFor="officeAddress" className="text-sm font-medium">
                    Office Address
                </Label>
                <Input
                    id="officeAddress"
                    name="officeAddress"
                    placeholder="Enter Office Address"
                    value={formData.officeAddress}
                    onChange={handleChange}
                    required
                    className="bg-input border-border"
                />
            </div>

            <div className="space-y-2">
                <Label htmlFor="postCode" className="text-sm font-medium">
                    Post Code
                </Label>
                <Input
                    id="postCode"
                    name="postCode"
                    placeholder="Enter Post Code"
                    value={formData.postCode}
                    onChange={handleChange}
                    required
                    className="bg-input border-border"
                />
            </div>

            <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium">
                    Email
                </Label>
                <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-input border-border"
                />
            </div>

            <div className="space-y-2">
                <Label htmlFor="password" className="text-sm font-medium">
                    Password
                </Label>
                <div className="relative">
                    <Input
                        id="password"
                        name="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                        className="bg-input border-border pr-10"
                    />
                    <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-2.5 text-muted-foreground hover:text-foreground"
                    >
                        <EyeOff
                            className={`w-5 h-5 ${
                                showPassword ? "hidden" : "block"
                            }`}
                        />
                        <Eye
                            className={`w-5 h-5 ${
                                showPassword ? "block" : "hidden"
                            }`}
                        />
                    </button>
                </div>
            </div>

            <div className="space-y-2">
                <Label
                    htmlFor="confirmPassword"
                    className="text-sm font-medium"
                >
                    Confirm Password
                </Label>
                <div className="relative">
                    <Input
                        id="confirmPassword"
                        name="confirmPassword"
                        type={showConfirmPassword ? "text" : "password"}
                        placeholder="Password"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        required
                        className="bg-input border-border pr-10"
                    />
                    <button
                        type="button"
                        onClick={() =>
                            setShowConfirmPassword(!showConfirmPassword)
                        }
                        className="absolute right-3 top-2.5 text-muted-foreground hover:text-foreground"
                    >
                        <EyeOff
                            className={`w-5 h-5 ${
                                showPassword ? "hidden" : "block"
                            }`}
                        />
                        <Eye
                            className={`w-5 h-5 ${
                                showPassword ? "block" : "hidden"
                            }`}
                        />
                    </button>
                </div>
            </div>

            <Button
                type="submit"
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
            >
                Sign up
            </Button>

            <p className="text-center text-xs text-muted-foreground">
                By signing up to create an account I accept Company's{" "}
                <Link href="#" className=" underline hover:text-primary/80">
                    Terms of use & Privacy Policy
                </Link>
                .
            </p>

            <p className="text-center text-sm text-muted-foreground">
                Already have an account?{" "}
                <Link
                    href="/login"
                    className="text-accent hover:text-accent/80 font-medium"
                >
                    Sign in
                </Link>
            </p>
        </form>
    );
}
