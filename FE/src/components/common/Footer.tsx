import React, { useState } from "react";
import logo from "../../Assets/logo.png";
import {
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaFacebook,
  FaYoutube,
  FaGlobe,
  FaAngleDown,
} from "react-icons/fa";

export const Footer = () => {
  const [state, setState] = useState<boolean>(false);
  console.log(state);

  return (
    <div>
      <div className="w-full flex flex-col items-center border-t py-10 ">
        <div className="w-[70%] flex gap-32 flex-wrap ">
          <div className="flex flex-col items-center ">
            <img src={logo} alt="" />

            <div className="flex my-5 gap-3 text-[#666666]  ">
              <FaInstagram />
              <FaTwitter />
              <FaLinkedin />
              <FaFacebook />
              <FaYoutube />
            </div>

            <div
              className="w-[150px] border rounded-md h-12 flex items-center justify-center gap-2 cursor-pointer hover:bg-slate-100 transition-all
             duration-300  "
            >
              <FaGlobe />

              <div
                className="relative"
                onClick={() => {
                  setState(!state);
                }}
              >
                English
                {state ? (
                  <div className="w-[270px] px-4 h-[400px] right-[-300px]  bg-white top-0  absolute shadow-xl ">
                    <div className="w-full hover:bg-gray-50 duration-300 transition-all "></div>
                  </div>
                ) : (
                  ""
                )}
              </div>

              <FaAngleDown />
            </div>
          </div>

          <div className="">
            <div className="flex gap-28 flex-wrap">
              <div className="mr-">
                <div className="text-[15px] text-gray-400 mb-6  ">
                  <div className="font-bold text-black  ">Product</div>
                  <div className="hover:text-blue-300 cursor-pointer ">
                    Wikis
                  </div>
                  <div className="hover:text-blue-300 cursor-pointer ">
                    Projects
                  </div>
                  <div className="hover:text-blue-300 cursor-pointer ">
                    Docs
                  </div>
                  <div className="hover:text-blue-300 cursor-pointer ">
                    Notion AI
                  </div>
                  <div className="hover:text-blue-300 cursor-pointer ">
                    What's new
                  </div>
                </div>
                <div className="text-[17px] text-gray-400 ">
                  <div className="font-bold text-black  ">Solutions</div>
                  <div className="hover:text-blue-300 cursor-pointer ">
                    Wikis
                  </div>
                  <div className="hover:text-blue-300 cursor-pointer ">
                    Projects
                  </div>
                  <div className="hover:text-blue-300 cursor-pointer ">
                    Docs
                  </div>
                  <div className="hover:text-blue-300 cursor-pointer ">
                    Notion AI
                  </div>
                  <div className="hover:text-blue-300 cursor-pointer ">
                    Enterprise
                  </div>
                  <div className="hover:text-blue-300 cursor-pointer ">
                    Startups
                  </div>
                  <div className="hover:text-blue-300 cursor-pointer ">
                    Education
                  </div>
                  <div className="hover:text-blue-300 cursor-pointer ">
                    Nonprofits
                  </div>
                  <div className="hover:text-blue-300 cursor-pointer ">
                    Engineering
                  </div>
                  <div className="hover:text-blue-300 cursor-pointer ">
                    Design
                  </div>
                </div>
              </div>

              <div className="mr-20">
                <div className="text-[15px] text-gray-400 mb-6  ">
                  <div className="font-bold text-black  ">Download</div>
                  <div className="hover:text-blue-300 cursor-pointer ">
                    Wikis
                  </div>
                  <div className="hover:text-blue-300 cursor-pointer ">
                    Projects
                  </div>
                  <div className="hover:text-blue-300 cursor-pointer ">
                    Docs
                  </div>
                </div>
                <div className="text-[15px] text-gray-400 mb-6  ">
                  <div className="font-bold text-black  ">Build</div>
                  <div className="hover:text-blue-300 cursor-pointer ">
                    Wikis
                  </div>
                  <div className="hover:text-blue-300 cursor-pointer ">
                    Projects
                  </div>
                  <div className="hover:text-blue-300 cursor-pointer ">
                    Docs
                  </div>
                  <div className="hover:text-blue-300 cursor-pointer ">
                    Notion AI
                  </div>
                  <div className="hover:text-blue-300 cursor-pointer ">
                    Enterprise
                  </div>
                  <div className="hover:text-blue-300 cursor-pointer ">
                    Startups
                  </div>
                </div>
                <div className="text-[15px] text-gray-400 mb-6  ">
                  <div className="font-bold text-black  ">Learn</div>
                  <div className="hover:text-blue-300 cursor-pointer ">
                    Wikis
                  </div>
                  <div className="hover:text-blue-300 cursor-pointer ">
                    Projects
                  </div>
                  <div className="hover:text-blue-300 cursor-pointer ">
                    Docs
                  </div>
                  <div className="hover:text-blue-300 cursor-pointer ">
                    Notion AI
                  </div>
                  <div className="hover:text-blue-300 cursor-pointer ">
                    Enterprise
                  </div>
                </div>
              </div>

              <div className="mr-20">
                <div className="text-[15px] text-gray-400 mb-6  ">
                  <div className="font-bold text-black  ">Get Started</div>
                  <div className="hover:text-blue-300 cursor-pointer ">
                    Wikis
                  </div>
                  <div className="hover:text-blue-300 cursor-pointer ">
                    Projects
                  </div>
                  <div className="hover:text-blue-300 cursor-pointer ">
                    Docs
                  </div>
                  <div className="hover:text-blue-300 cursor-pointer ">
                    Notion AI
                  </div>
                  <div className="hover:text-blue-300 cursor-pointer ">
                    What's new
                  </div>
                  <div className="hover:text-blue-300 cursor-pointer ">
                    Compare vs Jira
                  </div>
                </div>
                <div className="text-[17px] text-gray-400  ">
                  <div className="font-bold text-black  ">Resources</div>
                  <div className="hover:text-blue-300 cursor-pointer ">
                    Wikis
                  </div>
                  <div className="hover:text-blue-300 cursor-pointer ">
                    Projects
                  </div>
                  <div className="hover:text-blue-300 cursor-pointer ">
                    Docs
                  </div>
                  <div className="hover:text-blue-300 cursor-pointer ">
                    Notion AI
                  </div>
                  <div className="hover:text-blue-300 cursor-pointer ">
                    Enterprise
                  </div>
                  <div className="hover:text-blue-300 cursor-pointer ">
                    Startups
                  </div>
                  <div className="hover:text-blue-300 cursor-pointer ">
                    Education
                  </div>
                  <div className="hover:text-blue-300 cursor-pointer ">
                    Nonprofits
                  </div>
                  <div className="hover:text-blue-300 cursor-pointer ">
                    Engineering
                  </div>
                  <div className="hover:text-blue-300 cursor-pointer ">
                    Design
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-16">Do Not Sell or Share My info</div>
            <div className="text-gray-500">© 2023 Task Guardian, Inc.</div>
          </div>
        </div>
      </div>
    </div>
  );
};
