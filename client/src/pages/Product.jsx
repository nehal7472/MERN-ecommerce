/* eslint-disable no-constant-condition */
import FilterSection from "../Components/FilterSection";
import Footer from "../Components/Footer";
import Sort from "../Components/Sort";
import ProductList from "../Components/ProductList";
import { useFilterContext } from "../context/FilterContext";

export default function Product() {
  const { filter_products } = useFilterContext();
  console.log("product", filter_products);

  return (
    <>
      <div className="container grid grid-cols-6 gap-4 my-[40px] pt-[25px]">
        <div className="col-start-2 col-end-3">
          <FilterSection />
        </div>
        <div className="col-start-3 col-end-6">
          <div>
            <Sort />
          </div>
          <div className="grid grid-cols-3 gap-2 justify-items-center pt-[25px]">
            <ProductList />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
