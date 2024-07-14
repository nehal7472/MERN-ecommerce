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
      <div className="flex gap-2 text-[30px]">
        <button onClick={() => setDecrease()}>
        <FontAwesomeIcon icon={faMinus} />
        </button>
        <p>{amount}</p>
        <button onClick={() => setIncrease()}>
        <FontAwesomeIcon icon={faPlus} />
        </button>
      </div>
    </>
  );
}
