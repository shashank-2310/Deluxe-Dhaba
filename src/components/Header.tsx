"use client";

import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation'

import User from "@/assets/icons/User";
import Cart from "@/assets/icons/Cart";

const Header = () => {
    const pathname = usePathname()
    return (
        <header className="flex flex-wrap items-center justify-between">
            <Link className="text-primaryPizza font-semibold text-lg sm:text-2xl" href="/">ST PIZZA</Link>
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
                    className="bg-primaryPizza hover:bg-black text-white rounded-full px-3 py-1 sm:px-5 sm:py-2 flex gap-2">
                    Login
                    <span className='w-6'><User /></span>
                </Link>
                <Link href={''} className="hover:bg-black bg-primaryPizza text-white rounded-full p-1 sm:p-2">
                    <Cart />
                </Link>
            </nav>
        </header>
    )
}

export default Header