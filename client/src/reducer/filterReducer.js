/* eslint-disable no-case-declarations */
const filterReducer = (state, action) => {
  switch (action.type) {
    case "LOAD_FILTER_PRODUCTS":
      return {
        ...state,
        filter_products: [...action.payload],
        all_products: [...action.payload],
      };

    case "GET_SORT_VALUE":
      let userSortValue = document.getElementById("sort");
      let sort_value = userSortValue.options[userSortValue.selectedIndex].value;
      console.log(sort_value);

      return {
        ...state,
        sorting_value: sort_value,
      };

    case "SORTING_PRODUCTS":
      let newSortData;
      let temSortProduct = [...action.payload];

      if (state.sorting_value === "a-z")
        newSortData = temSortProduct.sort((a, b) =>
          a.name.localeCompare(b.name)
        );

      return {
        ...state,
        filter_products: newSortData,
      };

    default:
      return state;
  }
};

export default filterReducer;
