import { loadBooking } from './Booking';

const initialState = {
  signingUp: false,
  signingOut: false,
  successSingUp: false,
  error: null,
  token: localStorage.getItem("token"),
  modalShow: false,
  userId: localStorage.getItem("userId"),
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "modalShow/changeTrue":
      return {
        ...state,
        modalShow: true,
      };
    case "modalShow/changeFalse":
      return {
        ...state,
        modalShow: false,
        error: null,
      };
    case "auth/signup/pending":
      return {
        ...state,
        signingUp: true,
        error: null,
      };
    case "auth/signup/fulfilled":
      return {
        ...state,
        signingUp: false,
        successSingUp: true,
      };
    case "auth/signup/rejected":
      return {
        ...state,
        signingUp: false,
        error: action.error,
      };
    case "auth/signin/pending":
      return {
        ...state,
        signingUp: true,
        error: null,
      };
    case "auth/signin/fulfilled":
      return {
        ...state,
        signingUp: false,
        token: action.payload.token,
        userId: action.payload.userId,
      };
    case "user/logout":
      return {
        ...state,
        signingOut: true,
        token: null,
        userId: null,
      };
    case "auth/signin/rejected":
      return {
        ...state,
        signingUp: false,
        error: action.error,
      };
    case "auth/reloadError":
      return {
        ...state,
        error: null,
        successSingUp: false
      };
    default:
      return state;
  }
};

export const createUser = (login, password) => {
  return async (dispatch) => {
    dispatch({ type: "auth/signup/pending" });
    const response = await fetch("/users/regist", {
      method: "POST",
      body: JSON.stringify({
        login,
        password,
      }),
      headers: { "Content-type": "application/json" },
    });

    const json = await response.json();

    if (json.error) {
      dispatch({ type: "auth/signup/rejected", error: json.error });
    } else {
      dispatch({ type: "auth/signup/fulfilled", payload: json });
    }
  };
};

export const authUser = (login, password) => {
  return async (dispatch) => {
    dispatch({ type: "auth/signin/pending" });
    const response = await fetch("/users/login", {
      method: "POST",
      body: JSON.stringify({
        login,
        password,
      }),
      headers: { "Content-type": "application/json" },
    });

    const json = await response.json();

    if (json.error) {
      dispatch({ type: "auth/signin/rejected", error: json.error });
    } else {
      console.log(json);
      dispatch({ type: "auth/signin/fulfilled", payload: json });
      localStorage.setItem("token", json.token);
      localStorage.setItem("userId", json.userId);
      dispatch(loadBooking(json.userId));
    }
  };
};
