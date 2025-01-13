import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/images/logo-02.png';
import navOptions from '../../data/navOptions';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <nav className="absolute top-0 left-0 right-0 z-10 bg-transparent shadow-none text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-24">
                    {/* Logo */}
                    <div className="flex items-center">
                        <NavLink to="/" className="text-xl font-bold">
                            <img
                                src={logo}
                                alt="Gomiles International Logo"
                                className="lg:h-12 md:h-10 h-8 object-cover"
                            />
                        </NavLink>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex lg:space-x-6 space-x-2">
                        {navOptions.map((option) => (
                            <NavLink
                                key={option.name}
                                to={option.link}
                                className={({ isActive }) =>
                                    `px-3 py-2 rounded-md text-sm font-medium ${isActive ? "text-secondary " : "  hover:text-secondary"
                                    }`
                                }
                            >
                                {option.name}
                            </NavLink>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            className=" hover:text-secondary p-2 rounded-md"
                            aria-label="Toggle mobile menu"
                            aria-expanded={isMobileMenuOpen}
                            aria-controls="mobile-menu"
                            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
                        >
                            <svg
                                className="h-6 w-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d={
                                        isMobileMenuOpen
                                            ? "M6 18L18 6M6 6l12 12" // Close icon
                                            : "M4 6h16M4 12h16M4 18h16" // Hamburger icon
                                    }
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                id="mobile-menu"
                className={`overflow-hidden transition-[max-height] duration-300 ease-in-out bg-gray-100 ${isMobileMenuOpen ? "max-h-screen" : "max-h-0"
                    }`}
            >
                <div className="px-4 py-2 space-y-2">
                    {navOptions.map((option) => (
                        <NavLink
                            key={option.name}
                            to={option.link}
                            className={({ isActive }) =>
                                `block px-3 py-2 rounded-md text-base font-medium ${isActive ? " text-secondary" : "text-primary hover:text-secondary"
                                }`
                            }
                            onClick={() => setIsMobileMenuOpen(false)} // Close menu on click
                        >
                            {option.name}
                        </NavLink>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;