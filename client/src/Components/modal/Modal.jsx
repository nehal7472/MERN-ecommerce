import "./modal.css";
import ModalInfo from "./ModalInfo";
import Product from "../../Components/Product";
import { useAuth } from "../../store/auth";

export default function Modal() {
  const { featureProducts } = useAuth();
  return (
    <div>
      <button
        id="animated_button"
        className=" text-[15px] bg-[#DA4A54] text-white px-[5px]"
        onClick={() => document.getElementById("my_modal_5").showModal()}
      >
        Get Offer
      </button>
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box h-[30rem] hover:border hover:border-rose-500  ">
          <h3 className="font-bold text-lg">
            <ModalInfo />
          </h3>
          <div className="py-4 flex flex-wrap justify-around">
            {featureProducts.map((curElem, index) => (
              <div key={index} className="w-[160px] h-[350px]">
                <Product curElem={curElem} />
              </div>
            ))}
          </div>
          <div className="modal-action sticky bottom-2 right-2">
            <form method="dialog">
              <button className="btn btn-outline btn-error ">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
}
