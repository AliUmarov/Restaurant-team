import React, { useEffect, useState } from "react";
import styles from "./styles.css";
import { useDispatch, useSelector } from "react-redux";
import MuiPhoneNumber from 'material-ui-phone-number';
import {
  confirmBooking,
  deleteBooking,
  loadBooking,
} from "../../redux/features/Booking";
import { loadProducts } from "../../redux/features/Product";
import { loadTables } from "../../redux/features/Table";

function MyBookings(props) {
  const bookings = useSelector((state) => state.bookings.items);
  const products = useSelector((state) => state.products.productsList);
  const tables = useSelector((state) => state.tables.items);
  const token = useSelector((state) => state.auth.token);
  const uid = useSelector((state) => state.auth.userId);
  const [phone, setPhone] = useState("");
  const [showPhoneError, setShowPhoneError] = useState(false);
  const confirming = useSelector((state) => state.bookings.confirming);
  const deleting = useSelector((state) => state.bookings.deleting);
  const loading = useSelector((state) => state.bookings.loading);

  const dispatch = useDispatch();

  useEffect(async () => {
    await dispatch(loadTables());
    await dispatch(loadProducts());
    await dispatch(loadBooking(uid));
  }, [dispatch]);

  const handleOnChange = (value) => {
    setPhone(value);
  };

  const handleConfirm = () => {
    if (phone.length < 15) {
      return setShowPhoneError(true);
    }
    dispatch(confirmBooking(bookings._id, phone));
  };

  const handleDelete = () => {
    dispatch(deleteBooking(bookings._id));
  };

  const handlePhoneInputFocus = () => {
    setShowPhoneError(false);
  };

  return (
    <div className="bookingsMainBlock">
      {loading ? (
        <div className="loader loader-small">loading</div>
      ) : !token ? (
        <span>Авторизуйтесь, чтобы увидеть свои брони.</span>
      ) : !bookings ? (
        <span>У вас нет активных броней</span>
      ) : (
        <div className="booking">
          <span>Ваша бронь</span>
          <br />
          <br />
          <div className="booking-tables">
            <b>Номера бронируемых столов: </b>
            {bookings.bookingTables.map((bTable) => {
              const tbl = tables.find((table) => table._id === bTable);
              return (
                <button disabled className="btn btn-sm btn-outline-info">
                  {tbl.tableNumber}
                </button>
              );
            })}
          </div>
          <br />
          <div>
            <b>Блюда: </b>
          </div>
          {bookings.bookingProducts.map((bProduct) => {
            const productWeNeed = products.find(
              (product) => product._id === bProduct.productId
            );
            console.log(productWeNeed);
            return (
              <div className="booking-dishes">
                <img src={productWeNeed.img} alt="" />
                <div className="booking-item-desc">
                  <p>{productWeNeed.name}</p>
                  <p>
                    {productWeNeed.price}₽ x {bProduct.amount}
                  </p>
                </div>
              </div>
            );
          })}
          <br />
          <div className="final-price">
            <b>Итоговая сумма: </b>
            {bookings.bookingProducts.reduce((acc, value) => {
              const productWeNeed = products.find(
                (product) => product._id === value.productId
              );
              return acc + productWeNeed.price * value.amount;
            }, 0)}
            ₽
          </div>
          <br />
          <div className="phone-div">
            <b>Телефон: </b>
            <MuiPhoneNumber
              disabled={bookings.isConfirmed}
              value={bookings.isConfirmed ? bookings.phone : ""}
              defaultCountry={"us"}
              onChange={handleOnChange}
              onFocus={handlePhoneInputFocus}
            />
            <br />
            <br />
          </div>
          <br />
          {!bookings.isConfirmed ? (
            <div className="booking-actions">
              <button className="btn btn-danger" onClick={handleDelete}>
                {deleting ? (
                  <div className="loader loader-small">loading</div>
                ) : (
                  "Отказаться от брони"
                )}
              </button>
              <b className={showPhoneError ? "" : "hidden"}>
                Номер телефона некорректен.
              </b>
              <button className="btn btn-success" onClick={handleConfirm}>
                {confirming ? (
                  <div className="loader loader-small">loading</div>
                ) : (
                  "Подтвердить бронь"
                )}
              </button>
            </div>
          ) : (
            <div className="div-confirmed">
              <b>Бронь подтверждена. Ожидайте звонка от нашего менеджера. </b>
              <i className="bi bi-bookmark-check-fill"></i>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default MyBookings;
