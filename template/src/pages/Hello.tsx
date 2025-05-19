"use client";

import {useState, useEffect} from "react";
import {format} from "date-fns";
import {
    Clock,
} from "lucide-react";
import logo from "/logo.svg";
import Card from "@components/Card.tsx";

const libraries = [
    {
        title: "Vite",
        desc: "Blazing fast dev server & build tool",
        img: "https://vite.dev/logo.svg",
    },
    {
        title: "Vitest",
        desc: "Blazing unit test framework",
        img: "https://vitest.dev/logo.svg",
    },
    {
        title: "Zustand",
        desc: "Dead simple global state manager",
        img: "https://user-images.githubusercontent.com/958486/218346783-72be5ae3-b953-4dd7-b239-788a882fdad6.svg",
    },
    {
        title: "React Router",
        desc: "Declarative routing for the masses",
        img: "https://reactrouter.com/_brand/React%20Router%20Brand%20Assets/React%20Router%20Logo/Light.svg",
    },
];

export default function Hello() {
    const [currentTime, setCurrentTime] = useState(new Date());
    const [randomLibrary, setRandomLibrary] = useState(libraries[0]);

    useEffect(() => {
        setRandomLibrary(
            libraries[Math.floor(Math.random() * libraries.length)]
        );

        const timer = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => clearInterval(timer);
    }, []);


    const formattedDate = format(currentTime, "MMMM d, yyyy");
    const formattedTime = format(currentTime, "HH:mm:ss");

    return (
        <div className="flex h-screen w-full flex-col bg-white">
            <div className="flex flex-1 flex-col items-center justify-center p-6">
                <div className="w-full max-w-xl">
                    {/* Header with time */}
                    <div className="mb-8 flex items-center justify-between">
                        <div className="flex items-center">
                            <img src={logo} className="logo h-10" alt="Neostack logo"/>
                            <span className="ml-2 text-xl font-bold">Neostack</span>
                        </div>
                        <div className="flex items-center rounded-full bg-gray-100 px-4 py-2 text-sm">
                            <Clock className="mr-2 h-4 w-4 text-gray-500"/>
                            <span>{formattedDate}</span>
                            <span className="ml-2 font-mono">{formattedTime}</span>
                        </div>
                    </div>

                    {/* Main content */}
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                        <div className="flex flex-col justify-center">
                            <h1 className="text-4xl font-bold tracking-tight text-gray-900">
                                <div className="bg-[#A692E1] text-white text-6xl rounded-sm rounded-tr-3xl">
                                    Neostack
                                </div>
                                <div className="text-2xl">New You, New Stack</div>
                            </h1>
                            <p className="mt-4 text-lg text-gray-600">
                                A lightweight and optimized stack with modern libraries.
                            </p>

                            <div
                                className="mt-8 flex flex-wrap gap-3 bg-gray-300 rounded-md p-2 border-1 border-gray-50 font-mono">
                                npx create neostack@latest
                            </div>
                        </div>

                        <div className="h-full w-full flex items-center justify-end">
                            <Card
                                icon={randomLibrary.img}
                                title={randomLibrary.title}
                                description={randomLibrary.desc}
                                link="https://vitejs.dev"
                                className="absolute rounded-lg border border-gray-100 bg-[#A692E1] p-4 h-60 w-60 shadow-sm cursor-pointer"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <div className="border-t border-gray-100 p-4 text-center text-sm text-gray-500">
                Last updated: {format(currentTime, "PPpp")}
            </div>
        </div>
    );
}
