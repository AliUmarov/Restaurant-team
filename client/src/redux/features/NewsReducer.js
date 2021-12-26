const initialState = {
  newsList: [],
  loading: false,
};

export const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "news/load/pending":
      return {
        ...state,
        loading: true,
      };
    case "news/load/fulfilled":
      return {
        ...state,
        newsList: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export const loadNews = () => {
  return (dispatch) => {
    dispatch({ type: "news/load/pending" });
    fetch("/news")
      .then((res) => res.json())
      .then((news) => {
        dispatch({
          type: "news/load/fulfilled",
          payload: news,
        });
      });
  };
};
