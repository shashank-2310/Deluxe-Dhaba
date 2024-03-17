"use client";

import React from 'react'
import Image from "next/image"
import pizza from "@/assets/pizza.png"

interface menuItems {
    title: string,
    description: string,
    price: number,
}

const MenuItemCard: React.FC<menuItems> = ({ title, description, price }) => {
    return (
        <div className='bg-gray-200 p-1 sm:p-4 rounded-xl text-center hover:bg-white transition-all hover:shadow-2xl hover:shadow-black/50'>
            <div className="text-center">
                <Image src={pizza} alt='pizza' className='max-h-24 max-w-24 block mx-auto' />
            </div>
            <h4 className='font-semibold my-1 sm:my-3 text-sm sm:text-xl'>{title}</h4>
            <p className='text-gray-500 text-xs sm:text-sm'>{description}</p>
            <button className='bg-primaryPizza text-white mt-2 sm:text-base text-xs sm:mt-4 rounded-full sm:py-2 py-1 px-4 sm:px-8 hover:bg-black'>Add to cart ${price}</button>
        </div>
    )
}

export default MenuItemCard