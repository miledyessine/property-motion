"use client";

import { useState } from "react";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import LoginForm from "./login-form";
import SignupForm from "./signup-form";

export default function AuthLayout({ initialTab = "login" }) {
    const [activeTab, setActiveTab] = useState(initialTab);

    const imageSrc =
        activeTab === "login"
            ? "/images/login_frame.svg"
            : "/images/signup_frame.svg";

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[calc(100vh-73px)]">
            {/* Left side - Illustration */}
            <div className="hidden lg:flex bg-[#ecf0f4] flex-col justify-between items-center px-12 py-6 rounded-tr-[120px] min-h-[calc(100vh-73px)]">
                {/* Top: Logo + Heading */}
                <div className="flex flex-col items-center space-y-4">
                    <Image
                        src="/Logo.svg"
                        alt="Property Motion Logo"
                        width={238}
                        height={28}
                        priority
                    />

                    <div className="text-center mt-8">
                        <h1 className="text-4xl font-bold text-foreground mb-2">
                            {activeTab === "login"
                                ? "Welcome Back!"
                                : "Get Started!"}
                        </h1>
                        <p className="text-muted-foreground max-w-xs">
                            {activeTab === "login"
                                ? "Login to continue to your account."
                                : "Create an account to continue."}
                        </p>
                    </div>
                </div>

                {/* Illustration */}
                <div className="flex justify-center w-full mt-4">
                    <Image
                        src={
                            activeTab === "login"
                                ? "/images/login_frame.svg"
                                : "/images/signup_frame.svg"
                        }
                        alt={
                            activeTab === "login"
                                ? "Login Illustration"
                                : "Signup Illustration"
                        }
                        width={activeTab === "login" ? 200 : 300}
                        height={activeTab === "login" ? 200 : 300}
                        className="w-full max-w-md h-auto object-contain"
                    />
                </div>

                {/* Footer text */}
                <p className="text-center text-primary text-lg mt-4">
                    Capture every detail with premium photos, videos, and 3D
                    visuals.
                </p>
            </div>

            <div className="flex flex-col px-6 py-12 lg:px-32">
                {/* Tabs fixed at top */}
                <div className="sticky top-0 bg-background z-10">
                    <Tabs
                        value={activeTab}
                        onValueChange={setActiveTab}
                        className="w-full"
                    >
                        <TabsList className="grid w-full grid-cols-2 mb-4 mx-auto max-w-xs">
                            <TabsTrigger value="login">Sign in</TabsTrigger>
                            <TabsTrigger value="signup">Sign up</TabsTrigger>
                        </TabsList>
                    </Tabs>
                </div>

                {/* Centered Form content */}
                <div className="flex flex-col justify-center items-center h-[calc(100vh-86px-88px)] mt-6">
                    {activeTab === "login" && <LoginForm />}
                    {activeTab === "signup" && <SignupForm />}
                </div>
            </div>
        </div>
    );
}
