import { useEffect, useRef, useState } from "react";
import heartCircle from "../assets/icons/heart-circle.svg";
import hoverHeartCircle from "../assets/icons/red-heart.svg";
import activeHeartCircle from "../assets/icons/red-heart-active.svg";
import ReviewSidebar from "../components/Product/ReviewSidebar";
import SimilarItems from "../components/Product/SimilarItems";
import CategoryTab from "../components/Product/CategoryTab";

const ProductDetails = () => {
  const [showDescription, setShowDescription] = useState(false);
  const [showDelivery, setShowDelivery] = useState(false);
  const [reviewState, setReviewState] = useState(false);
  const [isSticky, setIsSticky] = useState(true);
  const addToCartRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Check if the element is NOT intersecting AND its top edge is above the viewport (scrolled up)
        // If both conditions are true, set isSticky to true.
        // Otherwise (if it's intersecting, or if it scrolled downwards out of view), set isSticky to false.
        setIsSticky(!entry.isIntersecting && entry.boundingClientRect.top > 0);
      },
      {
        root: null, // The viewport is the observing root
        threshold: 0, // Trigger when 0% of the target is visible
      }
    );

    // Observe the original Add to Cart button's container
    if (addToCartRef.current) {
      observer.observe(addToCartRef.current);
    }

    return () => {
      if (addToCartRef.current) {
        observer.unobserve(addToCartRef.current);
      }
    };
  }, []);

  return (
    <>
      {" "}
      <div className="flex font-helvetica-medium  tracking-wider text-[15px] pb-20  flex-col md:flex-row gap-4 md:gap-10 lg:gap-24 xl:gap-32 2xl:gap-44 md:pe-10 lg:pe-24 xl:pe-32 2xl:pe-44 xl:w-[75%] mx-auto ">
        {/* Left: Image */}
        <div className="w-full md:w-1/2 relative">
          <img
            src="https://image.hm.com/assets/hm/84/20/8420d79923ece8662198fa83ed837adf9545d574.jpg?imwidth=1260"
            alt="Product"
            className="w-full"
          />
          <div className="absolute top-2 right-2 z-10">
            <button className="md:hidden group">
              <img
                src={heartCircle}
                alt="wishlist"
                className="group-active:hidden w-8 h-8"
              />
              <img
                src={activeHeartCircle}
                alt="wishlist"
                className="hidden group-active:block w-8 h-8"
              />
            </button>
          </div>
        </div>

        {/* Right: Product Info */}
        <div className="w-full px-5 md:px-0 md:w-1/2 xl:pt-10 flex flex-col gap-2">
          <div className="flex justify-between items-center">
            {" "}
            <div className=" bg-black text-white font-medium font-helvetica-medium py-1 px-2 w-fit">
              -25%
            </div>
            <button className="hidden md:block  ">
              <button className="group">
                <img
                  src={heartCircle}
                  alt="wishlist"
                  className="group-hover:hidden w-8 h-8"
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
            </button>
          </div>

          <h1 className="tracking-wider text-lg  uppercase">
            Regular Fit Shimmering T-Shirt
          </h1>

          <div className="flex items-center gap-2 tracking-wider">
            <span className="text-[#B7000D] text-lg  font-helvetica-medium  tracking-medium ">
              Rs. 1,129.00
            </span>
            <span className="line-through text-[17px] text-black font-helvetica-regular font-normal">
              Rs. 1,499.00
            </span>
          </div>
          <p className="font-helvetica-thin font-bold  tracking-wider">
            MRP inclusive of all taxes
          </p>

          <div className=" tracking-wider mt-4">COLOUR: Brown</div>

          <div className=" mt-4">SELECT SIZE</div>
          <div className="flex flex-wrap gap-4">
            {["S", "M", "L", "XL"].map((size) => (
              <button
                key={size}
                className="bg-black text-white  hover:font-helvetica-bold  w-16 md:w-18 2xl:w-20 h-14  py-3 px-3  hover:bg-[#F4ECD7] hover:text-black"
              >
                {size}
              </button>
            ))}
          </div>

          <div className="flex justify-end">
            <a href="#" className=" hover:text-gray-500 underline mt-1">
              SIZE GUIDE
            </a>
          </div>

          {/* Add to Bag Button */}
          <div ref={addToCartRef} className=""></div>
          <div
            className={`${
              isSticky ? "fixed bottom-0 left-0 right-0 bg-white " : "static"
            }  bg-black text-white hover:bg-[#F4ECD7] hover:text-black hover:font-helvetica-bold  text-center py-4 px-5 z-40`}
            style={
              isSticky ? { boxShadow: "0 -4px 12px rgba(0, 0, 0, 0.15)" } : {}
            }
          >
            <button
              className={`${
                isSticky ? "bg-black  w-full py-4 shadow-2xl " : "w-full"
              }`}
            >
              ADD TO CART
            </button>
          </div>

          {/* Hidden footer trigger */}

          <div className="flex items-center justify-between gap-2 mt-4">
            <div
              className=" underline cursor-pointer"
              onClick={() => setReviewState(true)}
            >
              REVIEWS [13]
            </div>
            <div className="flex items-end gap-2">
              <div className="flex gap-1  text-xl">★★★★☆</div>
              <div className="">4.8</div>
            </div>
          </div>

          {/* Description & Fit Toggle */}
          <div
            className={`mt-4   ${
              showDescription && "font-helvetica-bold"
            }  pt-2 cursor-pointer flex justify-between items-center`}
            onClick={() => setShowDescription(!showDescription)}
          >
            DESCRIPTION & FIT{" "}
            <span className="text-xl">{showDescription ? "−" : "+"}</span>
          </div>

          {/* Toggle Content */}
          {showDescription && (
            <div className="mt-2 tracking-wide  leading-relaxed space-y-2">
              <p>
                T-shirt in sheer jersey containing shimmering, metallic threads.
                Round, rib-trimmed neckline and a straight-cut hem. Regular fit
                for comfortable wear and a classic silhouette.
              </p>

              <p>
                <span className="font-helvetica-bold">Model size:</span> The
                model is 186cm/6'1" and wears a size M
              </p>
              <p>
                <span className="font-helvetica-bold">Size:</span>
              </p>
              <ul className="list-disc list-inside">
                <li>S: Width: 1.02 m, Length: 67 cm</li>
                <li>M: Width: 1.10 m, Length: 68 cm</li>
                <li>L: Width: 1.18 m, Length: 70 cm</li>
                <li>XL: Width: 1.26 m, Length: 71 cm</li>
              </ul>
              <p>
                <span className="font-helvetica-bold">Length:</span> Regular
                length
              </p>
              <p>
                <span className="font-helvetica-bold">Sleeve Length:</span>{" "}
                Short sleeve
              </p>
              <p>
                <span className="font-helvetica-bold">Fit:</span> Regular fit
              </p>
              <p>
                <span className="font-helvetica-bold">Neckline:</span> Round
                neck
              </p>
              <p>
                <span className="font-helvetica-bold">Description:</span> Brown,
                Solid colour
              </p>
              <p>
                <span className="font-helvetica-bold">Price (MRP):</span> Rs.
                1,499.00 incl. of all taxes
              </p>
            </div>
          )}

          <div className="mb-10 ">
            {/* Delivery & Payment Toggle */}
            <div
              className={`${
                showDelivery && "font-helvetica-bold"
              } pt-2 cursor-pointer flex justify-between items-center`}
              onClick={() => setShowDelivery(!showDelivery)}
            >
              DELIVERY & PAYMENT{" "}
              <span className="text-xl">{showDelivery ? "−" : "+"}</span>
            </div>

            {/* Toggle Content */}
            {showDelivery && (
              <div className="mt-2 tracking-wide  leading-relaxed space-y-2">
                <p>Delivery Time : 7-8 days</p>

                <p>
                  Due to additional health and safety measures to protect our
                  logistics teams, your delivery may take a little longer.
                  Please note, that we might not be able to deliver to all
                  areas. You will be notified about the same during checkout. We
                  deliver all days, except bank holidays.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
      <SimilarItems />
      <CategoryTab />
      <ReviewSidebar
        reviewState={reviewState}
        setReviewState={setReviewState}
      />
    </>
  );
};

export default ProductDetails;
