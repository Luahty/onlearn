export default function Section1() {
    return (
        <div className="bg-white">
            <div className="mx-auto">
                <div className="relative isolate overflow-hidden h-[600px] md:h-[700px] bg-[#D2E6E4] px-6 pt-16 rounded-b-3xl sm:px-16 md:pt-24 lg:flex lg:px-20 lg:pt-0">

                    <div className="mx-auto max-w-2xl text-center mt-10 lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
                        <div className="flex items-center justify-center lg:justify-start">
                            <div className="h-auto max-w-48 rounded-md bg-white text-center text-sm py-2 my-3 px-4">
                                Never stop learning
                            </div></div>
                        <h1 className="text-5xl : md:text-6xl lx:text-7xl font-semibold tracking-tight text-[#0B7077]">
                            Grow up your skills by online courses with Onlearning
                        </h1>
                        <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                            <a
                                href="#"
                                className="h-[59px] w-[180px] rounded-md bg-[#FD661F] text-center px-3.5 py-4 text-base font-semibold text-white shadow-sm hover:bg-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                            >
                                EXPLORE PATH
                            </a>
                            <img className="h-[59px]" src={require(`../image/review.png`)} />
                        </div>
                    </div>
                    <div className="relative invisible lg:visible w-2/5 h-80 xl:ml-28">
                        <img
                            alt="OnLearn"
                            src={require(`../image/home.png`)}
                            className="mt-12 md:mt-20 top-0 xl:h-[623.82px] max-w-none"
                        />
                    </div>
                </div>
                <div className="flex justify-center -mt-32">
                    <div className="flex justify-center py-10 rounded-full bg-[#D2E6E4] h-[274px] w-[274px] ">
                        <img
                            alt="OnLearn"
                            src={require(`../image/play.png`)}
                            className="h-[201px] w-auto z-10"
                        />

                    </div>
                </div>
            </div>
        </div>
    )
}
