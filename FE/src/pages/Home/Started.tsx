import { FaArrowRight } from "react-icons/fa";
import parade from "../../Assets/started/notion-parade.webp";
import { Link } from "react-router-dom";

export const Started = () => {
  return (
    <div>
      <div className="mt-10 w-full flex flex-col items-center ">
        <div className="w-[70%] text-center flex flex-col items-center  ">
          <div className="text-[50px] font-bold  ">Get started for free</div>
          <div className="text-[15px]  ">
            Play around with it first. Pay and add your team later.
          </div>

          <div className="flex gap-5 items-center mt-5">
            <Link to="/signup">
              <div className="w-[170px] h-10  flex items-center justify-center bg-black rounded-md text-white ">
                Try TG free
              </div>
            </Link>

            <div className="flex gap-3 items-center text-blue-400">
              Request a demo <FaArrowRight />
            </div>
          </div>

          <div>
            <img src={parade} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
