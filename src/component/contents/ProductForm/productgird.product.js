import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "./productcard.product";
import "../Css/product.css";

const ProductGrid = () => {
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

    // Xử lý khi tải hoặc có lỗi
    if (loading) return <div className="loading">Đang tải dữ liệu...</div>;
    if (error) return <div className="error text-red-500">{error}</div>;

    return (
        <div className="products">
            <div className="controls">
                <span>Hiển thị tất cả sản phẩm ({products.length})</span>
                <span className="center-text">Hiển thị chỉ hình ảnh</span>
                <select>
                    <option>Bán chạy nhất</option>
                </select>
            </div>
            <div className="grid">
                {products.map((product, index) => (
                    <ProductCard key={index} product={product} />
                ))}
            </div>
        </div>
    );
};

export default ProductGrid;
