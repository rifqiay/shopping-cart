import React from "react";
import { useDispatch } from "react-redux";
import love from "../../../asset/icons/love.svg";
import minus from "../../../asset/icons/minus.svg";
import plus from "../../../asset/icons/plus.svg";
import trash from "../../../asset/icons/trash.svg";
import {
  addToWishList,
  decrementPrice,
  incrementPrice,
  removeItem,
} from "../../../redux/features/CartSlice";

const ItemProduct = ({
  name,
  category,
  color,
  size,
  photo,
  price,
  productId,
  quantity,
  totalPrice,
}) => {
  const dispatch = useDispatch();
  return (
    <div>
      {/* gambar produk */}
      <div className="sm:flex gap-5 mt-3">
        <div className="w-48 border flex items-center justify-center bg-[#E4E4E4] rounded-lg">
          <img src={photo} alt={photo} className="w-32" />
        </div>
        {/* nama produk */}
        <div className="flex w-full justify-between">
          <div className="flex flex-col justify-between">
            <div>
              <p className="text-xl font-medium">{name}</p>
              <p className="text-xs text-slate-500 mt-2">{category}</p>
              <div className="mt-3">
                <p className="text-xs text-slate-500">color {color}</p>
                <p className="text-slate-500">SIZE {size}</p>
              </div>
            </div>
            {/* trash and love */}
            <div className="flex mt-5  w-96 justify-between text-slate-500 text-md">
              <div
                className="flex w-1/2 gap-1 items-center cursor-pointer hover:text-slate-700"
                onClick={() => dispatch(removeItem({ productId }))}
              >
                <div className="w-7">
                  <img src={trash} alt="trash-icon" />
                </div>
                <p>REMOVE ITEM</p>
              </div>
              <div
                className="flex w-1/2 gap-2 items-center cursor-pointer hover:text-slate-700"
                onClick={() =>
                  dispatch(addToWishList({ productId, name, photo }))
                }
              >
                <div className="w-6">
                  <img src={love} alt="love-icon" />
                </div>
                MOVE TO WISHLIST
              </div>
            </div>
          </div>
          {/* counter */}
          <div className="flex flex-col justify-between ">
            <div className="flex border w-40 justify-between h-10 items-center px-1 rounded-md">
              <div
                className="w-6 border-r-2 h-full w-11 flex items-center justify-center cursor-pointer hover:bg-slate-300"
                onClick={() => dispatch(decrementPrice({ productId }))}
              >
                <img src={minus} alt="minus-icon" className="w-5" />
              </div>
              <p className="">{quantity}</p>
              <div
                className="w-11 border-l-2 h-full w-8 flex items-center justify-center cursor-pointer hover:bg-slate-300"
                onClick={() => dispatch(incrementPrice({ productId }))}
              >
                <img src={plus} alt="plus-icon" className="w-5" />
              </div>
            </div>
            <p className="text-end">$ {totalPrice ? totalPrice : price}</p>
          </div>
        </div>
      </div>
      <hr className="my-5" />
    </div>
  );
};

export default ItemProduct;
