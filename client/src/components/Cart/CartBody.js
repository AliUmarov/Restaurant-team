import React from "react";
import styles from "./styles.module.css";
import { useDispatch, useSelector } from "react-redux";

function CartBody(props) {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.productsList);
  const cart = useSelector((state) => state.tables.cart);

  const handleDeleteFromCart = (id) => {
    dispatch({ type: "DELETE_FROM_CART", payload: id });
  };

  const handleIncreaseInCart = (cartItem) => {
    dispatch({ type: "INCREASE_IN_CART", payload: cartItem });
  };

  const handleDecreaseInCart = (cartItem) => {
    dispatch({ type: "DECREASE_IN_CART", payload: cartItem });
  };

  return cart.cartItems.map((cartItem) => {
    const productWeNeed = products.find(
      (product) => product._id === cartItem.productId
    );
    return (
      <tr>
        <td>{cartItem.id}</td>
        <td>
          <img src={productWeNeed.img} alt="" />
        </td>
        <td>{productWeNeed.name}</td>
        <td>
          <div className="row flex-nowrap">
            <div className="col">
              <button
                onClick={() => handleIncreaseInCart(cartItem)}
                className="btn btn-sm btn-outline-info"
              >
                +
              </button>
            </div>
            <div className="col text-center px-2">{cartItem.amount}</div>
            <div className="col">
              <button
                onClick={() => handleDecreaseInCart(cartItem)}
                className="btn btn-sm btn-outline-info"
              >
                -
              </button>
            </div>
          </div>
        </td>
        <td>
          <span
            onClick={() => handleDeleteFromCart(cartItem.id)}
            className={styles.deleteIcon}
          >
            <img
              className={styles.deleteX}
              src="https://react-shopcamp.herokuapp.com/static/media/x.85f9f2a1.svg"
              alt=""
            />
          </span>
        </td>
      </tr>
    );
  });
}

export default CartBody;
