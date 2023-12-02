import { FaArrowRight } from "react-icons/fa";
import hero from "../../Assets/home-hero.webp";
import { HeroProps } from "../../components/props/HeroProps";
import {
  LuMoonStar,
  LuBookOpen,
  LuArrowBigDownDash,
  LuPaperclip,
} from "react-icons/lu";
import heroData from "../../data/hero.json";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <div className="mt-[60px] flex flex-col items-center">
      <div className="text-[60px] mt-10 font-extrabold w-[70%] font-[Open Sans] leading-[70px] text-center ">
        Write, plan, share. <br /> With AI at your side.
        <div className="text-[25px] leading-tight mt-4">
          Notion is the connected workspace where better, faster work happens.
        </div>
      </div>
      <Link to="/signup">
        <div className=" text-[20px] w-[190px]  justify-center mt-4 h-10 bg-black text-white rounded-md flex items-center gap-2 ">
          Get TG free <FaArrowRight />
        </div>
      </Link>
      <div className=" w-[600px] mt-14">
        <img className="w-[100%] object-cover " src={hero} alt="" />
      </div>

      <div
        className="flex gap-4 flex-wrap w-full justify-center
       "
      >
        {heroData.map((el) => (
          <HeroProps
            Icon={
              el.id == 1
                ? LuMoonStar
                : el.id == 2
                ? LuBookOpen
                : el.id == 3
                ? LuArrowBigDownDash
                : el.id == 4
                ? LuPaperclip
                : LuMoonStar
            }
            key={el.id}
            info={el.info}
            name={el.name}
            bg={el.bg}
            color={el.color}
          />
        ))}
      </div>
    </div>
  );
};
