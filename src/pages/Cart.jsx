// import React, { useContext, useEffect, useState } from "react";
// import { ShopContext } from "../context/ShopContext";
// import Title from "../components/Title";
// import { assets } from "../assets/assets";
// import CartTotal from "../components/CartTotal";

// const Cart = () => {
//   const { products, currency, cartItems, updateQuantity, navigate } =
//     useContext(ShopContext);
//   const [cartData, setCartData] = useState([]);

//   useEffect(() => {
//     if (products.length > 0) {
//       const tempData = [];
//       for (const items in cartItems) {
//         for (const item in cartItems[items]) {
//           if (cartItems[items][item] > 0) {
//             tempData.push({
//               _id: items,
//               size: item,
//               quantity: cartItems[items][item],
//             });
//           }
//         }
//       }
//       setCartData(tempData);
//     }
//   }, [cartItems, products]);

//   // Add this useEffect for tracking ViewCart event when component mounts
//   useEffect(() => {
//     // Track the ViewCart event when cart page is loaded
//     if (window.fbq) {
//       window.fbq("track", "ViewCart");
//     }
//   }, []);

//   // Function to handle checkout and track the InitiateCheckout event
//   const handleProceedToCheckout = () => {
//     // Track the InitiateCheckout event
//     if (window.fbq && cartData.length > 0) {
//       // Calculate total value
//       let totalValue = 0;
//       let contentIds = [];

//       cartData.forEach((item) => {
//         const productData = products.find(
//           (product) => product._id === item._id
//         );
//         if (productData) {
//           totalValue += productData.price * item.quantity;
//           contentIds.push(item._id);
//         }
//       });

//       window.fbq("track", "InitiateCheckout", {
//         content_ids: contentIds,
//         content_type: "product",
//         value: totalValue,
//         currency: currency.replace("$", "USD"), // Assuming currency is like "$"
//       });
//     }

//     // Navigate to checkout page
//     navigate("/place-order");
//   };

//   return (
//     <div className="border-t pt-14">
//       <div className=" text-2xl mb-3">
//         <Title text1={"YOUR"} text2={"CART"} />
//       </div>

//       <div>
//         {cartData.map((item, index) => {
//           const productData = products.find(
//             (product) => product._id === item._id
//           );
//           return (
//             <div
//               key={index}
//               className="py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4"
//             >
//               <div className=" flex items-start gap-6">
//                 <img
//                   className="w-16 sm:w-20"
//                   src={productData.image[0]}
//                   alt=""
//                 />
//                 <div>
//                   <p className="text-xs sm:text-lg font-medium">
//                     {productData.name}
//                   </p>
//                   <div className="flex items-center gap-5 mt-2">
//                     <p>
//                       {currency}
//                       {productData.price}
//                     </p>

//                   </div>
//                 </div>
//               </div>
//               <input
//                 onChange={(e) =>
//                   e.target.value === "" || e.target.value === "0"
//                     ? null
//                     : updateQuantity(
//                         item._id,
//                         item.size,
//                         Number(e.target.value)
//                       )
//                 }
//                 className="border max-w-10 sm:max-w-20 px-1 sm:px-2 py-1"
//                 type="number"
//                 min={1}
//                 defaultValue={item.quantity}
//               />
//               <img
//                 onClick={() => updateQuantity(item._id, item.size, 0)}
//                 className="w-4 mr-4 sm:w-5 cursor-pointer"
//                 src={assets.bin_icon}
//                 alt=""
//               />
//             </div>
//           );
//         })}
//       </div>

//       <div className="flex justify-end my-20">
//         <div className="w-full sm:w-[450px]">
//           <CartTotal />
//           <div className=" w-full text-end">
//             {/* Changed onClick to use the new handler function */}
//             <button
//               onClick={handleProceedToCheckout}
//               className="bg-black text-white text-sm my-8 px-8 py-3"
//             >
//               PROCEED TO CHECKOUT
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Cart;
import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import CartTotal from "../components/CartTotal";

