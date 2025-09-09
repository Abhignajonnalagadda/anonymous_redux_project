// middlewares/api.js
export const api =
  ({ dispatch }) =>
  (next) =>
  (action) => {
    if (action.type === "api/makeCall") {
      const BASE_URL = "https://fakestoreapi.com";
      const { url, onStart, onSuccess, onError } = action.payload;
      
      // Dispatch onStart if provided
      if (onStart) {
        dispatch(onStart());
      }
      
      fetch(`${BASE_URL}/${url}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          return response.json();
        })
        .then((data) => {
          if (onSuccess) {
            dispatch(onSuccess(data));
          }
        })
        .catch((error) => {
          console.error("API call failed:", error);
          if (onError) {
            dispatch(onError(error.message));
          }
        });
    } else {
      next(action);
    }
  };

const fetchApi = (payload) => ({ type: "api/makeCall", payload: payload });
export default fetchApi;