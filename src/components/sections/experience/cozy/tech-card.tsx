'use client'

import { cn } from "@/lib/utils"
import { Card } from "@/components/ui/card"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"

interface StackItem {
    name: string
    icon: string
    description: string
    color: string
}

const platforms: StackItem[] = [
    { name: "Next.js", icon: "N", description: "React Platform", color: "#00C7B7" },
    { name: "React.js", icon: "R", description: "UI Framework", color: "#0081CB" },
    { name: "NodeJs", icon: "N", description: "Backend", color: "#3ECF8E" },
    { name: "Mysql", icon: "M", description: "Authentication", color: "#4285F4" }
]

export default function TechCard() {
    const [activeIndex, setActiveIndex] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % platforms.length)
        }, 3000)
        return () => clearInterval(interval)
    }, [])

    return (
        <div className="min-h-screen flex items-center justify-center p-4">
            <div className="relative w-full max-w-4xl aspect-square">
                <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <filter id="glow">
                            <feGaussianBlur stdDeviation="3.5" result="coloredBlur" />
                            <feMerge>
                                <feMergeNode in="coloredBlur" />
                                <feMergeNode in="SourceGraphic" />
                            </feMerge>
                        </filter>
                        <clipPath id="centerClip">
                            <path d="M0,0 H100% V100% H0 V0 Z 
                      M45%,45% h10% v10% h-10% z" />
                        </clipPath>
                    </defs>
                    {platforms.map((_, index) => (
                        <motion.line
                            key={index}
                            x1={index % 2 === 0 ? "20%" : "80%"}
                            y1={index < 2 ? "20%" : "80%"}
                            x2="50%"
                            y2="50%"
                            stroke={platforms[index].color}
                            strokeWidth="2"
                            filter="url(#glow)"
                            initial={{ opacity: 0.3 }}
                            animate={{ opacity: activeIndex === index ? 1 : 0.3 }}
                            transition={{ duration: 1 }}
                        />
                    ))}
                </svg>
                <div className="absolute inset-0 flex items-center justify-center ">
                    <motion.div
                        className="w-40 h-40 bg-cyan-500/20 rounded-full flex items-center justify-center border border-border"
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    >
                        <div className="w-24 h-24 bg-cyan-400/30 rounded-full flex items-center justify-center">
                            <div className="w-8 h-8 bg-cyan-300 rounded-full" />
                        </div>
                    </motion.div>
                </div>
                {platforms.map((platform, index) => (
                    <Card
                        key={platform.name}
                        className={cn(
                            "absolute w-48 p-4 dark:bg-slate-900/50 backdrop-blur dark:border-slate-800",
                            "transition-all duration-500",
                            index === 0 && "top-8 left-8",
                            index === 1 && "top-8 right-8",
                            index === 2 && "bottom-8 left-8",
                            index === 3 && "bottom-8 right-8",
                        )}
                    >
                        <motion.div
                            animate={{ opacity: activeIndex === index ? 1 : 0.5 }}
                            className="flex flex-col gap-2"
                        >
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full dark:bg-slate-800 flex items-center justify-center dark:text-cyan-400 text-black">
                                    {platform.icon}
                                </div>
                                <div className="font-semibold dark:text-slate-200 text-black">{platform.name}</div>
                            </div>
                        </motion.div>
                    </Card>
                ))}
            </div>
        </div>
    )
}