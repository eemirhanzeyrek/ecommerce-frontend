import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../redux/cartSlice";

const Cart = () => {
  const { carts } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const deleteItem = (id) => {
    dispatch(removeFromCart(id));
  };

  return (
    <div className="h-screen ">
      {carts?.length > 0 ? (
        <div>
          {carts?.map((cart, index) => {
            <div
              className="flex items-center justify-between border-b mb-2 py-2 px-4"
              key={index}
            >
              <img className="w-20 h-20" src={cart?.image?.url} alt="" />
              <div>{cart?.name}</div>
              <div>{cart?.price} $</div>
              <div
                onClick={() => deleteItem(cart?.id)}
                className="w-[150px] h-12 flex items-center justify-center rounded-md bg-red-500 text-white"
              >
                Delete
              </div>
            </div>;
          })}
        </div>
      ) : (
        <div>There are no products in your cart</div>
      )}
    </div>
  );
};

export default Cart;
