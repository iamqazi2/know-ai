import Image from 'next/image';
import React from 'react'

const SliderCard = () => {

    const lines = [
        {
            id: 1,
            words: [
                "Capabilities",
                "Infrastructure",
                "Chatbots",
                "Cognitive",
                "Automation",
                "AI",
                "Integration",
                "Scalability",
                "Performance",
                "Security",
                "Intelligent",
            ],
        },
        {
            id: 2,
            words: [
                "Cognitive",
                "AI",
                "Infrastructure",
                "Automation",
                "Capabilities",
                "Performance",
                "Integration",
                "Security",
                "Chatbots",
                "Scalability",
                "Intelligent",
            ],
        },
        {
            id: 3,
            words: [
                "Infrastructure",
                "Automation",
                "Security",
                "Performance",
                "Cognitive",
                "AI",
                "Chatbots",
                "Capabilities",
                "Integration",
                "Scalability",
                "Intelligent",
            ],
        },
        {
            id: 4,
            words: [
                "AI",
                "Capabilities",
                "Performance",
                "Security",
                "Automation",
                "Cognitive",
                "Chatbots",
                "Integration",
                "Scalability",
                "Infrastructure",
                "Intelligent",
            ],
        },
        {
            id: 5,
            words: [
                "Chatbots",
                "Automation",
                "Integration",
                "Capabilities",
                "AI",
                "Performance",
                "Infrastructure",
                "Security",
                "Cognitive",
                "Scalability",
                "Intelligent",
            ],
        },
    ];

    return (
        <div
            className="relative w-full max-w-lg mx-auto rounded-2xl py-4 overflow-hidden border border-gray-700"
            style={{
                background:
                    "linear-gradient(180deg, rgba(40,20,80,0.9) 0%, rgba(10,10,20,1) 100%)",
                boxShadow: "0 -20px 60px rgba(120,100,255,0.2) inset",
            }}
        >
            <div className="absolute inset-0 flex items-center justify-center z-10">
                <Image
                    src="/tick.svg"
                    alt="tick"
                    width={80}
                    height={80}
                    className="drop-shadow-[0_0_30px_rgba(128,90,213,0.8)]"
                />
            </div>

            <div className="flex flex-col gap-1">
                {lines.map((line, index) => (
                    <div
                        key={line.id}
                        className={`flex items-center gap-3 whitespace-nowrap ${index % 2 === 0
                            ? "animate-slide-right"
                            : "animate-slide-left"
                            }`}>

                        {[...line.words, ...line.words, ...line.words, ...line.words, ...line.words, ...line.words].map(
                            (word, i) => (
                                <div
                                    key={i}
                                    className="bg-transparent border border-gray-800 px-4 shadow-xl rounded-full py-1.5 text-white inline-block"
                                >
                                    <h6>{word}</h6>
                                </div>
                            )
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default SliderCard