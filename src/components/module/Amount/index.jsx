import React from "react";
import { useDispatch, useSelector } from "react-redux";
import arrowDown from "../../../asset/icons/arrow-down.svg";
import { checkoutItems } from "../../../redux/features/CartSlice";

const Amount = () => {
  const dispatch = useDispatch();
  const { totalAmount } = useSelector((state) => state.cart.cart);

  return (
    <>
      <div className="border p-4 rounded-lg shadow-lg">
        <h1 className="text-2xl font-medium ">The total of amount of</h1>
        <div className="flex justify-between text-gray-500 mt-7">
          <p>Temporary amount</p>
          <p>$ {totalAmount}</p>
        </div>
        <div className="flex justify-between text-gray-500 my-3">
          <p>Shipping</p>
          <p>Gratis</p>
        </div>
        <hr />
        <div className="flex justify-between mt-3">
          <div>
            <p className="text-lg">The total amount of </p>
            <p>(including VAT)</p>
          </div>
          <p>$ {totalAmount}</p>
        </div>
        <button
          className="bg-[#006BED] w-full py-3 text-white font-medium mt-7 rounded-md hover:bg-[#0a62cc] outline-none"
          onClick={() => dispatch(checkoutItems())}
        >
          GO TO CHECKOUT
        </button>
      </div>
      {/* chekoutcode */}
      <div className="flex justify-between border p-4 items-center mt-5 rounded-lg shadow-lg">
        <p className="text-md font-medium">Add a checkout code [optional]</p>
        <img src={arrowDown} alt="arrow-down-icon" />
      </div>
    </>
  );
};

export default Amount;
