import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BooksInfo } from "./Data/Booksinfo";
import {faArrowRight} from "@fortawesome/free-solid-svg-icons";

export default function Sort() {
  const BookLength = BooksInfo.length;

  return (
    <>
      <div className="flex justify-between items-center mb-16">
        <h2>Filter</h2>
        <h3>
          <span>
            Total Books{" "}
            <span className="text-[#DA4A54]">
            <FontAwesomeIcon icon={faArrowRight} />
            </span>{" "}
          </span>
          {BookLength}
        </h3>
      </div>
    </>
  );
}
