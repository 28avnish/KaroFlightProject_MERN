import React from "react";
import heartCircle from "../../assets/icons/heart-circle.svg";
import hoverHeartCircle from "../../assets/icons/red-heart.svg";
import activeHeartCircle from "../../assets/icons/red-heart-active.svg";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <Link
      to={"/productDetails"}
      className="relative  w-full font-helvetica-medium "
    >
      {/* Wishlist Icon */}
      <div className="absolute top-2 right-2 z-10">
        <button
          className="group"
          onClick={(e) => {
            e.preventDefault();
          }}
        >
          <img
            src={heartCircle}
            alt="wishlist"
            className="group-hover:hidden group-active:hidden w-8 h-8"
          />
          <img
            src={hoverHeartCircle}
            alt="wishlist"
            className="hidden group-hover:block group-active:hidden w-8 h-8"
          />
          <img
            src={activeHeartCircle}
            alt="wishlist"
            className="hidden group-active:block w-8 h-8"
          />
        </button>
      </div>

      {/* Product Image */}
      <img
        src={product.image}
        alt={product.title}
        className="w-full object-cover"
      />

      {/* Discount Tag */}
      {product.discount > 0 && (
        <div className="absolute font-medium top-0 left-0 bg-black text-white text-sm sm:text-base  px-1 sm:px-2 ">
          -{product.discount}%
        </div>
      )}

      {/* Product Info */}
      <div className="mt-2 px-3 sm:pl-5 ">
        <p className="text-sm sm:text-[15px] uppercase text-black tracking-wider line-clamp-2">
          {product.title}
        </p>

        {product.discount ? (
          <div className="">
            <span className="text-[#B7000D] text-sm sm:text-base  font-helvetica-medium  tracking-normal mr-1 sm:mr-2">
              Rs.{Number(product.newPrice).toLocaleString()}.00
            </span>
            <span className="line-through text-sm sm:text-[15px] text-black font-helvetica-regular font-normal">
              Rs.{Number(product.oldPrice).toLocaleString()}.00
            </span>
          </div>
        ) : (
          <p className=" font-helvetica-medium text-sm sm:text-base  tracking-normal">
            Rs.{Number(product.newPrice).toLocaleString()}.00
          </p>
        )}
      </div>
    </Link>
  );
};

export default ProductCard;
