"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const navItems = [
    { href: "/", label: "Home" },
    { href: "#", label: "Services" },
    { href: "#", label: "Pricing" },
    { href: "#", label: "About" },
    { href: "#", label: "Contact" },
];

export default function Header() {
    return (
        <header className="sticky top-0 z-50 w-full bg-background backdrop-blur border-border">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 py-4">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2">
                    <Image
                        src="/Logo.svg"
                        alt="Property Motion Logo"
                        width={238}
                        height={28}
                        priority
                    />
                </Link>

                {/* Navigation */}
                <nav className="hidden md:flex gap-8">
                    {navItems.map(({ href, label }) => (
                        <Link
                            key={label}
                            href={href}
                            className="text-sm font-medium text-foreground transition-transform hover:scale-105 hover:text-accent"
                        >
                            {label}
                        </Link>
                    ))}
                </nav>

                {/* Auth buttons */}
                <div className="flex items-center gap-3">
                    <Button
                        variant="outline"
                        size="lg"
                        className="border-primary font-bold hover:bg-background hover:text-accent hover:border-accent/90"
                        asChild
                    >
                        <Link href="/login">Sign In</Link>
                    </Button>

                    <Button
                        size="lg"
                        className="bg-primary text-primary-foreground font-bold hover:bg-primary/90"
                        asChild
                    >
                        <Link href="/signup">Get Started</Link>
                    </Button>
                </div>
            </div>
        </header>
    );
}
