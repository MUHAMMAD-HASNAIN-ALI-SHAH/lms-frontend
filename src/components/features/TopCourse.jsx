import React, { useState } from 'react'

function TopCourse() {
    const slides = [
        [
            { img: "/images/image.png", title: "Course Title 1", description: "Description 1", price: "$50", rating: "★★★★★" },
            { img: "/images/image.png", title: "Course Title 2", description: "Description 2", price: "$70", rating: "★★★★☆" },
            { img: "/images/image.png", title: "Course Title 3", description: "Description 3", price: "$80", rating: "★★★☆☆" },
            { img: "/images/image.png", title: "Course Title 3", description: "Description 3", price: "$80", rating: "★★★☆☆" },
        ],
        [
            { img: "/images/image.png", title: "Course Title 4", description: "Description 4", price: "$60", rating: "★★★★☆" },
            { img: "/images/image.png", title: "Course Title 4", description: "Description 4", price: "$60", rating: "★★★★☆" },
            { img: "/images/image.png", title: "Course Title 5", description: "Description 5", price: "$90", rating: "★★★☆☆" },
            { img: "/images/image.png", title: "Course Title 6", description: "Description 6", price: "$70", rating: "★★★★☆" },
        ],
        [
            { img: "/images/image.png", title: "Course Title 7", description: "Description 7", price: "$60", rating: "★★★★☆" },
            { img: "/images/image.png", title: "Course Title 8", description: "Description 8", price: "$90", rating: "★★★☆☆" },
            { img: "/images/image.png", title: "Course Title 7", description: "Description 7", price: "$60", rating: "★★★★☆" },
            { img: "/images/image.png", title: "Course Title 9", description: "Description 9", price: "$70", rating: "★★★★☆" },
        ],
        [
            { img: "/images/image.png", title: "Course Title 10", description: "Description 10", price: "$60", rating: "★★★★☆" },
            { img: "/images/image.png", title: "Course Title 10", description: "Description 10", price: "$60", rating: "★★★★☆" },
            { img: "/images/image.png", title: "Course Title 11", description: "Description 11", price: "$90", rating: "★★★☆☆" },
            { img: "/images/image.png", title: "Course Title 12", description: "Description 12", price: "$70", rating: "★★★★☆" },
        ],
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const moveToNextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex < slides.length - 1 ? prevIndex + 1 : 0
        );
    };

    const moveToPreviousSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex > 0 ? prevIndex - 1 : slides.length - 1
        );
    };
    return (
        <div className="relative overflow-hidden w-[95%] mt-5 mx-auto">
            <button
                className="absolute top-1/2 -translate-y-1/2 left-2 bg-black bg-opacity-50 text-white p-3 rounded-full z-10 hover:bg-opacity-75"
                onClick={moveToPreviousSlide}
            >
                {'<'}
            </button>
            <h1 className="text-center font-extrabold text-4xl py-8">Top Courses</h1>
            <div className="flex justify-center items-center overflow-hidden w-full">
                <div
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{
                        transform: `translateX(-${currentIndex * 100}%)`,
                        width: `${slides.length * 100}%`,
                    }}
                >
                    {slides.map((slide, index) => (
                        <div key={index} className="flex w-full">
                            {slide.map((course, idx) => (
                                <div
                                    key={idx}
                                    className="w-[300px] h-[285px] m-2 bg-white border border-gray-300 rounded-lg p-4 shadow-md text-center hover:scale-105 transition-transform duration-300"
                                >
                                    <img
                                        src={course.img}
                                        alt="Course"
                                        className="w-full h-[150px] object-cover rounded-md"
                                    />
                                    <h3 className="text-lg font-bold text-gray-800 my-2">{course.title}</h3>
                                    <p className="text-sm text-gray-600">{course.description}</p>
                                    <span className="text-green-600 font-semibold text-base mt-2 block">
                                        {course.price}
                                    </span>
                                    <div className="text-yellow-400 text-sm mt-1">{course.rating}</div>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
            <button
                className="absolute top-1/2 -translate-y-1/2 right-2 bg-black bg-opacity-50 text-white p-3 rounded-full z-10 hover:bg-opacity-75"
                onClick={moveToNextSlide}
            >
                {'>'}
            </button>
        </div>
    )
}

export default TopCourse
