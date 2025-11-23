"use client";

import { useState } from "react";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import LoginForm from "./login-form";
import SignupForm from "./signup-form";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function AuthLayout({ initialTab = "login" }) {
    const [activeTab, setActiveTab] = useState(initialTab);

    const imageSrc =
        activeTab === "login"
            ? "/images/login_frame.svg"
            : "/images/signup_frame.svg";

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[calc(100vh-73px)] bg-white">
            {/* Left side - Illustration */}
            <div className="hidden lg:flex bg-[#ecf0f4] flex-col justify-between items-center px-12 py-6 rounded-tr-[120px] min-h-[calc(100vh-73px)]">
                {/* Top: Logo + Heading */}
                <div className="flex flex-col items-center space-y-4">
                    <Link href="/">
                    <Image
                        src="/Logo.svg"
                        alt="Property Motion Logo"
                        width={238}
                        height={28}
                        priority
                    /></Link>

                    <div className="text-center mt-8">
                        <AnimatePresence mode="wait">
                            {activeTab === "login" ? (
                                <motion.div
                                    key="login-text"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <h1 className="text-4xl font-bold text-foreground mb-2">
                                        Welcome Back!
                                    </h1>
                                    <p className="text-muted-foreground max-w-xs">
                                        Login to continue to your account.
                                    </p>
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="signup-text"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <h1 className="text-4xl font-bold text-foreground mb-2">
                                        Get Started!
                                    </h1>
                                    <p className="text-muted-foreground max-w-xs">
                                        Create an account to continue.
                                    </p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>

                {/* Illustration */}
                <div className="flex justify-center w-full mt-4">
                    <AnimatePresence mode="wait">
                        {activeTab === "login" ? (
                            <motion.div
                                key="login-img"
                                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.9, y: -20 }}
                                transition={{ duration: 0.35 }}
                                className="w-fit"
                            >
                                <Image
                                    src="/images/login_frame.svg"
                                    alt="Login Illustration"
                                    width={200}
                                    height={200}
                                    className="w-full max-w-md h-auto object-contain"
                                />
                            </motion.div>
                        ) : (
                            <motion.div
                                key="signup-img"
                                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.9, y: -20 }}
                                transition={{ duration: 0.35 }}
                                className="w-fit"
                            >
                                <Image
                                    src="/images/signup_frame.svg"
                                    alt="Signup Illustration"
                                    width={300}
                                    height={300}
                                    className="w-full max-w-md h-auto object-contain"
                                />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {/* Footer text */}
                <p className="text-center text-primary text-lg mt-4">
                    Capture every detail with premium photos, videos, and 3D
                    visuals.
                </p>
            </div>

            <div className="flex flex-col px-6 py-12 lg:px-32">
                <div className="sticky top-0 z-10">
                    <Tabs
                        value={activeTab}
                        onValueChange={setActiveTab}
                        className="w-full "
                    >
                        <TabsList className="grid bg-background cursor-pointer w-full grid-cols-2 mb-4 mx-auto max-w-xs">
                            <TabsTrigger value="signup" className="cursor-pointer">Sign up</TabsTrigger>
                            <TabsTrigger value="login" className="cursor-pointer">Sign in</TabsTrigger>
                        </TabsList>
                    </Tabs>
                </div>

                <div className="flex flex-col justify-center items-center h-[calc(100vh-86px-88px)] mt-6">
                    <AnimatePresence mode="wait">
                        {activeTab === "login" && (
                            <motion.div
                                key="login"
                                initial={{ opacity: 0, x: 40 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -40 }}
                                transition={{ duration: 0.25 }}
                                className="w-full"
                            >
                                <LoginForm />
                            </motion.div>
                        )}

                        {activeTab === "signup" && (
                            <motion.div
                                key="signup"
                                initial={{ opacity: 0, x: -40 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 40 }}
                                transition={{ duration: 0.25 }}
                                className="w-full"
                            >
                                <SignupForm />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
}
