export default function Section5() {
    return (
        <div className="my-10 md:my-25 xl:mx-20 mx-10 sm:mx-14 grid gap-x-8 lg:max-w-none lg:grid-cols-2 lg:items-start">
            <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:w-full lg:max-w-7xl lg:px-8 grid grid-cols-1 lg:flex lg:flex-row lg:items-center">
                <div className="lg:-ml-12 max-w-full p-12 lg:sticky lg:top-4 lg:overflow-hidden">
                    <img
                        alt=""
                        src={require(`../image/section5/pana.png`)}
                        className="xl:max-w-[534.58px] mx-auto h-auto mt-20"
                    />
                </div>
                <div className="lg:pr-4 ml-0 mt-10 lg:mt-0 lg:ml-10">
                    <div className="lg:max-w-lg">
                        <div className="bg-[#D4E1FF] text-center rounded-md w-[121px]">
                            <p className="text-lg leading-7 text-accent">Training</p>
                        </div>
                        <h1 className="mt-5 text-2xl md:text-5xl font-bold tracking-tight text-[#FD661F]">
                            Staff training
                        </h1>
                    </div>
                    <div className="max-w-xl text-sm md:text-lg leading-7 text-[#696984] lg:max-w-lg mt-5">
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
    );
}
