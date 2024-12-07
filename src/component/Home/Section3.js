export default function Section3() {
    return (
        <div className="bg-white">
            <div className="my-10 md:my-25 xl:mx-20 mx-10 h-auto px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
                <div className="m-5 w-fit mx-auto">
                    <h2 className="text-2xl md:text-5xl font-bold tracking-tight text-accent font-inter">Courses Category</h2>
                    <img src={require(`../../image/Home/section3/line.png`)} className="-mx-8 w-28 md:w-[176.83px] h-auto ml-auto" alt="" />
                </div>
                <p className="max-w-3xl text-md md:text-[22px] mx-auto text-center text-[#696984]">Onlearing  is one powerful online software suite that combines all the tools needed to run a successful school or office.</p>

                <div className="mx-auto mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    <div className="mx-auto group items-center justify-center max-w-[290px] rounded-lg hover:shadow-md p-3 transition-all duration-300 hover:scale-105">
                        <div className="mx-auto w-[50px] rounded-full bg-[#add2fb] m-5">
                            <img src={require(`../../image/Home/section3/lipstick.png`)} className="w-full h-auto" alt="" />
                        </div>
                        <div className="text-center pb-7">
                            <h3 className="text-xl md:text-[27px] text-accent font-semibold">Beauty</h3>
                            <p className="text-md md:text-lg text-[#696984] py-5">One powerful online software suite that combines</p>
                            <a href="#" className="rounded-md bg-white text-center px-14 py-3 text-accent shadow-sm group-hover:bg-[#eb7037] group-hover:text-white">more</a>
                        </div>
                    </div>
                    <div className="mx-auto group items-center justify-center max-w-[290px] rounded-lg hover:shadow-md p-3 transition-all duration-300 hover:scale-105">
                        <div className="mx-auto w-[50px] rounded-full bg-[#ebcafb] m-5">
                            <img src={require(`../../image/Home/section3/vaccine.png`)} className="w-full h-auto" alt="" />
                        </div>
                        <div className="text-center pb-7">
                            <h3 className="text-xl md:text-[27px] text-accent font-semibold">Medical</h3>
                            <p className="text-md md:text-lg text-[#696984] py-5">One powerful online software suite that combines</p>
                            <a href="#" className="rounded-md bg-white text-center px-14 py-3 text-accent shadow-sm group-hover:bg-[#eb7037] group-hover:text-white">more</a>
                        </div>
                    </div>
                    <div className="mx-auto group items-center justify-center max-w-[290px] rounded-lg hover:shadow-md p-3 transition-all duration-300 hover:scale-105">
                        <div className="mx-auto w-[50px] rounded-full bg-[#f4bb40] m-5">
                            <img src={require(`../../image/Home/section3/dumbbell.png`)} className="w-full h-auto" alt="" />
                        </div>
                        <div className="text-center pb-7">
                            <h3 className="text-xl md:text-[27px] text-accent font-semibold">Sport</h3>
                            <p className="text-md md:text-lg text-[#696984] py-5">One powerful online software suite that combines</p>
                            <a href="#" className="rounded-md bg-white text-center px-14 py-3 text-accent shadow-sm group-hover:bg-[#eb7037] group-hover:text-white">more</a>
                        </div>
                    </div>
                    <div className="mx-auto group items-center justify-center max-w-[290px] rounded-lg hover:shadow-md p-3 transition-all duration-300 hover:scale-105">
                        <div className="mx-auto w-[50px] rounded-full bg-[#add2fb] m-5">
                            <img src={require(`../../image/Home/section3/bread.png`)} className="w-full h-auto" alt="" />
                        </div>
                        <div className="text-center pb-7">
                            <h3 className="text-xl md:text-[27px] text-accent font-semibold">Nutrition</h3>
                            <p className="text-md md:text-lg text-[#696984] py-5">One powerful online software suite that combines</p>
                            <a href="#" className="rounded-md bg-white text-center px-14 py-3 text-accent shadow-sm group-hover:bg-[#eb7037] group-hover:text-white">more</a>
                        </div>
                    </div>
                </div>
                <div className="w-full text-center py-10">
                    <a href="#" className="rounded-md mx-auto border border-accent bg-white text-center px-14 py-3 text-accent hover:bg-accent hover:text-white">view all</a>
                </div>
            </div>
        </div>
    )
}
