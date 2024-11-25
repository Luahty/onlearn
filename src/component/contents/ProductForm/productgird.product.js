import React from "react";
import ProductCard from "./productcard.product";
import '../Css/product.css'; 

const products = [
    {
        id: 1,
        name: "Cappuccino",
        price: "$8",
        image: "https://storage.googleapis.com/a1aa/image/qRtx2ffr7dpilkcM2jUxGCT0eClfYe9BmpuJJz4ZJfxEutB9E.jpg",
        bakery: "Minden Bakery",
        bakeryLogo: "https://storage.googleapis.com/a1aa/image/6HcGfnNMTARrDCDujjUwkV4Wk5LC1ftCaQYXkfMmIsUstNonA.jpg",
      },
      {
        id: 2,
        name: "Matcha Latte",
        price: "$10",
        image: "https://storage.googleapis.com/a1aa/image/61f05UtEekk9eoGkAI6GYEiODBhGeVSZ4Sz3y1EQVLm8bbQPB.jpg",
        bakery: "Minden Bakery",
        bakeryLogo: "https://storage.googleapis.com/a1aa/image/6HcGfnNMTARrDCDujjUwkV4Wk5LC1ftCaQYXkfMmIsUstNonA.jpg",
      },
      {
        id: 3,
        name: "Golden Latte",
        price: "$8",
        image: "https://storage.googleapis.com/a1aa/image/ZgdqC7IrcqbkGJ1gWgh8jPHz8ZCNiMSTA5jzld0TOPDttB9E.jpg",
        bakery: "Minden Bakery",
        bakeryLogo: "https://storage.googleapis.com/a1aa/image/6HcGfnNMTARrDCDujjUwkV4Wk5LC1ftCaQYXkfMmIsUstNonA.jpg",
      },
      {
        id: 4,
        name: "Hot Chocolate",
        price: "$12",
        image: "https://storage.googleapis.com/a1aa/image/fCO8ZdtWUQWVS6dlq3nLdedK4lHRxfpzMgMNnfX4EfyP32geE.jpg",
        bakery: "Minden Bakery",
        bakeryLogo: "https://storage.googleapis.com/a1aa/image/6HcGfnNMTARrDCDujjUwkV4Wk5LC1ftCaQYXkfMmIsUstNonA.jpg",
      },
      {
        id: 5,
        name: "Iced Latte",
        price: "$12",
        image: "https://storage.googleapis.com/a1aa/image/lcpGeac2H7WtFa4QLwFas6af0RhJyhOyVKL4T8bewjH5tNonA.jpg",
        bakery: "Minden Bakery",
        bakeryLogo: "https://storage.googleapis.com/a1aa/image/6HcGfnNMTARrDCDujjUwkV4Wk5LC1ftCaQYXkfMmIsUstNonA.jpg",
      },
      {
        id: 6,
        name: "Plain Croissant",
        price: "$20 / Box (8 pieces)",
        image: "https://storage.googleapis.com/a1aa/image/hrygFdxQToLpPddJ1nn2yz6LgaqnZ4BeubFq375V46JgbD6JA.jpg",
        bakery: "Minden Bakery",
        bakeryLogo: "https://storage.googleapis.com/a1aa/image/6HcGfnNMTARrDCDujjUwkV4Wk5LC1ftCaQYXkfMmIsUstNonA.jpg",
      },
      {
        id: 7,
        name: "French Macaron",
        price: "$30 / Box (12 pieces)",
        image: "https://storage.googleapis.com/a1aa/image/7esdAxweQ6ge1oyGy8dGBdQgXfIsZjRlCLVjHf0dHfesbbD6JA.jpg",
        bakery: "Minden Bakery",
        bakeryLogo: "https://storage.googleapis.com/a1aa/image/6HcGfnNMTARrDCDujjUwkV4Wk5LC1ftCaQYXkfMmIsUstNonA.jpg",
      },
      {
        id: 8,
        name: "Original Blend Coffee",
        price: "$12.99 / Pack",
        image: "https://storage.googleapis.com/a1aa/image/BeAjJ1Dr7R3YT6OUwrzfMTJuliQ9gpTdSazgnXSYvq292G0TA.jpg",
        bakery: "Minden Bakery",
        bakeryLogo: "https://storage.googleapis.com/a1aa/image/6HcGfnNMTARrDCDujjUwkV4Wk5LC1ftCaQYXkfMmIsUstNonA.jpg",
      },
  // Add other products here...
];

const ProductGrid = () => {
  return (
    <div className="products">
      <div className="controls">
        <span>Show all products ({products.length})</span>
        <span className="center-text">Show image only</span>
        <select>
          <option>Bestselling</option>
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
