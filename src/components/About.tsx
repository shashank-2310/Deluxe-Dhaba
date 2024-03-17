"use client";

import React from 'react'
import Link from 'next/link';
import SectionHeader from './ui/SectionHeader'
import AboutImage from './ui/AboutImage';

const About = () => {
    return (
        <section className='text-center my-16'>
            <div className="flex flex-col sm:flex-row justify-center items-center sm:justify-between gap-4 w-full">
                <div className="float -z-10 sm:block hidden">
                    <AboutImage />
                </div>
                <div className="text-gray-500 max-w-md mx-auto mt-4 flex flex-col gap-6 text-justify">
                    <div className="text-center">
                        <SectionHeader SubHeader={"welcome to st pizza"} MainHeader={""} />
                    </div>
                    <p>
                        Welcome to St. Pizza, where passion for pizza meets exceptional taste! Established with a vision to redefine the pizza experience, we strive to deliver nothing short of perfection with every slice.
                    </p>
                    <p>
                        At St. Pizza, we take pride in our craft, sourcing the finest ingredients and handcrafting each pizza with care and attention to detail. From our signature crust, crisp and flavorful, to our rich tomato sauce and premium cheese blends, every element is meticulously selected to tantalize your taste buds and leave you craving for more.
                    </p>
                    <p>
                        But St. Pizza is more than just great food; it&rsquo;s about community. We&rsquo;re dedicated to creating a warm and inviting atmosphere where friends and families can come together to share laughter, stories, and of course, delicious pizza.
                    </p>
                    <p>
                        Come experience the difference. Come taste the passion. Come home to St. Pizza.
                    </p>
                    <Link href={"/about"} className='uppercase bg-primaryPizza rounded-full px-4 py-2 w-1/3 text-center mx-auto text-white hover:bg-black'>
                        about us
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default About