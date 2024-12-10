import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    const isLogin = false;
    const handleClick = () => {
        console.log("Logout clicked");
    }

    return (
        <header className="bg-emerald-400 text-gray-900 font-sans relative z-50">
            <nav className="flex justify-between items-center py-4 px-8">
                {/* Logo */}
                <div className="flex items-center">
                    <img src="../../public/images/logo.png" alt="Logo" className="w-12" />
                </div>

                {/* Menu */}
                <ul className="flex space-x-6">
                    <Link
                        to="/"
                        className="text-lg font-bold text-gray-900 hover:text-blue-700 transition duration-300"
                    >
                        Home
                    </Link>
                    <Link
                        to="/courses"
                        className="text-lg font-bold text-gray-900 hover:text-blue-700 transition duration-300"
                    >
                        Courses
                    </Link>
                    <Link
                        to="/aboutus"
                        className="text-lg font-bold text-gray-900 hover:text-blue-700 transition duration-300"
                    >
                        About Us
                    </Link>
                    <Link
                        to="/contact"
                        className="text-lg font-bold text-gray-900 hover:text-blue-700 transition duration-300"
                    >
                        Contact Us
                    </Link>
                    <Link
                        to="/dashboards"
                        className="text-lg font-bold text-gray-900 hover:text-blue-700 transition duration-300"
                    >
                        Dashboards
                    </Link>
                </ul>

                {/* Auth Buttons */}
                <div className="flex space-x-4">
                    {!isLogin ? (
                        <>
                            <Link to="/signin">
                                <button className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-400 transition duration-300">
                                    Sign In
                                </button>
                            </Link>
                            <Link to="/signup">
                                <button className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-400 transition duration-300">
                                    Sign Up
                                </button>
                            </Link>
                        </>
                    ) : (
                        <button
                            onClick={handleClick}
                            className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-400 transition duration-300"
                        >
                            Logout
                        </button>
                    )}
                </div>
            </nav>
        </header>

    )
}

export default Navbar
