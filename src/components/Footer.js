import React from 'react';

export default function Footer() {
    return (
        <footer className="relative isolate overflow-hidden bg-white py-10 sm:py-16 lg:py-20 px-6 sm:px-10 lg:px-20">
            <img
                alt=""
                src={require(`../image/footer/bg.png`)}
                className="absolute inset-0 -z-10 w-full h-auto object-cover object-right md:object-center"
            />
            <div className="bg-[#D2E6E4] inset-0 -z-20 absolute w-full h-full mt-9 lg:mt-20"></div>
            <div className="flex flex-wrap sm:flex-nowrap justify-between md:mx-1 xl:mx-10 lg:mx-5 ">
                <div className="w-full mb-6 sm:mb-0 mr-5">
                    <img src={require(`../image/logo.png`)} alt="ONLEARN" className="h-7 md:h-[37.69px] w-auto" />
                    <ul className="text-[#0B7077] text-sm space-y-2 mt-7">
                        <li className="flex items-start">
                            <img src={require(`../image/footer/location.png`)} className="h-6 w-auto" alt="location" />
                            <span className="ml-2"><b>Address: </b><br /> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
                        </li>
                        <li className="flex items-center">
                            <img src={require(`../image/footer/calling.png`)} className="h-6 w-auto" alt="call" />
                            <span className="ml-2">Tel: +9229341037</span>
                        </li>
                        <li className="flex items-center">
                            <img src={require(`../image/footer/time.png`)} className="h-6 w-auto" alt="hours" />
                            <span className="ml-2">Response hours: 8 to 20</span>
                        </li>
                        <li className="flex items-center">
                            <img src={require(`../image/footer/message.png`)} className="h-6 w-auto" alt="email" />
                            <span className="ml-2">Email: info@onlearn.com</span>
                        </li>
                    </ul>
                </div>
                <div className="flex flex-wrap lg:justify-center xl:justify-end w-full mt-10 sm:mt-0 mr-5">
                    <div className="flex flex-wrap gap-y-5 w-full gap-x-20 md:gap-x-0">
                        <div className="mb-6 sm:mb-0 mr-10">
                            <h2 className="font-bold text-[#0A033C] text-[15px] mb-2">Categories</h2>
                            <ul className="text-[#0B7077] text-sm space-y-2">
                                <li>Counseling</li>
                                <li>Health and fitness</li>
                                <li>Individual development</li>
                                <li>More</li>
                            </ul>
                        </div>
                        <div className="mb-6 sm:mb-0">
                            <h2 className="font-bold text-[#0A033C] text-[15px] mb-2">Links</h2>
                            <ul className="text-[#0B7077] text-sm space-y-2">
                                <li>About us</li>
                                <li>Blog</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="w-full sm:w-auto flex mt-5 sm:mt-0">
                    <div className='w-full'>
                        <h2 className="text-sm mb-2 text-center text-[#0A033C]">
                            Stay up to date with the latest courses
                        </h2>
                        <div className="flex w-full sm:w-72 xl:w-[425.28px] mt-5 bg-white justify-between rounded-xl p-2">
                            <input
                                type="email"
                                placeholder="Email"
                                className="placeholder-[#0B7077] pl-4 max-w-28 py-2 focus:outline-none"
                            />
                            <button className="bg-[#0B7077] text-base px-8 py-3 xl:px-12 xl:py-4 text-white rounded-[20px] hover:bg-teal-500">
                                Send
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};
