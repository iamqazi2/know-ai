import Image from 'next/image'
import React from 'react'

const BrandCards = () => {
    return (
        <div className="relative w-full max-w-[397px] mx-auto rounded-[20px] border border-gray-700 
                                flex flex-col items-center px-5 py-4 overflow-hidden"
            style={{
                background:
                    "linear-gradient(180deg, rgba(40,20,80,0.9) 0%, rgba(10,10,20,1) 100%)",
                boxShadow: "0 -20px 60px rgba(120,100,255,0.2) inset",
            }}>

            {/* Top icons */}
            <div className="flex justify-center gap-4 mb-2">
                {Array.from({ length: 6 }).map((_, i) => (
                    <div key={i} className="">
                        <Image className="bg-white rounded-full" src="/apple.png" alt="brands" width={50} height={50} />
                    </div>
                ))}
            </div>

            {/* SVG Lines */}
            <svg
                viewBox="0 0 600 300"
                className="w-full max-w-4xl h-[140px]"
                fill="none"
            >
                <defs>
                    <linearGradient id="flowGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#C084FC" stopOpacity="1" />   {/* light neon purple */}
                        <stop offset="100%" stopColor="#60A5FA" stopOpacity="0.95" /> {/* light blue */}
                    </linearGradient>
                </defs>


                {/* Paths */}
                {[
                    "M 50 0 C 50 150, 300 150, 300 300", // left
                    "M 150 0 C 150 150, 300 150, 300 300",
                    "M 250 0 C 250 150, 300 150, 300 300",
                    "M 350 0 C 350 150, 300 150, 300 300",
                    "M 450 0 C 450 150, 300 150, 300 300",
                    "M 550 0 C 550 150, 300 150, 300 300", // right
                ].map((d, i) => (
                    <g key={i}>
                        {/* Base gray line (always visible) */}
                        <path
                            d={d}
                            stroke="rgba(255,255,255,0.15)"
                            strokeWidth="3"
                            fill="none"
                        />
                        {/* Animated flowing line */}
                        <path
                            d={d}
                            stroke="url(#flowGradient)"
                            strokeWidth="2.5"
                            fill="none"
                            strokeDasharray="10 300"
                            strokeDashoffset="0"
                        >
                            <animate
                                attributeName="stroke-dashoffset"
                                from="0"
                                to="-310"
                                dur="2s"
                                repeatCount="indefinite"
                            />
                        </path>
                    </g>
                ))}
            </svg>

            {/* Bottom Icon */}
            <div className="w-10 h-10 rounded-full bg-indigo-500 flex items-center justify-center mt-[-20px] shadow-[0_0_30px_#6366f1]">
                <span className="text-white font-bold">◎</span>
            </div>
        </div>
    )
}

export default BrandCards