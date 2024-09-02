/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

export default function Timer({ duration }) {
  const [time, setTime] = useState(duration);

  useEffect(() => {
    setTimeout(() => {
      setTime(time - 1000);
    }, 1000);
  }, [time]);

  const getFormattedTime = (milliseconds) => {
    let total_seconds = parseInt(Math.floor(milliseconds / 1000));
    let total_minutes = parseInt(Math.floor(total_seconds / 60));
    let total_hours = parseInt(Math.floor(total_minutes / 60));
    let days = parseInt(Math.floor(total_hours / 24));

    let seconds = parseInt(total_seconds % 60);
    let minutes = parseInt(total_minutes % 60);
    let hours = parseInt(total_minutes % 24);

    return (
      <div className="flex gap-3 justify-center ">
        <span>
          <button className="btn btn-outline btn-info text-[30px]">{days}<span className="text-[15px]">Day</span></button>
        </span>
        <span>
          <button className="btn btn-outline btn-success text-[30px]">{hours}<span className="text-[15px]">Hr</span></button>
        </span>
        <span>
          <button className="btn btn-outline btn-warning text-[30px]">{minutes}<span className="text-[15px]">Min</span></button>
        </span>
        <span>
          <button className="btn btn-outline btn-error text-[30px]">{seconds}<span className="text-[15px]">Sec</span></button>
        </span>
      </div>
    );
  };

  return <div>{getFormattedTime(time)}</div>;
}
