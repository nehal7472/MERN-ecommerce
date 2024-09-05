/* eslint-disable no-constant-condition */
import FilterSection from "../Components/FilterSection";
import Footer from "../Components/Footer";
import Sort from "../Components/Sort";
import ProductList from "../Components/ProductList";
// import { useFilterContext } from "../context/FilterContext";

export default function Product() {
  // const { filter_products } = useFilterContext();
  // console.log("product", filter_products);

  return (
    <>
      <div className="container mx-auto my-10 px-4 sm:px-[5rem] ">
        <div className="grid grid-cols-1 md:grid-cols-4 ">
          <div className="md:col-span-1">
            <FilterSection />
          </div>
          <div className="md:col-span-3 grid ">
            <div className="mb-6">
              <Sort />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
              <ProductList />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
