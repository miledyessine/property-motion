import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
    return (
        <section className="relative overflow-hidden bg-background px-4 py-20 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
                <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
                    {/* Left content */}
                    <div className="flex flex-col gap-6">
                        <div className="space-y-2">
                            <p className="text-sm font-bold uppercase tracking-wider text-primary">
                                Welcome to property motion
                            </p>
                            <h1 className="text-4xl font-bold leading-tight text-foreground sm:text-5xl">
                                Market Faster,
                                <br />
                                Stay Compliant,
                                <br />
                                <span className="text-accent">
                                    Simplify Everything.
                                </span>
                            </h1>
                        </div>
                        <p className="max-w-full text-lg text-primary leading-relaxed">
                            Property Motion is your centralized platform for
                            property marketing and compliance. From professional
                            photography and EPCs to branded brochures and
                            landlord safety checks, we streamline everything, so
                            you can focus on growth.
                        </p>
                        <div className="flex flex-wrap gap-3">
                            <Link href="/signup">
                                <Button
                                    size="lg"
                                    className="bg-primary text-primary-foreground hover:bg-primary/90"
                                >
                                    <Calendar className="w-5 h-5 mr-1" />
                                    Book a Demo
                                </Button>
                            </Link>
                        </div>
                    </div>

                    {/* Right illustration */}
                    <div className="relative w-full max-w-[624px] aspect-624/381 rounded-lg shadow-lg mx-auto lg:mx-0">
                        <Image
                            src="/images/hero.png"
                            alt="Hero Illustration"
                            fill
                            className="rounded-lg object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
