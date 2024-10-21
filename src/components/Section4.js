export default function Section4() {
    return (
        <div className="my-10 md:my-25 xl:mx-20 mx-10 sm:mx-14 grid grid-cols-1 gap-x-8 lg:max-w-none lg:grid-cols-2 lg:items-start">
            <div className="mb-5 lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                <div className="lg:pr-4">
                    <div className="lg:max-w-lg">
                        <div className='bg-[#F5F5F5] text-center rounded-md w-[121px]'>
                            <p className="text-lg leading-7 text-[#0B7077]">Benefits</p>
                        </div>
                        <h1 className="mt-5 text-2xl md:text-5xl font-bold tracking-tight text-[#0B7077]">Get Student ID card</h1>
                    </div>
                </div>
            </div>
            <div className="max-w-1/2 -mt-12 py-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden sm:mx-auto lg:mx-0">
                <div className='flex flex-wrap md:flex-nowrap w-full px-10 py-5 gap-5 justify-center bg-[#D2E6E4] rounded-3xl'>
                    <img
                        alt=""
                        src={require(`../image/section4/card1.png`)}
                        className="xl:max-w-[211.6px] max-w-none rounded-xl lg:max-w-[180.6px]"
                    />
                    <img
                        alt=""
                        src={require(`../image/section4/card2.png`)}
                        className="xl:max-w-[211.6px] max-w-none rounded-xl lg:max-w-[180.6px]"
                    />
                </div>
            </div>
            <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                <div className="lg:pr-4">
                    <div className="max-w-xl text-sm md:text-lg leading-7  text-[#696984] lg:max-w-lg">
                        <ul role="list" className="space-y-10">
                            <li className="flex gap-x-3 items-center">
                                <img src={require(`../image/section4/gird.png`)} className="h-6 w-auto flex-none" alt="" />
                                <span className="md:ml-10">
                                    Teachers don’t get lost in the grid view and have a dedicated Podium space.
                                </span>
                            </li>
                            <li className="flex gap-x-3 items-center">
                                <img src={require(`../image/section4/tas.png`)} className="h-6 w-auto flex-none" alt="" />
                                <span className="md:ml-10">
                                    TA’s and presenters can be moved to the front of the class.
                                </span>
                            </li>
                            <li className="flex gap-x-3 items-center">
                                <img src={require(`../image/section4/class.png`)} className="h-6 w-auto flex-none" alt="" />
                                <span className="md:ml-10">
                                    Teachers can easily see all students and class data at one time.
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
