import { FaAngleRight } from "react-icons/fa";
import figma from "../../Assets/sponsor/figma-logo.png";
import pixar from "../../Assets/sponsor/pixar.png";
import doordash from "../../Assets/sponsor/doordash.png";
import nike from "../../Assets/sponsor/nike.png";
import amazon from "../../Assets/sponsor/amazon.png";
import pinterest from "../../Assets/sponsor/pinterest.png";
import gElectric from "../../Assets/sponsor/General_Electric_logo.svg__1_.png";
import uber from "../../Assets/sponsor/uber.png";
import plaid from "../../Assets/sponsor/plaid.png";
import toyota from "../../Assets/sponsor/Screen_Shot_2022-09-27_at_11.11_3.png";
import snowflake from "../../Assets/sponsor/snowflake.png";
import headspace from "../../Assets/sponsor/headspace__1_.png";
import angelList from "../../Assets/sponsor/angel-list.png";
import robinhood from "../../Assets/sponsor/robinhood_logo.png";

export const Sponsor = () => {
  return (
    <div className="w-full flex flex-col items-center mt-10 ">
      <div className="text-[45px] mt-10 font-extrabold w-[70%] font-[Open Sans] leading-[70px] text-center">
        Millions run on Notion every day
        <div className="text-[18px] leading-tight text-center ">
          Powering the world’s best teams, from next-generation startups <br />{" "}
          to established enterprises.
        </div>
        <div className="text-[18px] leading-tight text-center cursor-pointer text-blue-500 gap-2 hover:underline flex items-center justify-center mt-3">
          Read customers stories <FaAngleRight />
        </div>
      </div>
      <div className="w-[50%] mt-5">
        <div className=" flex flex-wrap mt-3  gap-10 justify-center items-center  ">
          <img src={figma} alt="" className=" h-[30px]" />
          <img src={pixar} alt="" className=" h-[30px]" />
          <img src={doordash} alt="" className=" h-[30px]" />
          <img src={nike} alt="" className=" h-[30px]" />
          <img src={amazon} alt="" className=" h-[30px]" />
          <img src={pinterest} alt="" className=" h-[30px]" />
          <img src={gElectric} alt="" className=" h-[30px]" />
          <img src={uber} alt="" className=" h-[30px]" />
          <img src={plaid} alt="" className=" h-[30px]" />
          <img src={toyota} alt="" className=" h-[30px]" />
          <img src={snowflake} alt="" className=" h-[30px]" />
          <img src={headspace} alt="" className=" h-[30px]" />
          <img src={angelList} alt="" className=" h-[30px]" />
          <img src={robinhood} alt="" className=" h-[30px]" />
        </div>
      </div>
    </div>
  );
};
