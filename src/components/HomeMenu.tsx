"use client";

import React from 'react'
import Image from "next/image"

import MenuItemCard from './cards/MenuItemCard';
import menuData from '@/assets/data/menuData.json'
import sallad1 from "@/assets/sallad1.png";
import sallad2 from "@/assets/sallad2.png";
import SectionHeader from './ui/SectionHeader';

interface menuItems {
    id: number,
    title: string,
    description: string,
    price: number,
}


const HomeMenu = () => {
    return (
        <section className=''>
            <div className="absolute left-0 right-0 w-full">
                <div className="absolute left-0 -top-[70px] -z-10 bounce">
                    <Image src={sallad1} alt='sallad' width={192} height={192} />
                </div>
                <div className="absolute -top-[100px] right-0 -z-20 bounce">
                    <Image src={sallad2} alt='sallad' width={107} height={195} />
                </div>
            </div>
            <div className='text-center'>
                <SectionHeader SubHeader={"check out our"} MainHeader={"menu"} />
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {
                    menuData.menuItems.map((menuItem: menuItems) => (
                        <MenuItemCard
                            key={menuItem.id}
                            title={menuItem.title}
                            description={menuItem.description}
                            price={menuItem.price}
                        />
                    ))
                }
            </div>
        </section>
    )
}

export default HomeMenu