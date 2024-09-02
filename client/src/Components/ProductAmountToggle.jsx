/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

export default function ProductAmountToggle({
  amount,
  setDecrease,
  setIncrease,
}) {
  return (
    <>
      <div className="flex gap-2 text-[25px]">
        <button onClick={() => setDecrease()}>
          <FontAwesomeIcon icon={faMinus} className="text-[20px] " />
        </button>
        <p className="font-bold">{amount}</p>
        <button onClick={() => setIncrease()}>
          <FontAwesomeIcon
            icon={faPlus}
            className="text-[20px]"
          />
        </button>
      </div>
    </>
  );
}
