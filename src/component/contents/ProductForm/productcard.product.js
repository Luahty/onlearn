import React from "react";
import "../Css/product.css";

const ProductCard = ({ product }) => {
    return (
        <div className="product-card border p-4 rounded shadow">
            <img src={product.topic_avatar} alt={product.name} className="w-full h-40 object-cover rounded mb-2" />
            <h2 className="text-xl font-bold">{product.name}</h2>
            <p className="text-gray-600">{product.level}</p>
        </div>
    );
};

export default ProductCard;
