export default function Section3() {
    return (
        <div className="bg-white">
            <div className="my-10 md:my-25 xl:mx-20 mx-10 h-auto px-4 sm:px-6 lg:px-8">
                <div className="m-5 w-fit mx-auto">
                    <h2 className="text-2xl md:text-5xl font-bold tracking-tight text-[#FD661F] font-inter">Popular Courses</h2>
                    <img src={require(`../image/section2/line.png`)} className="-mx-8 w-28 md:w-[176.83px] h-auto ml-auto" alt="" />
                </div>
                <div className="flex flex-wrap justify-center items-center gap-x-2 sm:gap-x-6 gap-y-6 my-5">
                    <a className="bg-accent rounded-md px-5 py-3">
                        <p className="text-white text-xs">All Programme</p>
                    </a>
                    <a className="bg-white border border-[#C4C4C4] rounded-md px-6 py-3">
                        <p className="text-accent text-xs">Ui/Ux Design</p>
                    </a>
                    <a className="bg-white border border-[#C4C4C4] rounded-md px-4 py-3">
                        <p className="text-accent text-xs">Program Design</p>
                    </a>
                    <a className="bg-white border border-[#C4C4C4] rounded-md px-4 py-3">
                        <p className="text-accent text-xs">Program Design</p>
                    </a>
                    <a className="bg-white border border-[#C4C4C4] rounded-md px-4 py-3">
                        <p className="text-accent text-xs">Program Design</p>
                    </a>
                    <a className="bg-white border border-[#C4C4C4] rounded-md px-4 py-3">
                        <p className="text-accent text-xs">Program Design</p>
                    </a>
                </div>

                <div className="mx-auto mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    <div className="mx-auto rounded-[14px] shadow-2xl shadow-[#00000015] flex flex-col">
                        <div className="relative">
                            <img
                                src={require(`../image/section2/cover1.png`)}
                                className="w-full h-auto rounded-t-[14px]"
                                alt="Course Cover"
                            />
                            <div className="absolute -bottom-7 left-1/2 transform -translate-x-1/2 w-[225px] h-10 bg-white flex items-center gap-1 rounded-full p-2 shadow-md">
                                <img
                                    src={require(`../image/section2/student.png`)}
                                    className="w-[108px] h-auto"
                                    alt="Student Icon"
                                />
                                <span className="text-sm font-inter">+</span>
                                <span className="text-sm">40 students</span>
                            </div>
                        </div>
                        <div className="px-5 pt-10 flex-grow">
                            <p className="text-[10px] text-[#777795]">1 - 28 July 2022</p>
                            <h3 className="mt-3 text-base font-extrabold leading-6 text-accent">
                                Product Management Basic - Course
                            </h3>
                            <p className="mt-3 line-clamp-3 text-[10px] leading-6 text-gray-600">
                                Product Management Masterclass, you will learn with Sarah Johnson - Head of Product Customer Platform Gojek Indonesia.
                            </p>
                        </div>
                        <div className="flex justify-between items-center p-5 mt-auto">
                            <div className="font-inter">
                                <span className="text-[#FD661F] text-base font-bold">$ 380</span>
                                <span className="ml-2 line-through text-[#230F0F] text-sm font-extralight">$ 500</span>
                            </div>
                            <a
                                href="#"
                                className="text-xs rounded-md bg-accent px-4 py-3 text-white shadow-sm hover:bg-[#075156]"
                            >
                                Enroll Now
                            </a>
                        </div>
                    </div>
                    <div className="mx-auto rounded-[14px] shadow-2xl shadow-[#00000015] flex flex-col">
                        <div className="relative">
                            <img
                                src={require(`../image/section2/cover2.png`)}
                                className="w-full h-auto rounded-t-[14px]"
                                alt=""
                            />
                            <div className="w-[225px] absolute -bottom-7 left-1/2 transform -translate-x-1/2 h-10 bg-white flex items-center gap-1 rounded-full p-2 shadow-md">
                                <img
                                    src={require(`../image/section2/student.png`)}
                                    className="w-[108px] h-auto"
                                    alt=""
                                />
                                <span className="text-sm font-inter">+</span>
                                <span className="text-sm">11 students</span>
                            </div>
                        </div>
                        <div className="px-5 pt-10 flex-grow">
                            <p className="text-[10px] text-[#777795]">1 - 28 July 2022</p>
                            <h3 className="mt-3 text-base font-extrabold leading-6 text-accent">
                                BM Data Science Professional Certificate
                            </h3>
                            <p className="mt-3 line-clamp-3 text-[10px] leading-6 text-gray-600">
                                Product Management Masterclass, you will learn with Sarah Johnson - Head of Product Customer Platform Gojek Indonesia.
                            </p>
                        </div>
                        <div className="w-full flex justify-between items-center p-5 mt-auto">
                            <div className="font-inter">
                                <span className="text-[#FD661F] text-base font-bold">$678</span>
                                <span className="ml-2 line-through text-[#230F0F] text-sm font-extralight">$500</span>
                            </div>
                            <a
                                href="#"
                                className="text-xs rounded-md bg-accent px-4 py-3 text-white shadow-sm hover:bg-[#075156]"
                            >
                                Enroll Now
                            </a>
                        </div>
                    </div>
                    <div className="mx-auto rounded-[14px] shadow-2xl shadow-[#00000015] flex flex-col">
                        <div className="relative">
                            <img
                                src={require(`../image/section2/cover3.png`)}
                                className="w-full h-auto rounded-t-[14px]"
                                alt=""
                            />
                            <div className="w-[225px] absolute -bottom-7 left-1/2 transform -translate-x-1/2 h-10 bg-white flex items-center gap-1 rounded-full p-2 shadow-md">
                                <img
                                    src={require(`../image/section2/student.png`)}
                                    className="w-[108px] h-auto"
                                    alt=""
                                />
                                <span className="text-sm font-inter">+</span>
                                <span className="text-sm">234 students</span>
                            </div>
                        </div>
                        <div className="px-5 pt-10 flex-grow">
                            <p className="text-[10px] text-[#777795]">1 - 28 July 2022</p>
                            <h3 className="mt-3 text-base font-extrabold leading-6 text-accent">
                                The Science of Well-Being
                            </h3>
                            <p className="mt-3 line-clamp-3 text-[10px] leading-6 text-gray-600">
                                Product Management Masterclass, you will learn with Sarah Johnson - Head of Product Customer Platform Gojek Indonesia.
                            </p>
                        </div>
                        <div className="w-full flex justify-between items-center p-5 mt-auto">
                            <div className="font-inter">
                                <span className="text-[#FD661F] text-base font-bold">$123</span>
                                <span className="ml-2 line-through text-[#230F0F] text-sm font-extralight">$500</span>
                            </div>
                            <a
                                href="#"
                                className="text-xs rounded-md bg-accent px-4 py-3 text-white shadow-sm hover:bg-[#075156]"
                            >
                                Enroll Now
                            </a>
                        </div>
                    </div>
                    <div className="mx-auto rounded-[14px] shadow-2xl shadow-[#00000015] flex flex-col">
                        <div className="relative">
                            <img
                                src={require(`../image/section2/cover4.png`)}
                                className="w-full h-auto rounded-t-[14px]"
                                alt=""
                            />
                            <div className="w-[225px] absolute -bottom-7 left-1/2 transform -translate-x-1/2 h-10 bg-white flex items-center gap-1 rounded-full p-2 shadow-md">
                                <img
                                    src={require(`../image/section2/student.png`)}
                                    className="w-[108px] h-auto"
                                    alt=""
                                />
                                <span className="text-sm font-inter">+</span>
                                <span className="text-sm">342 students</span>
                            </div>
                        </div>
                        <div className="px-5 pt-10 flex-grow">
                            <p className="text-[10px] text-[#777795]">1 - 28 July 2022</p>
                            <h3 className="mt-3 text-base font-extrabold leading-6 text-accent">
                                Python for Everybody Specialization
                            </h3>
                            <p className="mt-3 line-clamp-3 text-[10px] leading-6 text-gray-600">
                                Product Management Masterclass, you will learn with Sarah Johnson - Head of Product Customer Platform Gojek Indonesia.
                            </p>
                        </div>
                        <div className="w-full flex justify-between items-center p-5 mt-auto">
                            <div className="font-inter">
                                <span className="text-[#FD661F] text-base font-bold">$567</span>
                                <span className="ml-2 line-through text-[#230F0F] text-sm font-extralight">$500</span>
                            </div>
                            <a
                                href="#"
                                className="text-xs rounded-md bg-accent px-4 py-3 text-white shadow-sm hover:bg-[#075156]"
                            >
                                Enroll Now
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
