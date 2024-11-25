import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default () => {
    return (
        <div className="bg-white overflow-visible">
            <div className="py-10 h-auto">
                <div className="m-5 w-fit mx-auto">
                    <h2 className="text-2xl md:text-5xl font-bold tracking-tight text-accent font-inter">
                        Exclusive Bundles
                    </h2>
                    <img
                        src={require(`../../image/Home/section7/line.png`)}
                        className="-mx-8 w-28 md:w-[176.83px] h-auto ml-auto"
                        alt=""
                    />
                </div>
                <p className="px-10 sm:px-14 max-w-3xl text-md md:text-[22px] mx-auto text-center text-[#696984]">
                    Onlearing is one powerful online software suite that combines all the tools needed to run a successful school or office.
                </p>

                <div className="relative mx-auto overflow-visible -ml-[50%] -mr-[50%] w-[200%] py-10">
                    <Swiper
                        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                        spaceBetween={-200}
                        centeredSlides={true}
                        navigation
                        pagination={{ clickable: true }}
                        autoplay={{ delay: 1000 }}
                        className="my-swiper"
                        breakpoints={{
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: -180,
                            },

                            0: {
                                slidesPerView: 1,
                                spaceBetween: 0,
                            },
                        }}
                    >
                        <SwiperSlide className="swiper-slide-custom">
                            <div className="mx-auto mt-10 mb-20 px-10 sm:px-14 md:px-0 w-1/2 md:w-[600px] xl:w-[820px] h-auto mdh-[250px] xl:h-[302px]">
                                <div className='rounded-[14px] shadow-2xl shadow-[#00000015] flex flex-col sm:flex-row'>
                                    <div className="relative w-full">
                                        <img
                                            src={require('../../image/Home/section7/cover4.png')}
                                            className="w-full sm:w-auto h-auto sm:h-full rounded-t-[14px] sm:rounded-tr-none sm:rounded-s-[14px] object-cover"
                                            alt="Course Cover"
                                        />
                                        <div className="absolute bottom-5 right-3 h-10 bg-white flex items-center gap-1 rounded-full p-2 shadow-md">
                                            <div className="font-inter p-2">
                                                <span className="text-[#FD661F] text-xl xl:text-2xl font-bold">$ 380</span>
                                                <span className="ml-2 line-through text-[#230F0F] text-lg xl:text-xl font-extralight">$ 500</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-5 xl:p-8 flex-grow max-w-1/2 xl:max-w-[400px]">
                                        <p className="text-[14px] text-[#777795]">1 - 28 July 2022</p>
                                        <h3 className="mt-3 text-lg xl:text-[22px] font-extrabold leading-6 text-accent">
                                            Product Management Basic - Course
                                        </h3>
                                        <p className="mt-3 line-clamp-3 text-xs xl:text-[14px] leading-6 text-gray-600">
                                            Product Management Masterclass, you will learn with Sarah Johnson - Head of Product Customer Platform Gojek Indonesia.
                                        </p>
                                        <div className="flex justify-center items-center p-5 mt-auto gap-2">
                                            <img
                                                src={require('../../image/Home/section2/student.png')}
                                                className="max-w-[152.92px] h-auto"
                                                alt="Student Avatars"
                                            />
                                            <span className="text-lg xl:text-[22px] font-inter">+</span>
                                            <span className="text-lg xl:text-xl">11 students</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide-custom">
                            <div className="mx-auto mt-10 mb-20 px-10 sm:px-14 md:px-0 w-1/2 md:w-[600px] xl:w-[820px] h-auto mdh-[250px] xl:h-[302px]">
                                <div className='rounded-[14px] shadow-2xl shadow-[#00000015] flex flex-col sm:flex-row'>
                                    <div className="relative w-full">
                                        <img
                                            src={require('../../image/Home/section7/cover4.png')}
                                            className="w-full sm:w-auto h-auto sm:h-full rounded-t-[14px] sm:rounded-tr-none sm:rounded-s-[14px] object-cover"
                                            alt="Course Cover"
                                        />
                                        <div className="absolute bottom-5 right-3 h-10 bg-white flex items-center gap-1 rounded-full p-2 shadow-md">
                                            <div className="font-inter p-2">
                                                <span className="text-[#FD661F] text-xl xl:text-2xl font-bold">$ 380</span>
                                                <span className="ml-2 line-through text-[#230F0F] text-lg xl:text-xl font-extralight">$ 500</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-5 xl:p-8 flex-grow max-w-1/2 xl:max-w-[400px]">
                                        <p className="text-[14px] text-[#777795]">1 - 28 July 2022</p>
                                        <h3 className="mt-3 text-lg xl:text-[22px] font-extrabold leading-6 text-accent">
                                            Product Management Basic - Course
                                        </h3>
                                        <p className="mt-3 line-clamp-3 text-xs xl:text-[14px] leading-6 text-gray-600">
                                            Product Management Masterclass, you will learn with Sarah Johnson - Head of Product Customer Platform Gojek Indonesia.
                                        </p>
                                        <div className="flex justify-center items-center p-5 mt-auto gap-2">
                                            <img
                                                src={require('../../image/Home/section2/student.png')}
                                                className="max-w-[152.92px] h-auto"
                                                alt="Student Avatars"
                                            />
                                            <span className="text-lg xl:text-[22px] font-inter">+</span>
                                            <span className="text-lg xl:text-xl">11 students</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide-custom">
                            <div className="mx-auto mt-10 mb-20 px-10 sm:px-14 md:px-0 w-1/2 md:w-[600px] xl:w-[820px] h-auto mdh-[250px] xl:h-[302px]">
                                <div className='rounded-[14px] shadow-2xl shadow-[#00000015] flex flex-col sm:flex-row'>
                                    <div className="relative w-full">
                                        <img
                                            src={require('../../image/Home/section7/cover4.png')}
                                            className="w-full sm:w-auto h-auto sm:h-full rounded-t-[14px] sm:rounded-tr-none sm:rounded-s-[14px] object-cover"
                                            alt="Course Cover"
                                        />
                                        <div className="absolute bottom-5 right-3 h-10 bg-white flex items-center gap-1 rounded-full p-2 shadow-md">
                                            <div className="font-inter p-2">
                                                <span className="text-[#FD661F] text-xl xl:text-2xl font-bold">$ 380</span>
                                                <span className="ml-2 line-through text-[#230F0F] text-lg xl:text-xl font-extralight">$ 500</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-5 xl:p-8 flex-grow max-w-1/2 xl:max-w-[400px]">
                                        <p className="text-[14px] text-[#777795]">1 - 28 July 2022</p>
                                        <h3 className="mt-3 text-lg xl:text-[22px] font-extrabold leading-6 text-accent">
                                            Product Management Basic - Course
                                        </h3>
                                        <p className="mt-3 line-clamp-3 text-xs xl:text-[14px] leading-6 text-gray-600">
                                            Product Management Masterclass, you will learn with Sarah Johnson - Head of Product Customer Platform Gojek Indonesia.
                                        </p>
                                        <div className="flex justify-center items-center p-5 mt-auto gap-2">
                                            <img
                                                src={require('../../image/Home/section2/student.png')}
                                                className="max-w-[152.92px] h-auto"
                                                alt="Student Avatars"
                                            />
                                            <span className="text-lg xl:text-[22px] font-inter">+</span>
                                            <span className="text-lg xl:text-xl">11 students</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    );
};