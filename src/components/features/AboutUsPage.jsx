import React, { useState } from 'react'
import Footer from './Footer';

function AboutUsPage() {

    const [currentIndex, setCurrentIndex] = useState(0);

    const slides = [
        {
            name: "John Doe",
            specialty: "Web Development",
            description: "Experienced web developer with a passion for teaching HTML, CSS, and JavaScript.",
        },
        {
            name: "Jane Smith",
            specialty: "Data Science",
            description: "Data science expert with years of experience in Python and Machine Learning.",
        },
        {
            name: "Michael Brown",
            specialty: "Mobile Development",
            description: "Skilled mobile app developer with expertise in React Native and Flutter.",
        },
        {
            name: "Emily Johnson",
            specialty: "UI/UX Design",
            description: "Creative UI/UX designer focused on creating user-friendly interfaces.",
        },
        {
            name: "Emily Johnson",
            specialty: "UI/UX Design",
            description: "Creative UI/UX designer focused on creating user-friendly interfaces.",
        },
    ];

    const totalSlides = slides.length;

    const moveToNextSlide = () => {
        setCurrentIndex((currentIndex + 1) % totalSlides);
    };

    const moveToPreviousSlide = () => {
        setCurrentIndex((currentIndex - 1 + totalSlides) % totalSlides);
    };


    return (
        <>
            <main
                className="bg-cover bg-center bg-no-repeat h-[714px] flex justify-start items-center w-full"
                style={{ backgroundImage: "url('/images/image.png')" }}
            >
                <div className="ml-[295px] px-4">
                    <h1 className="text-[50px] font-light font-josefin leading-snug text-gray-800 mb-2">
                        New Summer <br />
                        <strong className="font-semibold">Shoes Collection</strong>
                    </h1>
                    <p className="text-base font-roboto text-gray-600 leading-relaxed mb-6">
                        Competently expedite alternative benefits whereas leading- <br />
                        edge catalysts for change. Globally leverage existing an <br />
                        expanded array of leadership.
                    </p>
                    <button className="flex items-center bg-red-500 text-white text-lg font-semibold px-6 py-3 rounded-md shadow-lg gap-2 hover:opacity-80 transition-opacity">
                        <span>Shop Now</span>
                        <i className="bx bx-right-arrow-alt text-2xl"></i>
                    </button>
                </div>
            </main>

            {/* About Us Section */}

            <section className="max-w-[1300px] mx-auto my-5 p-5 bg-gray-300 text-black rounded-lg shadow-lg">
                <h2 className="text-center mt-10 text-4xl font-extrabold font-sans mb-6">Who are we...?</h2>
                <div className="flex flex-wrap items-center justify-between gap-5">
                    {/* Text Section */}
                    <div className="flex-1 pr-5">
                        <h3 className="text-green-500 text-2xl font-semibold mb-4">Who are we</h3>
                        <p className="leading-relaxed text-base">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vehicula,
                            nisl a facilisis pharetra, urna neque vehicula justo, eget fringilla odio
                            sapien at libero.
                            Duis eget ultricies sapien. Etiam vehicula urna non ex viverra, sit amet
                            volutpat nunc hendrerit.
                        </p>
                    </div>

                    {/* Background Image Section */}
                    <div
                        className="flex-1 bg-cover bg-center rounded-lg h-[235px]"
                        style={{ backgroundImage: "url('/images/image.png')" }}
                    ></div>
                </div>
            </section>

            {/* Testimonials Section */}

            <section className="max-w-[1300px] mx-auto my-5 p-5 bg-gray-300 text-black rounded-lg shadow-lg">
                <h2 className="text-center mt-10 text-4xl font-extrabold font-sans mb-6">Why Learn With Us...?</h2>
                <div className="flex flex-wrap items-center justify-between gap-5">

                    {/* Left Section - Text */}
                    <div className="flex-1 pr-5">
                        <h3 className="text-green-500 text-2xl font-semibold mb-4">Why Learn With Us?</h3>
                        <p className="leading-relaxed text-base">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vehicula,
                            nisl a facilisis pharetra, urna neque vehicula justo, eget fringilla odio
                            sapien at libero.
                            Duis eget ultricies sapien. Etiam vehicula urna non ex viverra, sit amet
                            volutpat nunc hendrerit.
                        </p>
                    </div>

                    {/* Right Section - Background Image */}
                    <div
                        className="flex-1 bg-cover bg-center rounded-lg h-[235px]"
                        style={{ backgroundImage: "url('/images/image.png')" }}
                    ></div>
                </div>
            </section>

            <div className="ourteam-container relative max-w-4xl mx-auto my-10 overflow-hidden">
                <h1 className="text-center text-4xl font-bold mb-8">Our Team</h1>
                <div
                    className="ourteam-slider flex transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                    {slides.map((slide, index) => (
                        <div className="ourteam-slide min-w-full p-5 flex flex-col items-center justify-center text-center bg-yellow-100 rounded-lg shadow-md m-2">
                            <div className="ourteam-profile max-w-xs w-full p-5 bg-white rounded-lg shadow-lg">
                                <img src="path-to-your-image.jpg" alt="Team" className="ourteam-image mb-4 rounded-full object-cover h-32 w-32 mx-auto" />
                                <h2 className="text-2xl font-semibold text-gray-800 mb-2">{slide.name}</h2>
                                <p className="ourteam-specialty text-lg text-gray-600 mb-3">{slide.specialty}</p>
                                <p className="ourteam-description text-gray-600">{slide.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <button
                    className="ourteam-slider-button ourteam-slider-button-prev absolute top-1/2 left-5 transform -translate-y-1/2"
                    onClick={moveToPreviousSlide}
                >
                    Prev
                </button>
                <button
                    className="ourteam-slider-button ourteam-slider-button-next absolute top-1/2 right-5 transform -translate-y-1/2"
                    onClick={moveToNextSlide}
                >
                    Next
                </button>
            </div>

            <Footer/>

        </>
    )
}

export default AboutUsPage
