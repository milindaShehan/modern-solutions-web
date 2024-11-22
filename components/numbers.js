"use client";
import React from 'react';
import CountUp from 'react-countup';

const Numbers = () => {
    return (
        <section id='numbers'>
            <div className=" px-4 py-8 text-center ">
                <dl className="grid gap-8  w-full text-gray-900 sm:grid-cols-3 py-4 px-20 rounded-xl bg-gray-200">
                    <div className="flex flex-col items-center justify-center">
                        <dt className="mb-2 text-3xl md:text-4xl font-extrabold">
                            <CountUp end={50} duration={2.5} suffix="+" />
                        </dt>
                        <dd className="font-light text-gray-500">happy customers</dd>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <dt className="mb-2 text-3xl md:text-4xl font-extrabold">
                            <CountUp end={5} duration={2.5} suffix="+" />
                        </dt>
                        <dd className="font-light text-gray-500">years in service</dd>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <dt className="mb-2 text-3xl md:text-4xl font-extrabold">
                            <CountUp end={50} duration={2.5} suffix="+" />
                        </dt>
                        <dd className="font-light text-gray-500">tuk-tuks & scooters</dd>
                    </div>
                    
                </dl>
            </div>
        </section>
    );
};

export default Numbers;
