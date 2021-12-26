import React from "react";
import {addProductToCart} from '../../redux/features/Table';
import { useDispatch, useSelector } from 'react-redux';

const Product = ({ id, name, img, price }) => {
  const cart = useSelector((state) => state.tables.cart)
  const token = useSelector((state) => state.auth.token);
  const bookings = useSelector((state) => state.bookings.items)
  const isInCart = cart.cartItems.map((cartItem) => cartItem.productId).includes(id) ? true : false
  const dispatch = useDispatch()

  const handleAddToCart = (prodId) => {
    dispatch(addProductToCart(prodId))
  }

  const handleChangeModal = () => {
    dispatch({
      type: 'modalShow/changeTrue'
    })
  }

  return (
    <div className="card col-md-3 col-sm-5 m-2 shadow-lg">
      <img src={img} className="card-img-top h-100 mt-2" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text fw-bold">{price}₽</p>
        <button disabled={bookings || isInCart} onClick={!token ? handleChangeModal : () => handleAddToCart(id)} className="btn btn-warning w-100">
          {bookings ? 'НЕДОСТУПНО' : isInCart ? 'В заказе' : 'Заказать'}
        </button>
      </div>
    </div>
  );
};

export default Product;
