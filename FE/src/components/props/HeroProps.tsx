import { FC, useState } from "react";
import { FaAngleRight } from "react-icons/fa";

interface iHero {
  name?: string;
  Icon?: any;
  info?: string;
  color?: string;
  bg?: string;
}

export const HeroProps: FC<iHero> = ({ name, Icon, info, color, bg }) => {
  const [state, setState] = useState(false);

  return (
    <div
      onMouseEnter={() => {
        setState(true);
      }}
      onMouseLeave={() => {
        setState(false);
      }}
      className="w-[250px] h-[150px] p-3 border rounded-lg bg-zinc-100 hover:bg-white transition-all duration-300 cursor-pointer flex flex-col justify-between "
    >
      <div className="flex gap-3 ">
        <div
          style={{
            color: color,
            backgroundColor: bg,
          }}
          className="p-3 rounded-md "
        >
          <Icon size={20} />
        </div>
        <div className="text-[30px] font-bold ">{name}</div>
      </div>

      <div className="text-[15px]  ">{info}</div>

      {state && state ? (
        <div
          className=" flex gap-2 text-[15px] items-center "
          style={{
            color,
          }}
        >
          {" "}
          learn more <FaAngleRight />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
