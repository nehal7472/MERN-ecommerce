/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { createContext, useContext, useEffect, useReducer } from "react";
import { useAuth } from "../store/auth";
import reducer from "../reducer/filterReducer";
const FilterContext = createContext();

const initialState = {
  filter_products: [],
  all_products: [],
  sorting_value : 'lowest'
};

export const FilterContextProvider = ({ children }) => {
  const { products } = useAuth();

  const [state, dispatch] = useReducer(reducer, initialState);

  const sorting = () => {
    dispatch({ type: "GET_SORT_VALUE" });
  };

  useEffect(()=>{
    dispatch({type: 'SORTING_PRODUCTS', payload:products})

  }, [state.sorting_value])

  useEffect(() => {
    dispatch({ type: "LOAD_FILTER_PRODUCTS", payload: products });
  }, [products]);

  return (
    <FilterContext.Provider value={{ ...state, sorting }}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  return useContext(FilterContext);
};
