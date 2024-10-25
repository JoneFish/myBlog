import { assets } from '@/Assets/assets';
import Image from 'next/image';
import React from 'react';
import Head from './Head';
import { Input, Button } from "@nextui-org/react";
const Header = () => {
    return (
        // Defining Padding for the Header
        <div className='py-5 px-5 md:px-12 lg:px-28'>
            {/* --- Calling Head --- */}
            <Head />
            <div className='text-center my-8'>
                {/* --- Top Section --- */}
                <h1 className='text-3xl sm:text-5xl font-semibold'>JoneFisher</h1>

                <p className='mt-10 max-w-[740px] m-auto text-xs sm:text-base'>
                    竹篱数掩傍鱼矶，万点梅花掠地飞。正喜巡檐来索笑，已悲临水送将归。影横月处愁空绝，子满枝时事更非。自古情锺在吾辈，尊前莫怪泪沾衣。——陆游
                </p>
                {/* --- NewsLetter Subscription --- */}
                {/* <form className='flex justify-between max-w-[500px] scale-75 sm: scale-100 mx-auto mt-10 border border-black shadow-[-4px_4px_0px_#000000] hover:shadow-[-8px_8px_0px_#000000] hover:translate-y-[-2px] transition duration-300 ease-in-out'> */}

                {/* <input type='email' placeholder='关键字搜索' className='pl-4 outline-none '/>
                    <button type='submit' className='border-1 border-black py-4 px-4 sm:px-8 active:bg-gray-600 active:text-white'>搜索</button> */}
                <div className='flex items-center justify-center mt-5'>
                    <Input
                        className='w-200'
                        type="input"
                        //   label="搜索"
                        placeholder="关键字搜索"
                        labelPlacement="outside"
                    />
                    <Button className='active:bg-gray-200 active:text-white text-gray-50 bg-slate-400'>搜索</Button>
                </div>
                {/* </form> */}
            </div>
        </div>
    );
};

export default Header;