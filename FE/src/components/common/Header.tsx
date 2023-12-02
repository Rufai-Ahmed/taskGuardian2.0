import { useEffect, useState } from "react";
import logo from "../../Assets/logo.png";
import { AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";

export const Header = () => {
  const [state, setState] = useState(false);

  const scroller = () => {
    if (window.scrollY > 0) {
      setState(true);
    } else {
      setState(false);
    }
  };

  window.addEventListener("scroll", scroller);

  return (
    <div>
      {state && state ? (
        <div className=" z-20 w-full h-[60px] bg-white top-0 fixed border-b flex justify-center items-center ">
          <div className="w-[95%] h-full flex justify-between ">
            <div className="flex gap-3   ">
              <img
                className="lg:w-[15%] object-contain md:w-[80%] sm:w-[75%] w-[75%]"
                src={logo}
              />

              <div className=" items-center gap-4 text-[16px] lg:flex md:hidden sm:hidden hidden  ">
                <div>Product</div>
                <div>Download</div>
                <div>Solutions</div>
                <div>Resources</div>
                <div>Pricing</div>
              </div>
            </div>

            <div className="flex items-center ">
              <div className="pr-3 border-r  lg:block md:hidden sm:hidden hidden">
                Request a demo
              </div>
              <Link to="/login">
                <div className="px-3  lg:block md:hidden sm:hidden hidden  ">
                  Log in
                </div>
              </Link>
              <Link to="/signup">
                <div className="px-3 py-1 rounded-md bg-black text-white   ">
                  Get TG free
                </div>
              </Link>

              <AiOutlineMenu
                size={20}
                className="ml-5 md:block lg:hidden sm:block  block"
              />
            </div>
          </div>
        </div>
      ) : (
        <div className=" z-20 w-full h-[60px] bg-white  top-0 fixed flex justify-center items-center ">
          <div className="w-[95%] h-full flex justify-between ">
            <div className="flex gap-3   ">
              <img
                className="lg:w-[15%] object-contain md:w-[80%] sm:w-[75%] w-[75%]"
                src={logo}
              />

              <div className=" items-center gap-4 text-[16px] lg:flex md:hidden sm:hidden hidden  ">
                <div>Product</div>
                <div>Download</div>
                <div>Solutions</div>
                <div>Resources</div>
                <div>Pricing</div>
              </div>
            </div>

            <div className="flex items-center ">
              <div className="pr-3 border-r  lg:block md:hidden sm:hidden hidden">
                Request a demo
              </div>
              <Link to="/login">
                <div className="px-3  lg:block md:hidden sm:hidden hidden  ">
                  Log in
                </div>
              </Link>
              <Link to="/signup">
                <div className="px-3 py-1 rounded-md bg-black text-white   ">
                  Get TG free
                </div>
              </Link>

              <AiOutlineMenu
                size={20}
                className="ml-5 md:block lg:hidden sm:block  block"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
