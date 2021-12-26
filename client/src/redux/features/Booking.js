import { cleanCart } from './Table';

const initialState = {
  items: null,
  creating: false,
  confirming: false,
  deleting: false,
  loading: false
};

export const bookingReducer = (state = initialState, action) => {
  switch (action.type) {
    case "booking/create/unconfirmed/pending":
      return {
        ...state,
        creating: true,
      };
    case "booking/create/unconfirmed/fulfilled":
      return {
        ...state,
        items: action.payload,
        creating: false,
      };
    case "booking/confirm/pending":
      console.log(action.payload);
      return {
        ...state,
        confirming: true,
      };
    case "booking/confirm/fulfilled":
      console.log(action.payload);
      return {
        ...state,
        items: action.payload,
        confirming: false
      };
    case "booking/load/pending":
      return {
        ...state,
        loading: true
      };
    case "booking/user/logout":
      return {
        ...state,
        items: null
      };
    case "booking/load/fulfilled":
      return {
        ...state,
        items: action.payload,
        loading: false
      };
    case "booking/delete/pending":
      return {
        ...state,
        deleting: true
      };
    case "booking/delete/fulfilled":
      return {
        ...state,
        items: null,
        deleting: false
      };
    default:
      return state;
  }
};

export const createUnconfirmedBooking = (userId, bookingTables, bookingProducts) => {
  return (dispatch) => {
    dispatch({ type: "booking/create/unconfirmed/pending" });
    fetch("/bookings/", {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify({
        userId,
        bookingTables,
        bookingProducts,
      })
    })
    .then((res) => res.json())
    .then((booking) => {
      dispatch({
        type: "booking/create/unconfirmed/fulfilled",
        payload: booking,
      });
    });
  };
};

export const confirmBooking = (id, phone) => {
  return (dispatch) => {
    dispatch({ type: "booking/confirm/pending" });
    fetch(`/bookings/${id}`, {
      method: 'PATCH',
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify({
        phone,
        isConfirmed: true
      })
    })
    .then((res) => res.json())
    .then((booking) => {
      dispatch({
        type: "booking/confirm/fulfilled",
        payload: booking,
      });
    });
  };
};

export const loadBooking = (userId) => {
  return async (dispatch) => {
    dispatch({type: "booking/load/pending"});
    await fetch(`/bookings/user/${userId}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
    })
    .then((res) => res.json())
    .then(async (booking) => {
      await dispatch({
        type: "booking/load/fulfilled",
        payload: booking,
      });
    });
  };
};

export const deleteBooking = (id) => {
  return async (dispatch) => {
    dispatch({ type: "booking/delete/pending" });
    await fetch(`/bookings/${id}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
    })
    .then((res) => {
      if (res.ok) {
        dispatch(cleanCart())
        dispatch({
          type: "booking/delete/fulfilled"
        });
      }
    })
  };
};

