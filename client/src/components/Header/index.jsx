import React, { useEffect } from "react";
import img_1 from "../../images/halal-logo.png";
import Modals from "../Modals/index";
import cl from "./header.module.css";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { loadBooking } from '../../redux/features/Booking';

const Header = () => {
  const token = useSelector((state) => state.auth.token);
  const loading = useSelector((state) => state.tables.loading);
  const dispatch = useDispatch()
  const signingOut = useSelector((state) => state.auth.signingOut)
  const userId = useSelector((state) => state.auth.userId)

  // useEffect(() => {
  //   //dispatch(loadBooking(userId));
  // }, [dispatch]);

  const handleChangeModal = () => {
    dispatch({
      type: 'modalShow/changeTrue'
    })
  }
  const logOut = async () => {
    await dispatch({
      type: 'tables/user/logout'
    })
    await dispatch({
      type: 'user/logout'
    })
    await dispatch({
      type: 'booking/user/logout'
    })
    localStorage.removeItem("token")
    localStorage.removeItem("userId")
    window.location.reload();
  }
  return (
    <>
      {loading ? (
        <div className={cl.loader}>Loading...</div>
      ) : (
        <div className={cl.nav}>
          <NavLink className={cl.wrapLogo} to="/">
            <img src={img_1} alt="" className={cl.logo} />
          </NavLink>
          <ul className={cl.menu}>
            <li>
              <NavLink className={cl.elementMenu} to="/menu">
                Меню
              </NavLink>
            </li>
            <li>
              <NavLink className={cl.elementMenu} to="/about">
                О ресторане
              </NavLink>
            </li>
            <li>
              <NavLink className={cl.elementMenu} to="/contacts">
                Контакты
              </NavLink>
            </li>
            <li>
              <NavLink className={cl.elementMenu} to="/news">
                Новости
              </NavLink>
            </li>
            {token && (
              <li>
                <NavLink className={cl.elementMenu} to="/mybookings">
                  Мои брони
                </NavLink>
              </li>
            )}
            <li>
              <a
                onClick={!token ? handleChangeModal : logOut}
                className={`bi ${!token ? 'bi-box-arrow-in-right' : 'bi-person-check'} ${cl.imgRegistration}`}
              ></a>
            </li>
          </ul>
        </div>
      )}
      {!token && !signingOut && <Modals />}
    </>
  );
};

export default Header;
