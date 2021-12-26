import React from "react";
import Modals from "../Modals/index";
import {useDispatch, useSelector} from "react-redux";
import {addUserInTable} from "../../redux/features/Table";
import styles from './table.module.css'

const Table = ({ id, tableNumber, tableCapacity }) => {
  const dispatch = useDispatch()
  const token = useSelector((state) => state.auth.token);
  const userId = useSelector((state) => state.auth.userId);
  const bookings = useSelector((state) => state.bookings.items)
  const bookedTable = useSelector((state) => state.tables.bookedTable);
  const signingOut = useSelector((state) => state.auth.signingOut)


  const handleChangeModal = () => {
    dispatch({
      type: 'modalShow/changeTrue'
    })
  }

  const handleAddProduct = () => {
    dispatch(addUserInTable(id))
  }

  return (
    <div className="card col-sm-5 m-2 shadow p-3 mb-5 bg-body rounded ">
      <img
        src="http://dekormyhome.ru/wp-content/uploads/2018/03/table__5.jpg"
        className="card-img-top rounded-3"
        alt="tablePicture"
      />
      <div className="card-body">
        <h4 className="card-title fst-italic fs-5">
          Номер столика: {tableNumber}
        </h4>
        <h4 className="card-title  fst-italic fs-5">
          Стульев: {tableCapacity}
        </h4>
        <button
          className={`btn btn-outline-danger w-100 ${!token ? '' : bookedTable.includes(id) ? styles.booked : ''}`}
          disabled={bookings || bookedTable.includes(id)}
          data-bs-toggle="modal"
          data-bs-whatever="@getbootstrap"
          onClick={!token ? handleChangeModal : handleAddProduct}
        >
          {bookings ? 'НЕДОСТУПНО' : bookedTable.includes(id) ? 'ВЫБРАН' : 'ЗАБРОНИРОВАТЬ'}
        </button>
        {/*{!token && !signingOut && <Modals />}*/}
      </div>
    </div>
  );
};

export default Table;
