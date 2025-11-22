import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Image from "next/image";

export default function Home() {
    return (
        <div className="min-h-screen bg-background">
            <Header />
            <Hero />
            <Stats />
        </div>
    );
}
