import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // For navigation

export default function Section2() {
    const [products, setProducts] = useState([]); // Dữ liệu sản phẩm từ API
    const [loading, setLoading] = useState(true); // Trạng thái tải dữ liệu
    const [error, setError] = useState(null); // Lưu lỗi nếu có
    // Gọi API khi component được render
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:5000/api/topics"); // Địa chỉ API
                setProducts(response.data); // Ghi dữ liệu từ API vào state
                setLoading(false); // Dừng trạng thái tải
            } catch (err) {
                console.error("Error fetching data:", err);
                setError("Không thể tải dữ liệu, vui lòng thử lại sau.");
                setLoading(false); // Dừng trạng thái tải
            }
        };

        fetchData();
    }, []);

    return (
        <div className="bg-white">
            <div className="my-10 md:my-25 xl:mx-20 mx-10 h-auto px-4 sm:px-6 lg:px-8">
                <div className="m-5 w-fit mx-auto">
                    <h2 className="text-2xl md:text-5xl font-bold tracking-tight text-[#FD661F] font-inter">Popular Courses</h2>
                    <img src={require(`../../image/Home/section2/line.png`)} className="-mx-8 w-28 md:w-[176.83px] h-auto ml-auto" alt="" />
                </div>
              
                <div className="mx-auto mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    {products.slice(0, 4).map((product) => (
                        <a href={`/exercises/${product.topic_id}`}
                            className="mx-auto rounded-[14px] shadow-2xl shadow-[#00000015] flex flex-col">
                            <div className="relative">
                                <img
                                    src={require(`../../image/Home/section2/cover1.png`)}
                                    className="w-full h-auto rounded-t-[14px]"
                                    alt="Course Cover"
                                />
                                <div className="absolute -bottom-7 left-1/2 transform -translate-x-1/2 w-[225px] h-10 bg-white flex items-center gap-1 rounded-full p-2 shadow-md">
                                    <img
                                        src={require(`../../image/Home/section2/student.png`)}
                                        className="w-[108px] h-auto"
                                        alt="Student Icon"
                                    />
                                    <span className="text-sm font-inter">+</span>
                                    <span className="text-sm">40 students</span>
                                </div>
                            </div>
                            <div className="px-5 pt-10 flex-grow">
                                <p className="text-[10px] text-[#777795]">{new Date(product.created_at).toLocaleDateString('vi-VN')}</p>
                                <h3 className="mt-3 text-base font-extrabold leading-6 text-accent">
                                    {product.name}
                                </h3>
                                <p className="mt-3 line-clamp-3 text-[10px] leading-6 text-gray-600">
                                    {product.description}
                                </p>
                            </div>
                            <div className="flex justify-between items-center p-5 mt-auto">
                                <div className="font-inter">
                                    <span className="text-[#FD661F] text-base font-bold">$ Free</span>
                                    <span className="ml-2 line-through text-[#230F0F] text-sm font-extralight">$ 500</span>
                                </div>
                                <a
                                    href={`/exercises/${product.topic_id}`}
                                    className="text-xs rounded-md bg-accent px-4 py-3 hover:text-white shadow-sm hover:bg-[#075156]"
                                >
                                    Enroll Now
                                </a>
                            </div>
                        </a>
                    ))}


                </div>
            </div>
        </div>
    )
}
