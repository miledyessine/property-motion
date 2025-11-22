import { Button } from "@/components/ui/button";
import Image from "next/image";

export function HeroCard() {
    return (
        <div className="bg-primary rounded-2xl p-8 flex items-center justify-between text-white overflow-hidden relative">
            {/* Content */}
            <div className="z-10">
                <h2 className="text-4xl font-bold mb-2">
                    Capture the <span className="text-teal-400">Essence,</span>
                </h2>
                <h2 className="text-4xl font-bold mb-6">
                    Sell the <span className="text-teal-400">Dream.</span>
                </h2>
                <Button variant="secondary" size="lg">
                    Book Now
                </Button>
            </div>

            {/* Illustration */}
            <div className="relative flex items-center justify-center">
                <Image
                    src="/images/buildings_frame.svg"
                    alt="Hero Card Illustration"
                    width={300}
                    height={300}
                    className="object-contain"
                />
            </div>
        </div>
    );
}
