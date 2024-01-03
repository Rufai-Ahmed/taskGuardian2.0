import { FC, useEffect, useRef } from "react";
import { FaTools } from "react-icons/fa";
import { FaPalette, FaRocket, FaMegaport, FaCompass } from "react-icons/fa6";

interface iTeam {
  state?: number;
}

export const TeamProps: FC<iTeam> = ({ state }) => {
  const bgRef: any = useRef();
  const bgRef2: any = useRef();
  const bgRef3: any = useRef();
  const bgRef4: any = useRef();
  const bgRef5: any = useRef();

  useEffect(() => {
    const bg = ["white", "#f6f5f4", "#f6f5f4", "#f6f5f4", "#f6f5f4"];
    const bg2 = ["#f6f5f4", "white", "#f6f5f4", "#f6f5f4", "#f6f5f4"];
    const bg3 = ["#f6f5f4", "#f6f5f4", "white", "#f6f5f4", "#f6f5f4"];
    const bg4 = ["#f6f5f4", "#f6f5f4", "#f6f5f4", "white", "#f6f5f4"];
    const bg5 = ["#f6f5f4", "#f6f5f4", "#f6f5f4", "#f6f5f4", "white"];

    bgRef.current.style.backgroundColor = bg[state! % bg.length];
    bgRef2.current.style.backgroundColor = bg2[state! % bg.length];
    bgRef3.current.style.backgroundColor = bg3[state! % bg.length];
    bgRef4.current.style.backgroundColor = bg4[state! % bg.length];
    bgRef5.current.style.backgroundColor = bg5[state! % bg.length];
  }, [state]);

  return (
    <div className="w-full flex gap-7 flex-wrap justify-center ">
      <div
        className="w-[180px] flex flex-col justify-center items-center min-h-16 border rounded-lg transition-all duration-500 hover:bg-slate-400 cursor-pointer "
        ref={bgRef}
      >
        <div className="text-[50px] py-7">
          <FaTools />
        </div>
        <div className="text-[17px] pb-6 ">Engineering</div>
      </div>
      <div
        className="w-[180px] flex flex-col justify-center items-center min-h-16 border rounded-lg transition-all duration-500 hover:bg-slate-400 cursor-pointer "
        ref={bgRef2}
      >
        <div className="text-[50px] py-7">
          <FaPalette />
        </div>
        <div className="text-[17px] pb-6 ">Design</div>
      </div>
      <div
        className="w-[180px] flex flex-col justify-center items-center min-h-16 border rounded-lg transition-all duration-500 hover:bg-slate-400 cursor-pointer "
        ref={bgRef3}
      >
        <div className="text-[50px] py-7">
          <FaRocket />
        </div>
        <div className="text-[17px] pb-6 ">Product</div>
      </div>
      <div
        className="w-[180px] flex flex-col justify-center items-center min-h-16 border rounded-lg transition-all duration-500 hover:bg-slate-400 cursor-pointer "
        ref={bgRef4}
      >
        <div className="text-[50px] py-7">
          <FaMegaport />
        </div>
        <div className="text-[17px] pb-6 ">Marketing</div>
      </div>
      <div
        className="w-[180px] flex flex-col justify-center items-center min-h-16 border rounded-lg transition-all duration-500 hover:bg-slate-400 cursor-pointer "
        ref={bgRef5}
      >
        <div className="text-[50px] py-7">
          <FaCompass />
        </div>
        <div className="text-[17px] pb-6 ">Operations</div>
      </div>
    </div>
  );
};
