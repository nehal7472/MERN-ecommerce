import "./modal.css";
import Timer from "./Timer";

export default function ModalInfo() {
  return (
    <>
      <div>
        <Timer duration={2 * 24 * 60 * 60 * 1000} />
      </div>
    </>
  );
}
