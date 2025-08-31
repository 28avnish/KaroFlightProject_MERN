import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import arrowRight from "../../assets/icons/arrow-right-5.svg";
import arrowLeft from "../../assets/icons/arrow-left-3.svg";
import heartCircle from "../../assets/icons/heart-circle.svg";
import hoverHeartCircle from "../../assets/icons/red-heart.svg";
import activeHeartCircle from "../../assets/icons/red-heart-active.svg";

export default function SimilarItems() {
  const swiperRef = useRef();

  return (
    <div className="relative my-6 py-5">
      {/* Custom Navigation Buttons (top-right) */}

      <div className="absolute font-helvetica-medium  tracking-wider text-[15px] -top-5 z-10 flex justify-between w-full px-5 py-3 bg-white">
        {" "}
        <div> SIMILAR ITEMS</div>
        <div className="flex gap-5">
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="w-6 h-6 flex items-center justify-center rounded-full hover:bg-gray-100"
          >
            <img src={arrowLeft} className="h-6 w-6 mr-2" alt="arrowLeft" />
          </button>
          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="w-6 h-6 flex items-center justify-center rounded-full hover:bg-gray-100"
          >
            <img src={arrowRight} className="h-6 w-6 mr-2" alt="arrowRight" />
          </button>
        </div>
      </div>

      {/* Swiper Slider */}
      <Swiper
        modules={[Navigation]}
        spaceBetween={0}
        slidesPerView={2.5}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        className=""
        breakpoints={{
          640: {
            slidesPerView: 2.5,
          },
          768: {
            slidesPerView: 3.5,
          },
          1280: {
            slidesPerView: 4.5,
          },
        }}
      >
        {/* Slides */}

        <SwiperSlide>
          <div className="relative">
            {/* Wishlist Icon */}
            <div className="absolute top-4 right-2 z-10">
              <button
                className="group"
                onClick={(e) => {
                  e.preventDefault();
                }}
              >
                <img
                  src={heartCircle}
                  alt="wishlist"
                  className="group-hover:hidden group-active:hidden sm:w-8 sm:h-8"
                />
                <img
                  src={hoverHeartCircle}
                  alt="wishlist"
                  className="hidden group-hover:block group-active:hidden sm:w-8 sm:h-8"
                />
                <img
                  src={activeHeartCircle}
                  alt="wishlist"
                  className="hidden group-active:block sm:w-8 sm:h-8"
                />
              </button>
            </div>
            <img
              src={
                "https://image.hm.com/assets/hm/8f/46/8f46b4d64de4cae9e9dbb2831ba052eac1769c1d.jpg?imwidth=480"
              }
              alt="butter yellow"
              className="w-full"
            />
            <div className="absolute font-medium top-2 text-sm sm:text-base left-0 bg-black text-white  px-1 sm:px-2 ">
              -20%
            </div>
            {/* Product Info */}
            <div className="mt-2 px-2 sm:ml-5">
              <p className=" text-[15px] uppercase  font-helvetica-medium tracking-wide line-clamp-2">
                3-pack Regular Fit T-shirts
              </p>
              <div className="">
                <span className="text-[#C5000D] font-helvetica-  font-bold text-sm mr-2">
                  Rs.999.00
                </span>
                <span className="line-through text-sm text-black font-helvetica-light font-bold">
                  Rs.1,199.00
                </span>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <div className="absolute top-4 right-2 z-10">
              <button
                className="group"
                onClick={(e) => {
                  e.preventDefault();
                }}
              >
                <img
                  src={heartCircle}
                  alt="wishlist"
                  className="group-hover:hidden group-active:hidden sm:w-8 sm:h-8"
                />
                <img
                  src={hoverHeartCircle}
                  alt="wishlist"
                  className="hidden group-hover:block group-active:hidden sm:w-8 sm:h-8"
                />
                <img
                  src={activeHeartCircle}
                  alt="wishlist"
                  className="hidden group-active:block sm:w-8 sm:h-8"
                />
              </button>
            </div>
            <img
              src={
                "https://image.hm.com/assets/hm/95/b2/95b26c6ec290ad5eaf70e60d68865f85d88783b3.jpg?imwidth=480"
              }
              alt="summer party edit"
              className="w-full"
            />
            <div className="absolute font-medium top-2 text-sm sm:text-base left-0 bg-black text-white  px-1 sm:px-2 ">
              -20%
            </div>
            {/* Product Info */}
            <div className="mt-2 px-2 sm:ml-5">
              <p className=" text-[15px] uppercase  font-helvetica-medium tracking-wide line-clamp-2">
                3-pack Regular Fit T-shirts
              </p>
              <div className="">
                <span className="text-[#C5000D] font-helvetica-  font-bold text-sm mr-2">
                  Rs.999.00
                </span>
                <span className="line-through text-sm text-black font-helvetica-light font-bold">
                  Rs.1,199.00
                </span>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <div className="absolute top-4 right-2 z-10">
              <button
                className="group"
                onClick={(e) => {
                  e.preventDefault();
                }}
              >
                <img
                  src={heartCircle}
                  alt="wishlist"
                  className="group-hover:hidden group-active:hidden sm:w-8 sm:h-8"
                />
                <img
                  src={hoverHeartCircle}
                  alt="wishlist"
                  className="hidden group-hover:block group-active:hidden sm:w-8 sm:h-8"
                />
                <img
                  src={activeHeartCircle}
                  alt="wishlist"
                  className="hidden group-active:block sm:w-8 sm:h-8"
                />
              </button>
            </div>
            <img
              src={
                "https://image.hm.com/assets/hm/ba/f9/baf9ae5354aeeffd3123060ca22d59166d552c6e.jpg?imwidth=480"
              }
              alt="lingerie"
              className="w-full"
            />
            <div className="absolute font-medium top-2 text-sm sm:text-base left-0 bg-black text-white  px-1 sm:px-2 ">
              -20%
            </div>
            {/* Product Info */}
            <div className="mt-2 px-2 sm:ml-5">
              <p className=" text-[15px] uppercase  font-helvetica-medium tracking-wide line-clamp-2">
                3-pack Regular Fit T-shirts
              </p>
              <div className="">
                <span className="text-[#C5000D] font-helvetica-  font-bold text-sm mr-2">
                  Rs.999.00
                </span>
                <span className="line-through text-sm text-black font-helvetica-light font-bold">
                  Rs.1,199.00
                </span>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <div className="absolute top-4 right-2 z-10">
              <button
                className="group"
                onClick={(e) => {
                  e.preventDefault();
                }}
              >
                <img
                  src={heartCircle}
                  alt="wishlist"
                  className="group-hover:hidden group-active:hidden sm:w-8 sm:h-8"
                />
                <img
                  src={hoverHeartCircle}
                  alt="wishlist"
                  className="hidden group-hover:block group-active:hidden sm:w-8 sm:h-8"
                />
                <img
                  src={activeHeartCircle}
                  alt="wishlist"
                  className="hidden group-active:block sm:w-8 sm:h-8"
                />
              </button>
            </div>
            <img
              src={
                "https://image.hm.com/assets/hm/50/60/50606a3f49178bc02b46a6973c91d3828a84b604.jpg?imwidth=480"
              }
              alt="accessories"
              className="w-full"
            />
            <div className="absolute font-medium top-2 text-sm sm:text-base left-0 bg-black text-white  px-1 sm:px-2 ">
              -20%
            </div>
            {/* Product Info */}
            <div className="mt-2 px-2 sm:ml-5">
              <p className=" text-[15px] uppercase  font-helvetica-medium tracking-wide line-clamp-2">
                3-pack Regular Fit T-shirts
              </p>
              <div className="">
                <span className="text-[#C5000D] font-helvetica-  font-bold text-sm mr-2">
                  Rs.999.00
                </span>
                <span className="line-through text-sm text-black font-helvetica-light font-bold">
                  Rs.1,199.00
                </span>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <div className="absolute top-4 right-2 z-10">
              <button
                className="group"
                onClick={(e) => {
                  e.preventDefault();
                }}
              >
                <img
                  src={heartCircle}
                  alt="wishlist"
                  className="group-hover:hidden group-active:hidden sm:w-8 sm:h-8"
                />
                <img
                  src={hoverHeartCircle}
                  alt="wishlist"
                  className="hidden group-hover:block group-active:hidden sm:w-8 sm:h-8"
                />
                <img
                  src={activeHeartCircle}
                  alt="wishlist"
                  className="hidden group-active:block sm:w-8 sm:h-8"
                />
              </button>
            </div>
            <img
              src={
                "https://image.hm.com/assets/hm/af/e9/afe91c1d5bd8f132acdf6e436542e0fb057fd4d6.jpg?imwidth=207"
              }
              alt="accessories"
              className="w-full"
            />
            <div className="absolute font-medium top-2 text-sm sm:text-base left-0 bg-black text-white  px-1 sm:px-2 ">
              -20%
            </div>
            {/* Product Info */}
            <div className="mt-2 px-2 sm:ml-5">
              <p className=" text-[15px] uppercase  font-helvetica-medium tracking-wide line-clamp-2">
                3-pack Regular Fit T-shirts
              </p>
              <div className="">
                <span className="text-[#C5000D] font-helvetica-  font-bold text-sm mr-2">
                  Rs.999.00
                </span>
                <span className="line-through text-sm text-black font-helvetica-light font-bold">
                  Rs.1,199.00
                </span>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
