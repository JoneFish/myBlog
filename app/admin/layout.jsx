"use client"
import { assets } from "@/Assets/assets"
import SideBar from "@/Components/adminComponents/SideBar"
import Image from "next/image"
import { useEffect } from "react"
import { usePathname } from 'next/navigation'

export default function layout(props) {
	const { children } = props||{}
	const pathname = usePathname()
    return (
        <>
            <div className="flex">
                <SideBar />
                <div className="flex flex-col w-full">
                    <div className="flex items-center justify-between w-full py-3 max-h-[60px] px-12 border border-b border-black">
                        <h3 className="font-medium">{ pathname }</h3>
                        <Image src={assets.profile_icon} width={40} alt="" />
                    </div>
                    {children}
                </div>
            </div>
        </>
    )
}