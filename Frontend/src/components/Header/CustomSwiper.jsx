import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import arrowRight from "../../assets/icons/arrow-right-5.svg";
import arrowLeft from "../../assets/icons/arrow-left-3.svg";

export default function CustomSwiper() {
  const swiperRef = useRef();

  return (
    <div className="relative my-6 py-5">
      {/* Custom Navigation Buttons (top-right) */}
      <div className="absolute -top-5 right-0 z-10 flex gap-5 p-2 bg-white">
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
        }}
      >
        {/* Slides */}
        <SwiperSlide>
          <div>
            <img
              src={
                "https://image.hm.com/content/dam/global_campaigns/season_01/women/2nd-level-navigation-assets/wk17/ButterYellowHomewear-NavCar-Wk17-19.jpg?imwidth=396"
              }
              alt="butter yellow"
              className="w-full"
            />
            <p className="text-sm font-helvetica-thin mt-2 px-2 text-center">
              BUTTER YELLOW
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img
              src={
                "https://image.hm.com/content/dam/global_campaigns/season_01/women/2nd-level-navigation-assets/wk15-16/Shop-by-occasion-NavCar-wk15-16-2x3.jpg?imwidth=396"
              }
              alt="summer party edit"
              className="w-full"
            />
            <p className="text-sm font-helvetica-thin mt-2 px-2 text-center">
              SUMMER PARTY EDIT
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img
              src={
                "https://image.hm.com/content/dam/global_campaigns/season_01/women/2nd-level-navigation-assets/wk17/Lingerie-NavCar-Wk17-19.jpg?imwidth=396"
              }
              alt="lingerie"
              className="w-full"
            />
            <p className="text-sm font-helvetica-thin mt-2 px-2 text-center">
              LINGERIE
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img
              src={
                "https://image.hm.com/content/dam/global_campaigns/season_01/women/2nd-level-navigation-assets/wk17/Strawhats-NavCar-Wk17-19.jpg?imwidth=396"
              }
              alt="accessories"
              className="w-full"
            />
            <p className="text-sm font-helvetica-thin mt-2 px-2 text-center">
              ACCESSORIES
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
