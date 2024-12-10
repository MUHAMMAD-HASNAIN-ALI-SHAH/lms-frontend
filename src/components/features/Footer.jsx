import React from 'react'

function Footer() {
    return (
        <>
            <div className="bg-gray-900 text-white py-8">
                <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
                    {/* Contact Us Section */}
                    <div>
                        <h2 className="text-xl font-bold mb-4">Contact Us</h2>
                        <div className="border-b-2 border-orange-500 w-12 mb-4"></div>
                        <p className="flex items-start gap-2 mb-4">
                            <i className="fas fa-map-marker-alt text-orange-500"></i>
                            2751 S Parker Rd, Aurora, CO 80014, <br /> United States
                        </p>
                        <p className="flex items-center gap-2 mb-4">
                            <i className="fas fa-phone text-orange-500"></i>
                            +557343673257
                        </p>
                        <p className="flex items-center gap-2">
                            <i className="fas fa-envelope text-orange-500"></i>
                            footcap@help.com
                        </p>
                    </div>

                    {/* My Account Section */}
                    <div>
                        <h2 className="text-xl font-bold mb-4">My Account</h2>
                        <div className="border-b-2 border-orange-500 w-12 mb-4"></div>
                        <ul className="space-y-2">
                            <li className="flex items-center gap-2">
                                <i className="bx bx-chevron-right text-orange-500"></i> My Account
                            </li>
                            <li className="flex items-center gap-2">
                                <i className="bx bx-chevron-right text-orange-500"></i> View Cart
                            </li>
                            <li className="flex items-center gap-2">
                                <i className="bx bx-chevron-right text-orange-500"></i> Wishlist
                            </li>
                            <li className="flex items-center gap-2">
                                <i className="bx bx-chevron-right text-orange-500"></i> Compare
                            </li>
                            <li className="flex items-center gap-2">
                                <i className="bx bx-chevron-right text-orange-500"></i> New Products
                            </li>
                        </ul>
                    </div>

                    {/* Opening Time Section */}
                    <div>
                        <h2 className="text-xl font-bold mb-4">Opening Time</h2>
                        <div className="border-b-2 border-orange-500 w-12 mb-4"></div>
                        <ul className="space-y-2">
                            <li>Home</li>
                            <li>Courses</li>
                            <li>Pricing</li>
                            <li>Resources</li>
                            <li>About Us</li>
                            <li>Contact Us</li>
                        </ul>
                    </div>

                    {/* Newsletter Section */}
                    <div>
                        <h2 className="text-xl font-bold mb-4">Newsletter</h2>
                        <div className="border-b-2 border-orange-500 w-12 mb-4"></div>
                        <p className="mb-4">
                            Authoritatively morph 24/7 potentialities with <br /> error-free
                            partnerships.
                        </p>
                        <div className="flex items-center space-x-2">
                            <input
                                type="text"
                                placeholder="Email Address"
                                className="flex-1 p-3 text-black rounded-md"
                            />
                            <button className="bg-orange-500 text-white px-4 py-3 rounded-md hover:bg-orange-600">
                                Subscribe
                            </button>
                        </div>
                        <div className="flex gap-4 mt-4">
                            <i className="fab fa-facebook text-gray-400 hover:text-white"></i>
                            <i className="fab fa-twitter text-gray-400 hover:text-white"></i>
                            <i className="fab fa-pinterest text-gray-400 hover:text-white"></i>
                            <i className="fab fa-linkedin text-gray-400 hover:text-white"></i>
                        </div>
                    </div>
                </div>
            </div>

            <footer class="bg-gray-900 text-white text-center py-4">
                <p class="text-base">
                    © 2022 <span class="text-orange-500 font-semibold">codewithsadee</span>. All Rights Reserved
                </p>
            </footer>

        </>
    )
}

export default Footer
