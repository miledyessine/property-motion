import { Star } from "lucide-react";

export default function Stats() {
    return (
        <section className="px-4 py-16 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between md:items-center gap-10 md:gap-0">
                {/* Left Title */}
                <div className="text-center md:text-left">
                    <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                        Trusted by more than 500 property{" "}
                        <span className="text-[#27c499]">professionals.</span>
                    </h2>
                </div>

                {/* Right Stats */}
                <div className="flex flex-col sm:flex-row justify-center items-center gap-10 sm:gap-16">
                    {/* Rating */}
                    <div className="flex flex-col items-center gap-2">
                        <div className="flex gap-1">
                            {[1, 2, 3, 4, 5].map((i) => (
                                <Star
                                    key={i}
                                    className="w-5 h-5 text-[#fbc120]"
                                    fill="currentColor"
                                />
                            ))}
                        </div>
                        <p className="text-foreground text-xl sm:text-2xl font-medium text-center">
                            4.9/5_rating
                        </p>
                    </div>

                    {/* 48hr delivery */}
                    <div className="flex flex-col items-center text-center">
                        <p className="text-foreground text-xl sm:text-2xl font-bold">
                            48hr
                            <br />
                            <span className="font-medium">delivery</span>
                        </p>
                    </div>

                    {/* UK-wide coverage */}
                    <div className="flex flex-col items-center text-center">
                        <p className="text-foreground text-xl sm:text-2xl font-bold">
                            UK-wide
                            <br />
                            <span className="font-medium">coverage</span>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
