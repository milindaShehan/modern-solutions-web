"use client";
import React from 'react';

const Numbers = () => {
    return (
        <section id='numbers'>
            <div className=" px-4 pb-8 mx-auto text-center lg:pb-16 lg:px-6">
                <dl className="grid gap-12 mx-auto text-gray-900 sm:grid-cols-3 py-6 px-20 rounded-xl bg-white border border-t border-b">
                    <div className="flex flex-col items-center justify-center ">
                        <dt className="mb-2 text-3xl md:text-4xl font-extrabold">100+</dt>
                        <dd className="font-light  ">Businesses Digitalized</dd>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <dt className="mb-2 text-3xl md:text-4xl font-extrabold">300+</dt>
                        <dd className="font-light  ">Successful Events Managed</dd>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <dt className="mb-2 text-3xl md:text-4xl font-extrabold">500+</dt>
                        <dd className="font-light  ">Customer Interactions via Hotline</dd>
                    </div>
                </dl>
            </div>
        </section>
    );
};

export default Numbers;
