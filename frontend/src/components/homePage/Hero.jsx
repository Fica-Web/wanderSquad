import React from "react";
import hero from "../../assets/images/hero.jpg";

const Hero = () => {
    return (
        <div
            className="relative bg-cover bg-center bg-no-repeat h-[90vh] flex items-center justify-center"
            style={{
                backgroundImage: `url(${hero})`,
            }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>

            {/* Content */}
            <div className="relative text-center text-white px-4">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">
                    Welcome to MyApp
                </h1>
                <p className="text-lg md:text-xl mb-6">
                    Discover amazing packages, services, and more with just one click.
                </p>
                <a
                    href="#services"
                    className="px-6 py-3 bg-blue-600 text-white text-lg font-medium rounded-md hover:bg-blue-700 transition duration-300"
                >
                    Get Started
                </a>
            </div>
        </div>
    );
};

export default Hero;
