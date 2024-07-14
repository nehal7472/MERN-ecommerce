import FilterSection from "../Components/FilterSection";
import ProductList from "../Components/ProductList";
import Sort from "../Components/Sort";

export default function Product() {
  return (
    <>
      <div className="container grid grid-cols-6 gap-4 my-[40px]">
        <div className="col-start-2 col-end-3">
          <FilterSection />
        </div>
        <div className="col-start-3 col-end-6">
          <div>
            <Sort />
          </div>
          <div className="grid grid-cols-3 gap-2 justify-items-center">
            <ProductList />
          </div>
        </div>
      </div>
    </>
  );
}
