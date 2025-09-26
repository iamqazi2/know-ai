import { Mic } from 'lucide-react';
import React from 'react'

const VoiceRecorder = () => {

    const bars = new Array(30).fill(0);


    return (
        <div className="relative flex flex-col items-center justify-center h-60 gap-10 w-full max-w-lg rounded-2xl py-4 overflow-hidden border border-gray-700"
            style={{
                background:
                    "linear-gradient(180deg, rgba(40,20,80,0.9) 0%, rgba(10,10,20,1) 100%)",
                boxShadow: "0 -20px 60px rgba(120,100,255,0.2) inset",
            }}>

            <div className="flex items-center justify-center">

                <div className="relative bg-[#5E2EFF] text-white text-base px-5 py-2.5 rounded-full font-medium inline-block">
                    Speech Recognition

                    <div className="absolute -bottom-2 left-5 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-[#5E2EFF]"></div>
                </div>

            </div>
            {/* Mic Button */}
            <div className="flex items-center bg-[#1a1a1a] rounded-3xl p-4 shadow-lg border-t border-white/30">
                <div
                    className="w-12 h-12 flex items-center justify-center rounded-full 
                              bg-black mr-4 p-1 border-b border-gray-600 shadow-[0_0_15px_rgba(106,92,255,0.6)]"
                >
                    <div
                        className="w-full h-full flex items-center justify-center rounded-full 
                                     bg-gradient-to-r from-[#6a5cff] to-[#4e3bce] border-2 border-[#4235d2]"
                    >
                        <Mic className="text-white w-6 h-6" />
                    </div>
                </div>

                {/* Waveform */}
                <div
                    className="relative flex-1 h-16 bg-[#111] rounded-3xl flex items-center px-4 
                                overflow-hidden border-t border-b-2 border-white/30"
                >
                    {/* White Bars */}
                    <div className="flex items-end gap-[3px] flex-1">
                        {bars.map((_, i) => (
                            <div
                                key={i}
                                className="w-[3px] bg-white rounded-sm wave-bar"
                                style={{
                                    animationDelay: `${i * 0.1}s`,
                                }}
                            ></div>
                        ))}
                    </div>

                    {/* Purple Progress Line */}
                    <div className="absolute top-0 bottom-0 w-[2px] bg-[#6a5cff] progress-line" />

                    {/* Diamond Pointer */}
                    <div className="absolute bottom-0 w-4 h-4 bg-[#6a5cff] rotate-45 progress-line" />
                </div>
            </div>
        </div>
    )
}

export default VoiceRecorder