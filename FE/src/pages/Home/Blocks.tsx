import artPeek from "../../Assets/topPeekI.avif";
import { FaEye, FaPallet } from "react-icons/fa";
import core from "../../Assets/Block/customize-info.webp";
import build from "../../Assets/Block/build-any-page-communicate-any-idea.webp";
import fire from "../../Assets/Block/match-group.webp";

export const Blocks = () => {
  return (
    <div>
      <div className=" mt-28 flex flex-col items-center justify-center ">
        <div className="lg:text-[50px] relative md:text-[40px] sm:text-[39px] font-bold flex w-full  justify-center items-center  ">
          <img
            src={artPeek}
            alt=""
            className=" z-10 sm:h-[30px] md:h-[150px] lg:h-auto "
          />
          <div className=" ">Powerful building blocks</div>
        </div>
      </div>

      <div className="w-full justify-center flex relative h-[80vh]">
        <div className="lg:w-[60%] md:w-[70%] sm:w-[70%] flex  rounded-lg gap-6 absolute top-[-10px] ">
          <div className="w-[50%] bg-[#f6f5f4] rounded-lg min-h-[50vh] p-4 pb-0 pr-0">
            <FaEye size={25} className="text-blue-500 mb-3 " />
            <div className="text-[18px] font-bold  ">
              Customize the info you track
            </div>
            <div className="text-[17px]  ">
              Create your own labels, tags, owners, and more, so everyone has
              context and everything stays organized.
            </div>
            <div className="w-full flex justify-end items-end ">
              <img src={core} alt="" className="h-full mt-10 " />
            </div>
          </div>

          <div className="w-[50%] bg-[#f6f5f4] rounded-lg min-h-[50vh] p-4 pb-0 pr-0">
            <FaPallet size={25} className="text-blue-500 mb-3 " />
            <div className="text-[18px] font-bold  ">
              Build any page, communicate any idea
            </div>
            <div className="text-[17px]  ">
              Everything is drag and drop in Notion — images, toggles, to-do’s,
              even embedded databases.
            </div>
            <div className="w-full flex justify-end items-end ">
              <img src={build} alt="" className="h-full mt-10 " />
            </div>
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col items-center ">
        <div className="text-[30px] leading-tight w-[50%] text-center font-sans ">
          "TG adapts to your needs. It’s as minimal or as powerful as you need
          it to be."
        </div>
        <div className="flex gap-5 items-center mt-3">
          <div>
            <img src={fire} alt="" />
          </div>
          <div className="text-[15px]">
            <div className="font-bold">Rahim Makani</div>
            <div>Director of Product, Matchgroup</div>
          </div>
        </div>
      </div>
    </div>
  );
};
