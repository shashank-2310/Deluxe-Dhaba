"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import SectionHeader from './ui/SectionHeader';
import { FaStar } from "react-icons/fa";
import Sallad from "./ui/Sallad";

const testimonials = [
    {
        quote: "St. Pizza never disappoints! Their pizzas are always fresh, delicious, and delivered with a smile.",
        name: "John Smith",
        title: "Pizza Lover"
    },
    {
        quote: "I've tried pizzas from all over, but nothing compares to St. Pizza's Margherita. It's simply perfection on a plate!",
        name: "Emily Johnson",
        title: "Food Enthusiast"
    },
    {
        quote: "St. Pizza has become our go-to spot for family dinners. Their diverse menu ensures there's something for everyone, and the quality is consistently excellent.",
        name: "Michael Brown",
        title: "Happy Customer"
    },
    {
        quote: "As a vegetarian, I appreciate the variety of options at St. Pizza. Their Vegetarian Pizza is always flavorful and satisfying.",
        name: "Sarah Davis",
        title: "Vegetarian Advocate"
    },
    {
        quote: "St. Pizza not only serves great food but also contributes positively to the community. It's a win-win!",
        name: "David Wilson",
        title: "Community Member"
    },
];

const Testinomial = () => {
    return (
        <section className='text-center mt-5 sm:mt-14'>
            <SectionHeader
                MainHeader={"Testinomials"}
                SubHeader={"know what our customers say"}
            />
            <Sallad/>
            <div className="flex flex-row justify-center items-center gap-1 text-yellow-400/95 text-2xl text-center">
                <FaStar />
                <span className="text-3xl"><FaStar /></span>
                <FaStar />
            </div>
            <div className="h-[30rem] -mt-10 rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
                <InfiniteMovingCards
                    items={testimonials}
                    direction="right"
                    speed="slow"
                />
            </div>
        </section>
    )
}

export default Testinomial