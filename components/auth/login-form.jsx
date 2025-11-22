"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff } from "lucide-react";

export default function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle login logic
        console.log({ email, password });
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium">
                    Email
                </Label>
                <Input
                    id="email"
                    type="email"
                    placeholder="Enter Your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
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
                        type={showPassword ? "text" : "password"}
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="bg-input border-border pr-10"
                    />
                    <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-2.5 text-muted-foreground hover:text-foreground"
                    >
                        <EyeOff className={`w-5 h-5 ${showPassword ? "hidden" : "block"}`} />
                        <Eye className={`w-5 h-5 ${showPassword ? "block" : "hidden"}`} />
                    </button>
                </div>
            </div>

            <div className="flex justify-end">
                <Link
                    href="#"
                    className="text-sm text-muted-foreground underline hover:text-primary"
                >
                    Forgot password?
                </Link>
            </div>

            <Button
                type="submit"
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
            >
                Sign In
            </Button>

            <p className="text-center text-sm text-muted-foreground">
                Don't have an account?{" "}
                <Link
                    href="/signup"
                    className="text-accent hover:text-accent/80 font-medium"
                >
                    Sign up
                </Link>
            </p>
        </form>
    );
}
