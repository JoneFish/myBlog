import { blog_data } from '@/Assets/assets';
import React, { useState } from 'react';
import BlogItems from './BlogItems';
import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";
const BlogList = () => {

    const [menu, setMenu] = useState("All");

    return (
        <div>
            {/* --- Category --- */}
            {/* <div className='flex justify-center gap-6 my-10'>
                <button onClick={() => setMenu("All")} className={`transition-all duration-300 hover:underline hover:scale-110 ${menu === "All" ? 'bg-black text-white py-1 px-4 rounded-sm' : "" }`}>全部</button>
                <button onClick={() => setMenu("Technology")} className={`transition-all duration-300 hover:underline hover:scale-110 ${menu === "Technology" ? 'bg-black text-white py-1 px-4 rounded-sm' : "" }`}>Technology</button>
                <button onClick={() => setMenu("Startup")} className={`transition-all duration-300 hover:underline hover:scale-110 ${menu === "Startup" ? 'bg-black text-white py-1 px-4 rounded-sm' : "" }`}>Startup</button>
                <button onClick={() => setMenu("Lifestyle")} className={`transition-all duration-300 hover:underline hover:scale-110 ${menu === "Lifestyle" ? 'bg-black text-white py-1 px-4 rounded-sm' : "" }`}>Lifestyle</button>
            </div> */}
            <div className="flex w-full flex-col">
                <Tabs 
                color='#fff'
                className='flex justify-center items-center'
                onSelectionChange={(e)=>{
                    setMenu(e)
                }}
                aria-label="Options">
                    <Tab key="All" title="全部">
                        <Card>
                            <CardBody>
                                <div className='flex flex-wrap justify-around gap-1 gap-y-10 mb-16 xl:mx-24'>
                                    {/* --- Filtering as per Categories --- */}
                                    {blog_data.filter((item) => menu === "All" ? true : item.category === menu).map((item, index) => {
                                        return <BlogItems 
                                        key={index} 
                                        id={item.id} 
                                        image={item.image} 
                                        title={item.title} 
                                        description={item.description} 
                                        category={item.category} />
                                    })}
                                </div>
                            </CardBody>
                        </Card>
                    </Tab>
                    <Tab key="Technology" title="Technology">
                        <Card>
                            <CardBody>
                                <div className='flex flex-wrap justify-around gap-1 gap-y-10 mb-16 xl:mx-24'>
                                    {/* --- Filtering as per Categories --- */}
                                    {blog_data.filter((item) => menu === "All" ? true : item.category === menu).map((item, index) => {
                                        return <BlogItems key={index} id={item.id} image={item.image} title={item.title} description={item.description} category={item.category} />
                                    })}
                                </div>
                            </CardBody>
                        </Card>
                    </Tab>
                    <Tab key="Startup" title="Startup">
                        <Card>
                            <CardBody>
                                <div className='flex flex-wrap justify-around gap-1 gap-y-10 mb-16 xl:mx-24'>
                                    {/* --- Filtering as per Categories --- */}
                                    {blog_data.filter((item) => menu === "All" ? true : item.category === menu).map((item, index) => {
                                        return <BlogItems key={index} id={item.id} image={item.image} title={item.title} description={item.description} category={item.category} />
                                    })}
                                </div>
                            </CardBody>
                        </Card>
                    </Tab>
                    <Tab key="Lifestyle" title="Lifestyle">
                        <Card>
                            <CardBody>
                                <div className='flex flex-wrap justify-around gap-1 gap-y-10 mb-16 xl:mx-24'>
                                    {/* --- Filtering as per Categories --- */}
                                    {blog_data.filter((item) => menu === "All" ? true : item.category === menu).map((item, index) => {
                                        return <BlogItems key={index} id={item.id} image={item.image} title={item.title} description={item.description} category={item.category} />
                                    })}
                                </div>
                            </CardBody>
                        </Card>
                    </Tab>
                </Tabs>
            </div>

        </div>
    );
};

export default BlogList;