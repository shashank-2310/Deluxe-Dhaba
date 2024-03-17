"use client";

import Image from 'next/image';
import React from 'react'
import pizzaStacked from '@/assets/pizza_stacked.webp'

const AboutImage = () => {
    return (
        <Image src={pizzaStacked} alt='pizza_stacked' className='max-w-sm' />
    )
}

export default AboutImage