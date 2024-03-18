"use client";

import Image from 'next/image';
import React from 'react'
import logo from '@/assets/logo.png'

const AboutImage = () => {
    return (
        <Image src={logo} alt='logo' className='max-w-sm mr-5 -z-10 rounded-xl' />
    )
}

export default AboutImage