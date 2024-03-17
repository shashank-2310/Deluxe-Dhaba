"use client";

import Link from 'next/link';
import React from 'react'
import wcu from '@/assets/data/wcuData.json';

import Sallad from '@/components/ui/Sallad';

interface wcuType {
    title: string,
    description: string
}

const page = () => {
    return (
        <section className='grid grid-cols-1 p-1 md:p-0 gap-6'>
            <Sallad />
            <h1 className='text-black font-semibold md:text-4xl text-2xl tracking-wider text-center mt-10'>
                About Us
            </h1>
            <div className="flex flex-col gap-3 text-justify text-base">
                <p>
                    Our journey began with a simple yet profound love for pizza. It wasn&rsquo;t just about the taste; it was about the memories created around each slice, the laughter shared, and the bonds formed. With this passion burning within us, we embarked on a mission to bring something extraordinary to the world of pizza.
                </p>
                <p>
                    Inspired by the rich culinary heritage of Italy and driven by innovation, we set out to create St. Pizza—a place where every bite tells a story, and every customer feels like family.
                </p>
                <p>
                    Our quest for perfection led us on a whirlwind adventure, from the bustling markets of Napoli to the quaint pizzerias of Rome. We sought out the finest ingredients, handpicked by artisans who shared our dedication to quality and authenticity.
                </p>
            </div>
            <h1 className='text-gray-700 text-2xl text-center font-semibold'>Why Choose Us</h1>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">
                {
                    wcu.wcuData.map((item: wcuType) => (
                        <div key={item.title} className="rounded-xl bg-black/80 hover:bg-black text-orange-600 text-center p-1">
                            <div className="p-2 gap-3 flex flex-col">
                                <h4 className='font-semibold text-base'>🍕 {item.title}</h4>
                                <p className='text-sm text-white'>{item.description}</p>
                            </div>
                        </div>
                    ))
                }

            </div>
            <Link href={"/contact"} className='uppercase px-3 py-2 hover:bg-black bg-primaryPizza text-white text-center rounded-full md:w-1/6'>contact us</Link>
        </section>
    )
}

export default page