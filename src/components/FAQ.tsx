"use client";

import React from 'react'
import SectionHeader from './ui/SectionHeader';

const faqs = [
    {
        id: 1,
        question: "What are your opening hours?",
        answer: "We are open from Monday to Sunday, from 11:00 AM to 10:00 PM."
    },
    {
        id: 2,
        question: "Do you offer gluten-free pizza?",
        answer: "Yes, we offer gluten-free pizza crust as an option for our customers with dietary restrictions."
    },
    {
        id: 3,
        question: "Can I customize my pizza order?",
        answer: "Absolutely! You can choose from a variety of toppings, sauces, and crust options to customize your pizza just the way you like it."
    },
    {
        id: 4,
        question: "Do you offer delivery services?",
        answer: "Yes, we offer delivery services within a 5-mile radius of our restaurant. Simply place your order online or give us a call, and we'll deliver your favorite pizzas right to your doorstep."
    }
];

const FAQ = () => {
    return (
        <section className='text-center'>
            <SectionHeader
                SubHeader={"Frequently asked questions"}
                MainHeader={""}
            />
            <div className="grid grid-cols-2 gap-3 sm:gap-6 mt-5 sm:mt-10">
                {
                    faqs.map((faq) => (
                        <div key={faq.id} className='bg-gray-200 p-1 sm:p-4 rounded-xl text-center hover:bg-white transition-all hover:shadow-2xl hover:shadow-black/50'>
                            <h4 className='font-medium my-1 sm:my-3 text-sm sm:text-xl'>
                                {faq.question}
                            </h4>
                            <hr className='h-px bg-black/80 rounded-full w-11/12 my-1 mx-auto' />
                            <p className='text-gray-700 text-xs sm:text-sm pt-1'>
                                {faq.answer}
                            </p>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default FAQ