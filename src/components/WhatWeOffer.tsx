"use client";

import React from 'react'
import SectionHeader from './ui/SectionHeader';
import Link from 'next/link';
import PizzaCard from './cards/PizzaCard';
import MenuCard from './cards/MenuCard';

import pizzaMenu from "@/assets/pizzaMenu.webp"
import p1 from "@/assets/p1.jpg";
import p2 from "@/assets/p2.jpg";
import p3 from "@/assets/p3.jpg";
import p4 from "@/assets/p4.jpg";

const WhatWeOffer = () => {
    return (
        <section className='text-center'>
            <SectionHeader
                MainHeader={"what we offer!!"}
                SubHeader={"checkout our services"}
            />
            <div className="text-black flex flex-col sm:flex-row sm:justify-between items-center sm:mt-10 mt-5">
                <div className="flex flex-col sm:items-center sm:justify-center text-left text-base space-y-2 sm:space-y-11">
                    <p className='sm:w-3/4 text-left'>
                        At St. Pizza, we offer more than just great pizza—we offer an unforgettable dining experience that&rsquo;s sure to delight your senses and leave you craving for more.
                    </p>
                    <p className='w-3/4 font-medium my-1 text-left'>
                        🍕 Endless Variety: Check our&nbsp;
                        <Link href={"/menu"} className='text-primaryPizza underline'>
                            Menu
                        </Link>
                    </p>
                    <p className='sm:w-3/4 font-medium my-1 text-left'>
                        🍕 Community Connection:&nbsp;
                        <Link href={"/contact"} className='text-primaryPizza underline'>
                            Contact
                        </Link>
                        &nbsp;us to be a part of our community
                    </p>
                    <p className='sm:w-3/4 font-medium my-1 text-left'>
                        🍕 Authentic Flavors: Know more&nbsp;
                        <Link href={"/about"} className='text-primaryPizza underline'>
                            About Us
                        </Link>
                    </p>
                    <p className='sm:w-3/4 font-medium my-1 text-left'>
                        🍕 Endless Variety: Our diverse menu offers something for&nbsp;everyone, no matter your taste preferences.
                    </p>
                    <p className='sm:w-3/4 font-medium my-1 text-left'>
                        🍕 Warm Hospitality: At St. Pizza, you&rsquo;re not just a customer,&nbsp;you&rsquo;re part of our family.
                    </p>
                </div>
                <div className="mt-5 sm:mt-0">
                    <MenuCard img={pizzaMenu} />
                </div>
            </div>
            <div className="grid grid-cols-2 w-full gap-2 sm:mt-10 mt-5">
                <PizzaCard img={p1} />
                <PizzaCard img={p2} />
                <PizzaCard img={p3} />
                <PizzaCard img={p4} />
            </div>
        </section>
    )
}

export default WhatWeOffer