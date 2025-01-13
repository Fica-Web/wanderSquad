import React from "react";
import hero from "../../assets/images/hero1.jpg";
import ReusableButton from "../reusable/ReusableButton";

const Hero = () => {
    return (
        <div className="relative h-screen flex items-center justify-center">
            {/* Background with Zoom Animation */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed h-full w-full"
                style={{
                    backgroundImage: `url(${hero})`,
                    animation: "infiniteZoom 20s infinite",
                }}
            ></div>

            <style>
                {`
                @keyframes infiniteZoom {
                    0% {
                    transform: scale(1);
                    }
                    50% {
                    transform: scale(1.1);
                    }
                    100% {
                    transform: scale(1);
                    }
                }
            `}
            </style>

            {/* Overlay */}
            <div className="absolute inset-0 bg-primary bg-opacity-50 pointer-events-none"></div>

            {/* Content */}
            <div className="relative text-center text-white px-4">
                <h1 className="text-4xl md:text-6xl kaushan-script-regular font-bold mb-4">
                    Welcome to WanderSquad
                </h1>
                <h3 className="text-lg md:text-xl mb-6">
                    Discover amazing packages, services, and more with just one click.
                </h3>
                <ReusableButton
                    content={"Discover now"}
                    color={"border-secondary text-secondary"}
                />
            </div>
        </div>
    );
};

export default Hero;