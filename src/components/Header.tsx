"use client";

import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation'

import User from "@/assets/icons/User";
import Cart from "@/assets/icons/Cart";
import Image from 'next/image';

import logo from "@/assets/logo.png"

const Header = () => {
    const pathname = usePathname()
    return (
        <header className="flex flex-wrap items-center justify-between">
            <Link className="" href="/">
                <Image src={logo} alt='logo' width={90} height={90} className='rounded-full w-1/2 sm:w-auto' />
            </Link>
            <nav className="flex flex-wrap items-center gap-4 sm:gap-8 text-gray-500 font-semibold">
                <Link
                    href={'/'}
                    className={`link ${pathname === '/' ? 'active text-black' : ''} hover:text-black`}>
                    Home
                </Link>
                <Link
                    href={'/menu'}
                    className={`link ${pathname === '/menu' ? 'active text-black' : ''} hover:text-black`}>
                    Menu
                </Link>
                <Link
                    href={'about'}
                    className={`link ${pathname === '/about' ? 'active text-black' : ''} hover:text-black`}>
                    About
                </Link>
                <Link
                    href={'/contact'}
                    className={`link ${pathname === '/contact' ? 'active text-black' : ''} hover:text-black`}>
                    Contact
                </Link>
                <Link
                    href={'/'}
                    className="bg-primary hover:bg-black text-white rounded-full px-3 py-1 sm:px-5 sm:py-2 hidden sm:flex gap-2">
                    Login
                    <span className='w-6'><User /></span>
                </Link>
                <Link href={''} className="hover:bg-black bg-primary text-white rounded-full p-1 sm:p-2">
                    <Cart />
                </Link>
            </nav>
        </header>
    )
}

export default Header