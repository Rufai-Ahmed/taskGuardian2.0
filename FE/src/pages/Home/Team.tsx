import React, { useState } from "react";
import { TeamProps } from "../../components/props/TeamProps";
import hr from "../../Assets/Team/hr.webp";
import wiki from "../../Assets/Team/list.webp";

export const Team = () => {
  const arr = [hr, wiki];

  const [state, setState] = useState(0);

  const interval = setInterval(() => {
    setState(state + 1);
    clearInterval(interval);
  }, 2000);

  console.log(state);

  return (
    <div>
      <div className="w-full flex flex-col items-center mt-20">
        <div className="w-[70%] text-center font-bold text-[50px] ">
          <div>Every team, side-by-side</div>

          <div className="w-full ">
            <TeamProps state={state} />
          </div>
        </div>
        <div className="w-[calc(70%-160px)] transition-all duration-500 bg-black  mt-5 ">
          <img
            className="transition-all duration-500"
            src={arr[state % arr.length]}
            height={"100%"}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};
