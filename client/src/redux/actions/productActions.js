import {
  setProducts,
  setLoading,
  setError,
  setPagination,
} from "../slices/product";
import axios from "axios";

export const getProducts = (page, favouritesToggle) => async (dispatch) => {
  dispatch(setLoading());
  try {
    const { data } = await axios.get("/api/products");
    const { products, pagination } = data;
    dispatch(setProducts(products));
    dispatch(setPagination(pagination));
  } catch (error) {
    dispatch(
      setError(
        error.responce && error.responce.data.message
          ? error.responce.data.message
          : error.message
          ? error.message
          : "An expected error has occured. Please try again later"
      )
    );
  }
};
