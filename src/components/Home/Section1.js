/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
export default function Section1() {
    return (
        <div className="bg-white mb-10 md:mb-20">
            <div className="mx-auto">
                <div className="relative isolate overflow-hidden h-[600px] sm:h-[500px] md:h-[700px] bg-[#D2E6E4] px-6 pt-16 rounded-b-3xl sm:px-16 md:pt-24 lg:flex lg:px-20 lg:pt-0">
                    <div className="mx-auto max-w-sm sm:max-w-md md:max-w-2xl text-center mt-10 lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
                        <div className="flex items-center justify-center lg:justify-start">
                            <div className="h-auto max-w-48 rounded-md bg-white text-center text-sm py-2 my-3 px-4">
                                Never stop learning
                            </div>
                        </div>
                        <h1 className="text-3xl sm:text-5xl md:text-6xl lx:text-7xl font-semibold tracking-tight text-accent">
                            Grow up your skills by online courses with Onlearning
                        </h1>
                        <div className="mt-10 flex flex-wrap items-center justify-center gap-6 lg:justify-start">
                            <a
                                href="#"
                                className="md:h-[59px] md:w-[180px] rounded-md bg-[#FD661F] text-center px-5 py-4 text-sm md:text-base font-semibold text-white shadow-sm hover:bg-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                            >
                                EXPLORE PATH
                            </a>
                            <div className="">
                                <img className="md:h-[59px]" src={require(`../../image/Home/section1/review.png`)} />
                            </div>
                        </div>
                    </div>
                    <div className="relative invisible lg:visible w-2/5 h-80 xl:ml-28">
                        <img
                            alt="OnLearn"
                            src={require(`../../image/Home/section1/home.png`)}
                            className="mt-12 md:mt-20 top-0 xl:h-[623.82px] max-w-none"
                        />
                    </div>
                </div>
                <div className="flex justify-center -mt-24 md:-mt-36">
                    <div className="flex justify-center p-5 md:p-10 rounded-full bg-[#D2E6E4] h-auto w-[170px] md:w-[274px] ">
                        <img
                            alt="OnLearn"
                            src={require(`../../image/Home/section1/play.png`)}
                            className="md:h-[201px] h-auto w-auto z-10"
                        />

                    </div>
                </div>
            </div>
        </div>
    )
}
