import { FaArrowRight } from "react-icons/fa";
import avatar from "../../Assets/Community/avatars.webp";

export const Community = () => {
  return (
    <div>
      <div className="w-full flex flex-col items-center mt-10 ">
        <div className="w-[50%] text-[50px] font-bold leading-tight text-center ">
          Join a global movement. Unleash your creativity.
        </div>
        <div className="w-[40%] my-5 text-[16px] text-center ">
          Our vibrant community produces content, teaches courses, and leads
          events all over the world.
        </div>
        <div className="text-blue-500 flex gap-2 items-center ">
          Learn more <FaArrowRight />
        </div>

        <div className="my-6">
          <img src={avatar} alt="" />
        </div>

        <div className=" w-[70%] grid lg:grid-cols-3 gap-5 md:grid-cols-2 sm:grid-cols-1 ">
          <div className=" p-[20px] bg-[#f6f5f4] rounded-lg ">
            <div className="text-[60px] font-sans font-bold text-blue-500 ">
              150+
            </div>
            <div className="text-[15px] font-semibold ">community groups</div>
          </div>
          <div className=" p-[20px] bg-[#f6f5f4] rounded-lg ">
            <div className="text-[60px] font-sans font-bold text-blue-500 ">
              1M+
            </div>
            <div className="text-[15px] font-semibold ">
              countries represented
            </div>
          </div>
          <div className=" p-[20px] bg-[#f6f5f4] rounded-lg ">
            <div className="text-[60px] font-sans font-bold text-blue-500 ">
              50+
            </div>
            <div className="text-[15px] font-semibold ">community members</div>
          </div>
        </div>
      </div>
    </div>
  );
};
