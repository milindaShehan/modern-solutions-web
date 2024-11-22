"use client";
import React from 'react';

const Numbers = () => {
    return (
        <section id='numbers'>
            <div className="max-w-screen-xl px-4 pb-8 mx-auto text-center lg:pb-16 lg:px-6">
                <dl className="grid max-w-screen-md gap-8 mx-auto text-gray-900 sm:grid-cols-3 py-8 px-20 rounded-xl bg-gray-50">
                    <div className="flex flex-col items-center justify-center">
                        <dt className="mb-2 text-3xl md:text-4xl font-extrabold">5000+</dt>
                        <dd className="font-light text-gray-500">happy customers</dd>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <dt className="mb-2 text-3xl md:text-4xl font-extrabold">5+</dt>
                        <dd className="font-light text-gray-500">years in service</dd>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <dt className="mb-2 text-3xl md:text-4xl font-extrabold">50+</dt>
                        <dd className="font-light text-gray-500">tuk-tuks & scooters</dd>
                    </div>
                </dl>
            </div>
        </section>
    );
};

export default Numbers;