const Cart = () => {
  const { products, currency, cartItems, updateQuantity, navigate } =
    useContext(ShopContext);
  const [cartData, setCartData] = useState([]);
  const [shippingMethod, setShippingMethod] = useState("standard");

  useEffect(() => {
    if (products.length > 0) {
      const tempData = [];
      for (const items in cartItems) {
        for (const item in cartItems[items]) {
          if (cartItems[items][item] > 0) {
            tempData.push({
              _id: items,
              size: item,
              quantity: cartItems[items][item],
            });
          }
        }
      }
      setCartData(tempData);
    }
  }, [cartItems, products]);

  // Add this useEffect for tracking ViewCart event when component mounts
  useEffect(() => {
    // Track the ViewCart event when cart page is loaded
    if (window.fbq) {
      window.fbq("track", "ViewCart");
    }
  }, []);

  // Function to handle checkout and track the InitiateCheckout event
  const handleProceedToCheckout = () => {
    // Track the InitiateCheckout event
    if (window.fbq && cartData.length > 0) {
      // Calculate total value
      let totalValue = 0;
      let contentIds = [];

      cartData.forEach((item) => {
        const productData = products.find(
          (product) => product._id === item._id
        );
        if (productData) {
          totalValue += productData.price * item.quantity;
          contentIds.push(item._id);
        }
      });

      window.fbq("track", "InitiateCheckout", {
        content_ids: contentIds,
        content_type: "product",
        value: totalValue,
        currency: currency.replace("$", "USD"), // Assuming currency is like "$"
      });
    }

    // Navigate to checkout page
    navigate("/place-order");
  };

  // Calculate delivery date - 3 business days from today
  const getEstimatedDeliveryDate = () => {
    const today = new Date();
    let businessDays = 3;
    const deliveryDate = new Date(today);

    while (businessDays > 0) {
      deliveryDate.setDate(deliveryDate.getDate() + 1);
      // Skip weekends (0 = Sunday, 6 = Saturday)
      if (deliveryDate.getDay() !== 0 && deliveryDate.getDay() !== 6) {
        businessDays--;
      }
    }

    // Format the date as Month Day, Year
    return deliveryDate.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <div className="border-t pt-14">
      <div className=" text-2xl mb-3">
        <Title text1={"YOUR"} text2={"CART"} />
      </div>

      <div>
        {cartData.map((item, index) => {
          const productData = products.find(
            (product) => product._id === item._id
          );
          return (
            <div
              key={index}
              className="py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4"
            >
              <div className=" flex items-start gap-6">
                <img
                  className="w-16 sm:w-20"
                  src={productData.image[0]}
                  alt=""
                />
                <div>
                  <p className="text-xs sm:text-lg font-medium">
                    {productData.name}
                  </p>
                  <div className="flex items-center gap-5 mt-2">
                    <p>
                      {currency}
                      {productData.price}
                    </p>
                  </div>
                </div>
              </div>
              <input
                onChange={(e) =>
                  e.target.value === "" || e.target.value === "0"
                    ? null
                    : updateQuantity(
                        item._id,
                        item.size,
                        Number(e.target.value)
                      )
                }
                className="border max-w-10 sm:max-w-20 px-1 sm:px-2 py-1"
                type="number"
                min={1}
                defaultValue={item.quantity}
              />
              <img
                onClick={() => updateQuantity(item._id, item.size, 0)}
                className="w-4 mr-4 sm:w-5 cursor-pointer"
                src={assets.bin_icon}
                alt=""
              />
            </div>
          );
        })}
      </div>

      {/* Shipping and Delivery Information Section */}
      <div className="mt-8 border p-4 rounded bg-gray-50">
        <h3 className="font-medium text-lg mb-2">Shipping & Delivery</h3>

        <div className="mb-4">
          <div className="flex items-center mb-2">
            <input
              type="radio"
              id="standard"
              name="shipping"
              value="standard"
              checked={shippingMethod === "standard"}
              onChange={() => setShippingMethod("standard")}
              className="mr-2"
            />
            <label htmlFor="standard" className="flex justify-between w-full">
              <span>Standard Shipping (3 business days)</span>
              <span>Free</span>
            </label>
          </div>

          
        </div>

        <div className="text-sm border-t pt-3">
          <p className="mb-1">
            <span className="font-medium">Estimated Delivery:</span>
            {getEstimatedDeliveryDate()}
          </p>
          <p className="text-gray-600">
            Orders placed before 2 PM are processed same day. Delivery times may
            vary based on your location.
          </p>
        </div>
      </div>

      <div className="flex justify-end my-20">
        <div className="w-full sm:w-[450px]">
          <CartTotal shippingMethod={shippingMethod} />
          <div className=" w-full text-end">
            <button
              onClick={handleProceedToCheckout}
              className="bg-black text-white text-sm my-8 px-8 py-3"
            >
              PROCEED TO CHECKOUT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
