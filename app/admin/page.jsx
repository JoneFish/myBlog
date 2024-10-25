"use client"
import React from 'react';
import { usePathname } from 'next/navigation'
const page = () => {
    const pathname = usePathname()
    return (
        <div>
           { `66666666${pathname} `}
        </div>
    );
};

export default page;