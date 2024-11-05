// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/effect-fade';
// import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

// const Section7 = () => {
//     return (
//         <div className="bg-white">
//             <div className="my-10 md:my-25 h-auto">
//                 <div className="m-5 w-fit mx-auto">
//                     <h2 className="text-2xl md:text-5xl font-bold tracking-tight text-accent font-inter">Exclusive Bundles</h2>
//                     <img src={require(`../../image/Home/section7/line.png`)} className="-mx-8 w-28 md:w-[176.83px] h-auto ml-auto" alt="" />
//                 </div>
//                 <p className="max-w-3xl text-md md:text-[22px] mx-auto text-center text-[#696984]">Onlearing is one powerful online software suite that combines all the tools needed to run a successful school or office.</p>

//                 <div className="grid-lay out">

//                     <Swiper
//                         // install Swiper modules
//                         modules={[Navigation, Pagination, Scrollbar, A11y]}
//                         spaceBetween={50}
//                         slidesPerView={3}
//                         navigation
//                         pagination={{ clickable: true }}
//                         scrollbar={{ draggable: true }}
//                         onSwiper={(swiper) => console.log(swiper)}
//                         onSlideChange={() => console.log('slide change')}
//                     >
//                         <SwiperSlide>
//                             <div className="scroll-sn ap-center w-[820px] h-[302px] rounded-[14px] shadow-2xl shadow-[#00000015] flex flex-row">
//                                 <div className="relative w-[350px]">
//                                     <img
//                                         src={require('../../image/Home/section7/image.png')}
//                                         className="w-auto h-full rounded-s-[14px]"
//                                         alt="Course Cover"
//                                     />
//                                     <div className="absolute bottom-5 right-3 w-[158.15px] h-10 bg-white flex items-center gap-1 rounded-full p-2 shadow-md">
//                                         <div className="font-inter">
//                                             <span className="text-[#FD661F] text-2xl font-bold">$ 380</span>
//                                             <span className="ml-2 line-through text-[#230F0F] text-xl font-extralight">$ 500</span>
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <div className="p-8 flex-grow max-w-[400px]">
//                                     <p className="text-[14px] text-[#777795]">1 - 28 July 2022</p>
//                                     <h3 className="mt-3 text-[22px] font-extrabold leading-6 text-accent">
//                                         Product Management Basic - Course
//                                     </h3>
//                                     <p className="mt-3 line-clamp-3 text-[14px] leading-6 text-gray-600">
//                                         Product Management Masterclass, you will learn with Sarah Johnson - Head of Product Customer Platform Gojek Indonesia.
//                                     </p>
//                                     <div className="flex justify-center items-center p-5 mt-auto gap-2">
//                                         <img
//                                             src={require('../../image/Home/section2/student.png')}
//                                             className="w-[152.92px] h-auto"
//                                             alt="Student Avatars"
//                                         />
//                                         <span className="text-[22px] font-inter">+</span>
//                                         <span className="text-xl">11 students</span>
//                                     </div>
//                                 </div>
//                             </div>
//                         </SwiperSlide>

//                         <SwiperSlide>
//                             <div className="scroll-sn ap-center w-[820px] h-[302px] rounded-[14px] shadow-2xl shadow-[#00000015] flex flex-row">
//                                 <div className="relative w-[350px]">
//                                     <img
//                                         src={require('../../image/Home/section7/image.png')}
//                                         className="w-auto h-full rounded-s-[14px]"
//                                         alt="Course Cover"
//                                     />
//                                     <div className="absolute bottom-5 right-3 w-[158.15px] h-10 bg-white flex items-center gap-1 rounded-full p-2 shadow-md">
//                                         <div className="font-inter">
//                                             <span className="text-[#FD661F] text-2xl font-bold">$ 380</span>
//                                             <span className="ml-2 line-through text-[#230F0F] text-xl font-extralight">$ 500</span>
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <div className="p-8 flex-grow max-w-[400px]">
//                                     <p className="text-[14px] text-[#777795]">1 - 28 July 2022</p>
//                                     <h3 className="mt-3 text-[22px] font-extrabold leading-6 text-accent">
//                                         Product Management Basic - Course
//                                     </h3>
//                                     <p className="mt-3 line-clamp-3 text-[14px] leading-6 text-gray-600">
//                                         Product Management Masterclass, you will learn with Sarah Johnson - Head of Product Customer Platform Gojek Indonesia.
//                                     </p>
//                                     <div className="flex justify-center items-center p-5 mt-auto gap-2">
//                                         <img
//                                             src={require('../../image/Home/section2/student.png')}
//                                             className="w-[152.92px] h-auto"
//                                             alt="Student Avatars"
//                                         />
//                                         <span className="text-[22px] font-inter">+</span>
//                                         <span className="text-xl">11 students</span>
//                                     </div>
//                                 </div>
//                             </div>
//                         </SwiperSlide>

//                         <SwiperSlide>
//                             <div className="scroll-sn ap-center w-[820px] h-[302px] rounded-[14px] shadow-2xl shadow-[#00000015] flex flex-row">
//                                 <div className="relative w-[350px]">
//                                     <img
//                                         src={require('../../image/Home/section7/image.png')}
//                                         className="w-auto h-full rounded-s-[14px]"
//                                         alt="Course Cover"
//                                     />
//                                     <div className="absolute bottom-5 right-3 w-[158.15px] h-10 bg-white flex items-center gap-1 rounded-full p-2 shadow-md">
//                                         <div className="font-inter">
//                                             <span className="text-[#FD661F] text-2xl font-bold">$ 380</span>
//                                             <span className="ml-2 line-through text-[#230F0F] text-xl font-extralight">$ 500</span>
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <div className="p-8 flex-grow max-w-[400px]">
//                                     <p className="text-[14px] text-[#777795]">1 - 28 July 2022</p>
//                                     <h3 className="mt-3 text-[22px] font-extrabold leading-6 text-accent">
//                                         Product Management Basic - Course
//                                     </h3>
//                                     <p className="mt-3 line-clamp-3 text-[14px] leading-6 text-gray-600">
//                                         Product Management Masterclass, you will learn with Sarah Johnson - Head of Product Customer Platform Gojek Indonesia.
//                                     </p>
//                                     <div className="flex justify-center items-center p-5 mt-auto gap-2">
//                                         <img
//                                             src={require('../../image/Home/section2/student.png')}
//                                             className="w-[152.92px] h-auto"
//                                             alt="Student Avatars"
//                                         />
//                                         <span className="text-[22px] font-inter">+</span>
//                                         <span className="text-xl">11 students</span>
//                                     </div>
//                                 </div>
//                             </div>
//                         </SwiperSlide>

//                     </Swiper>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Section7;