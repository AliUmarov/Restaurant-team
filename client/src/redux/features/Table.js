const initialState = {
  items: [],
  loading: false,
  isAvailable: true,
  userInTable: [],
  error: null,
  bookedTable: [],
  cart: {
    cartItems: [
      // {
      //   id: 1,
      //   productId: '61a60b5aa5735e4ffa4f417a',
      //   amount: 7
      // },
      // {
      //   id: 2,
      //   productId: '61a60ab4a5735e4ffa4f4177',
      //   amount: 8
      // },
      // {
      //   id: 3,
      //   productId: '61a60de5a5735e4ffa4f4184',
      //   amount: 2
      // }
    ]
  }
};

export const tableReducer = (state = initialState, action) => {
  switch (action.type) {
    case "tables/user/logout":
      return {
        ...state,
        bookedTable: [],
        cart: {...state.cart, cartItems: []}
      };
    case "tables/load/pending":
      return {
        ...state,
        loading: true,
      };
    case "tables/load/fulfilled":
      return {
        ...state,
        items: action.payload.tables,
        userInTable: action.payload.tables.user,
        loading: false,
        // bookedTable: action.payload.tables.filter((table) => table.user !== action.payload.userId).map((table) => table._id)
        bookedTable: []
      };
    case "tables/addUser/pending":
      return {
        ...state,
        loading: true,
      };
    case "tables/addUser/fulfilled":
      return {
        ...state,
        loading: false,
        bookedTable: [...state.bookedTable, action.payload]
      };
    case "tables/addUser/rejected":
      return {
        ...state,
      };
    case "cart/clean":
      return {
        ...state,
        cart: {...state.cart, cartItems: []}
      };
    case "products/addToCart/fulfilled":
      return {
        ...state,
        cart: {...state.cart, cartItems: [...state.cart.cartItems, {id: state.cart.cartItems.length + 1, productId: action.payload, amount: 1}]}
      };
    case "INCREASE_IN_CART":
      const newCartItems = [...state.cart.cartItems];
      newCartItems.find((item) => item.id === action.payload.id).amount++;
      return {
        ...state,
        cart: {...state.cart, cartItems: newCartItems}
      };
    case "DECREASE_IN_CART":
      const decreasingCartItems = [...state.cart.cartItems];
      if (decreasingCartItems.find((item) => item.id === action.payload.id).amount > 1) {
        decreasingCartItems.find((item) => item.id === action.payload.id).amount--;
      }
      return {
        ...state,
        cart: {...state.cart, cartItems: decreasingCartItems}
      };
    case "DELETE_FROM_CART":
      const cartItemses = state.cart.cartItems.filter((item) => item.id !== action.payload)
      cartItemses.forEach((item, index) => {
        item.id = index + 1;
      });
      return {
        ...state,
        cart: {...state.cart, cartItems: cartItemses}
      };
    case "DELETE_BOOKED_TABLE":
      return {
        ...state,
        bookedTable: state.bookedTable.filter((item) => item !== action.payload)
      };
    default:
      return state;
  }
};

export const loadTables = (userId) => {
  console.log(userId);
  return async (dispatch) => {
    await dispatch({ type: "tables/load/pending" });
    await fetch("/tables")
    .then(async (res) => await res.json())
    .then(async (tables) => {
      await dispatch({
        type: "tables/load/fulfilled",
        payload: { tables, userId },
      });
    });
  };
};
export const addUserInTable = (id) => {
  return async (dispatch) => {
    dispatch({ type: "tables/addUser/pending" });
    dispatch({ type: "tables/addUser/fulfilled", payload: id });
  };
};

export const addProductToCart = (prodId) => {
  return (dispatch) => {
    dispatch({ type: "products/addToCart/fulfilled", payload: prodId});
  };
};
export const cleanCart = () => {
  return (dispatch) => {
    dispatch({ type: "cart/clean" });
  }
};
