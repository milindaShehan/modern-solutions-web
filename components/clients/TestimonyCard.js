import React from 'react';
import Image from 'next/image';

const TestimonialCard = ({ rating, title, content, customer ,image }) => {
    return (
        <div className="keen-slider__slide bg-gray-100 p-4 shadow-sm sm:p-4 lg:p-6 rounded-2xl">
            <blockquote className="flex h-full flex-col justify-between">
                <div>
                    <div className="flex gap-0.5">
                        {[...Array(5)].map((_, i) => (
                            <svg
                                key={i}
                                className={`w-5 h-5 ${i < rating ? 'text-primary' : 'text-primary border-primary'}`}
                                fill={i < rating ? 'currentColor' : 'none'}
                                stroke="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                />
                            </svg>
                        ))}
                    </div>
                    <div className="my-4">
                        <p className="mt-4 text-gray-700">{content}</p>
                    </div>
                </div>
                <div className="flex items-left gap-4">
                    <div className="">
                        <div className="flex items-center justify-center w-12 h-12 rounded-full overflow-hidden bg-gray-200">
                            <img src={image} alt="Profile Picture" className='w-50 h-50' />
                        </div>
                    </div>
                    <div className="flex flex-col items-left">
                        <p className="text-sm font-medium text-gray-700">{customer}</p>
                        <p className="text-sm font-light text-gray-500">{title}</p>
                    </div>
                </div>
            </blockquote>
        </div>
    );
};

export default TestimonialCard;
