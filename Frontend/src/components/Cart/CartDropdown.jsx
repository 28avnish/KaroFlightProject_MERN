import React from "react";

const CartDropdown = () => {
  const cartItems = [
    {
      id: 1,
      title: "REGULAR FIT T-SHIRT",
      color: "Purple",
      size: "S",
      quantity: 1,
      oldPrice: "399.00",
      newPrice: "299.00",
      image:
        "https://image.hm.com/assets/hm/20/fa/20faf5a88c83cad69cd50b45d69c4e9284f433a4.jpg?imwidth=264",
    },
    {
      id: 2,
      title: "SLIM FIT COTTON SHIRT",
      color: "White",
      size: "M",
      quantity: 2,
      oldPrice: "1299.00",
      newPrice: "598.00",
      image:
        "https://image.hm.com/assets/hm/44/42/4442fbac4e3080ec20b2f14e353fea267249b0dd.jpg?imwidth=264",
    },
    {
      id: 3,
      title: "RELAXED FIT HOODIE",
      color: "Black",
      size: "L",
      quantity: 1,
      oldPrice: "1999.00",
      newPrice: "1029.00",
      image:
        "https://image.hm.com/assets/hm/27/37/27371510657af76474658acf192817bd8632ae8c.jpg?imwidth=264",
    },
    {
      id: 4,
      title: "RELAXED FIT HOODIE",
      color: "Black",
      size: "L",
      quantity: 1,
      oldPrice: "1999.00",
      newPrice: "1029.00",
      image:
        "https://image.hm.com/assets/hm/27/37/27371510657af76474658acf192817bd8632ae8c.jpg?imwidth=264",
    },
    {
      id: 5,
      title: "RELAXED FIT HOODIE",
      color: "Black",
      size: "L",
      quantity: 1,
      oldPrice: "1999.00",
      newPrice: "1029.00",
      image:
        "https://image.hm.com/assets/hm/27/37/27371510657af76474658acf192817bd8632ae8c.jpg?imwidth=264",
    },
  ];

  const subtotal = cartItems.reduce(
    (sum, item) => sum + Number(item.oldPrice),
    0
  );
  const discount = cartItems.reduce(
    (sum, item) => sum + Number(item.oldPrice - item.newPrice),
    0
  ); // or 0 if you want conditional logic

  return (
    <>
      <div className="absolute top-full right-0 w-[380px]   h-11 hidden group-hover:block  z-40"></div>
      <div className="absolute right-0 top-full mt-11 w-[380px] max-h-[700px] bg-white shadow-[0_0_10px_rgba(0,0,0,0.1)] z-50 hidden group-hover:block">
        {cartItems.length > 0 ? (
          <div className="h-full flex flex-col max-h-[700px]">
            {/* Scrollable Products Section */}
            <div className="overflow-y-auto px-4 pt-4 pb-2 flex-grow">
              {cartItems.map((item) => (
                <div key={item.id} className="flex gap-4 mb-4">
                  <img src={item.image} className="w-30 h-40 object-cover" />
                  <div className="text-sm text-left">
                    <p className="font-helvetica-medium text-gray-800 font-normal text-[15px] tracking-wider">
                      {item.title}
                    </p>
                    <div>
                      <span className="text-[#B7000D] font-helvetica-bold text-[15px] mr-2 tracking-normal">
                        Rs.{Number(item.newPrice).toLocaleString()}.00
                      </span>
                      <span className="line-through text-[15px] text-black font-helvetica-regular font-normal">
                        Rs.{Number(item.oldPrice).toLocaleString()}.00
                      </span>
                    </div>
                    <div className="grid text-black pt-3 grid-cols-2 font-helvetica-thin text-xs">
                      <p>Colour</p>
                      <p>{item.color}</p>
                      <p>Size</p>
                      <p>{item.size}</p>
                      <p>Quantity</p>
                      <p>{item.quantity}</p>
                      <p>Total</p>
                      <p className="font-helvetica-bold tracking-wide text-[13px]">
                        Rs.{Number(item.newPrice).toLocaleString()}.00
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Sticky Bottom Section */}
            <div className="sticky bottom-0 bg-white px-4 pt-2 pb-4 ">
              {/* Summary */}
              <div className="font-helvetica-medium font-normal text-sm">
                <div className="flex justify-between">
                  <span>ORDER VALUE</span>
                  <span>Rs.{subtotal.toLocaleString()}.00</span>
                </div>
                <div className="flex justify-between">
                  <span>DISCOUNT</span>
                  <span className="text-[#B7000D]">
                    -Rs.{discount.toLocaleString()}.00
                  </span>
                </div>
                <div className="flex justify-between text-base font-helvetica-bold mt-1">
                  <span>TOTAL</span>
                  <span>Rs.{subtotal.toLocaleString()}.00</span>
                </div>
              </div>

              {/* Buttons */}
              <div className="mt-4 font-helvetica-medium text-[15px] font-normal">
                <button className="bg-black text-white w-full py-4">
                  CHECKOUT
                </button>
                <button className="border mt-2 w-full py-3">
                  SHOPPING BAG
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="p-4 font-helvetica-regular font-thin ">
            <p className="mb-4 text-[17px] ">YOUR SHOPPING BAG IS EMPTY</p>
            <button className="bg-black text-[15px] text-[#F4ECD7] w-full py-4 hover:bg-black/70 cursor-pointer">
              CONTINUE SHOPPING
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default CartDropdown;
