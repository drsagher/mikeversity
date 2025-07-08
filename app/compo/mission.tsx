import React from "react";

export default function MissionComponent() {
    return (
        <div className="relative w-full aspect-video sm:h-56 md:h-64 lg:min-h-screen">
            {/* YouTube Video Embed */}
            <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/_siqlqRYJp8?si=QsLtdwloC5C1qQfO&autoplay=1&mute=1&controls=1&modestbranding=0&rel=0&playsinline=1&enablejsapi=1&showinfo=0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                title="Mission Video"
            ></iframe>

            {/* Overlay Content */}
            <div className="absolute inset-0 flex flex-col justify-center items-center text-white bg-black bg-opacity-50">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4">
                    Our Mission
                </h1>
                <p className="text-sm sm:text-base md:text-lg text-center px-4">
                    At Mikeversity, we are committed to empowering individuals and organizations through innovative learning solutions and world-class training programs.
                </p>
            </div>
        </div>
    );
}