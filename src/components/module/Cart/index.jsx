import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import CartItem from "../../base/CartItems";

const Cart = () => {
  const { items } = useSelector((state) => state.cart.cart);

  return (
    <div className="border p-4 rounded-lg shadow-md">
      <h1 className="font-medium text-lg">
        Cart ( {items.length} {items.length <= 1 ? "item" : "items"} )
      </h1>
      {items.map((item, index) => (
        <Fragment key={index}>
          <CartItem
            name={item.name}
            category={item.category}
            color={item.color}
            size={item.size}
            photo={item.photo}
            price={item.price}
            productId={item.productId}
            quantity={item.quantity}
            totalPrice={item.totalPrice}
          />
        </Fragment>
      ))}
    </div>
  );
};

export default Cart;
