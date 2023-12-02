import React, { useState } from "react";
import { AiFillPlusCircle } from "react-icons/ai";
import {
  FaAngleDoubleLeft,
  FaAngleDown,
  FaAngleRight,
  FaAngleUp,
  FaArrowRight,
  FaBook,
  FaBookOpen,
  FaSearch,
  FaShapes,
  FaStickyNote,
  FaTimesCircle,
  FaTrash,
} from "react-icons/fa";
import {
  FaDownload,
  FaHandScissors,
  FaPerson,
  FaRegNoteSticky,
  FaScissors,
  FaTimeline,
} from "react-icons/fa6";
import {
  LuClock10,
  LuPictureInPicture,
  LuPin,
  LuSettings,
} from "react-icons/lu";
import { Link } from "react-router-dom";

export const DashboardSider = () => {
  const [board, setBoard] = useState(false);

  return (
    <div>
      <div className="w-[250px] p-3 bg-[#f9f9f9]  h-screen text-gray-500 ">
        <div className="flex items-center justify-between w-full ">
          <div className="rounded-lg text-[14px] p-2 bg-orange-500 text-white ">
            AZ
          </div>
          <div className="text-[15px] "> Absolute Zero</div>
          <div className="text-[11px] ">
            <FaAngleUp />
            <FaAngleDown />
          </div>
          <div>
            <FaAngleDoubleLeft />
          </div>
        </div>

        <div className="mt-5">
          <div className="w-full flex py-1 pl-1 cursor-pointer rounded-md hover:bg-orange-100 transition-all duration-300 gap-5 items-center text-[14px] ">
            <FaSearch size={13} /> Search
          </div>

          <div className="w-full flex py-1 pl-1 cursor-pointer rounded-md hover:bg-orange-100 transition-all duration-300 gap-5 items-center text-[14px] ">
            <LuClock10 size={13} /> Updates
          </div>

          <div className="w-full flex py-1 pl-1 cursor-pointer rounded-md hover:bg-orange-100 transition-all duration-300 gap-5 items-center text-[14px] ">
            <LuSettings size={13} /> Settings & members
          </div>

          <div className="w-full flex py-1 pl-1 cursor-pointer rounded-md hover:bg-orange-100 transition-all duration-300 gap-5 items-center text-[14px] ">
            <AiFillPlusCircle size={13} /> New page
          </div>
        </div>

        <div className="mt-5">
          <div className="w-full flex py-1 pl-1 cursor-pointer rounded-md hover:bg-orange-100 transition-all duration-300 gap-5 items-center text-[14px] ">
            <FaAngleRight
              size={13}
              className="hover:bg-orange-200 transition-all duration-300 rounded-md h-4 w-4 "
            />{" "}
            <FaRegNoteSticky size={14} /> Getting Started
          </div>

          <div className="w-full flex py-1 pl-1 cursor-pointer rounded-md hover:bg-orange-100 transition-all duration-300 gap-5 items-center text-[14px] ">
            <FaAngleRight
              size={13}
              className="hover:bg-orange-200 transition-all duration-300 rounded-md h-4 w-4 "
            />{" "}
            <LuPin size={14} /> Quick Note
          </div>

          <div className="w-full flex py-1 pl-1 cursor-pointer rounded-md hover:bg-orange-100 transition-all duration-300 gap-5 items-center text-[14px] ">
            <FaAngleRight
              size={13}
              className="hover:bg-orange-200 transition-all duration-300 rounded-md h-4 w-4 "
            />{" "}
            <FaPerson size={14} /> Personal Home
          </div>

          <div className="w-full flex py-1 pl-1 cursor-pointer rounded-md  transition-all hover:bg-orange-100 duration-300 gap-5 items-start text-[14px] ">
            {board === false ? (
              <FaAngleRight
                onClick={() => {
                  setBoard(!board);
                }}
                size={13}
                className="hover:bg-orange-200 transition-all duration-300 rounded-md h-4 w-4 "
              />
            ) : (
              <FaAngleDown
                onClick={() => {
                  setBoard(!board);
                }}
                size={13}
                className="hover:bg-orange-200 transition-all duration-300 rounded-md h-4 w-4 "
              />
            )}
            <div>
              <div
                className="flex items-center gap-5 "
                onClick={() => {
                  setBoard(!board);
                }}
              >
                <FaScissors size={14} /> Task List
              </div>
            </div>
          </div>
          {board ? (
            <Link to={`/dashboard/122/tasklist`}>
              <div className="flex items-center w-full cursor-pointer duration-300 transition-all text-[14px] mt-1 gap-5 hover:bg-orange-100 ">
                <span className="ml-10 mb-1">.</span> Board View
              </div>
            </Link>
          ) : (
            ""
          )}

          <div className="w-full flex py-1 pl-1 cursor-pointer rounded-md hover:bg-orange-100 transition-all duration-300 gap-5 items-center text-[14px] ">
            <FaAngleRight
              size={13}
              className="hover:bg-orange-200 transition-all duration-300 rounded-md h-4 w-4 "
            />{" "}
            <FaBookOpen size={14} /> Journal
          </div>

          <div className="w-full flex py-1 pl-1 cursor-pointer rounded-md hover:bg-orange-100 transition-all duration-300 gap-5 items-center text-[14px] ">
            <FaAngleRight
              size={13}
              className="hover:bg-orange-200 transition-all duration-300 rounded-md h-4 w-4 "
            />{" "}
            <FaBook size={14} /> Reading List
          </div>

          <div className="w-full flex py-1 pl-1 cursor-pointer rounded-md hover:bg-orange-100 transition-all duration-300 gap-5 items-center text-[14px] ">
            <FaAngleRight
              size={13}
              className="hover:bg-orange-200 transition-all duration-300 rounded-md h-4 w-4 "
            />{" "}
            <FaHandScissors size={14} /> Task
          </div>
        </div>

        <div className="mt-5">
          <div className="w-full flex py-1 pl-1 cursor-pointer rounded-md hover:bg-orange-100 transition-all duration-300 gap-5 items-center text-[14px] ">
            <LuPictureInPicture size={13} /> Create a teamspace
          </div>

          <div className="w-full flex py-1 pl-1 cursor-pointer rounded-md hover:bg-orange-100 transition-all duration-300 gap-5 items-center text-[14px] ">
            <FaShapes size={13} /> Templates
          </div>

          <div className="w-full flex py-1 pl-1 cursor-pointer rounded-md hover:bg-orange-100 transition-all duration-300 gap-5 items-center text-[14px] ">
            <FaDownload size={13} /> Import
          </div>

          <div className="w-full flex py-1 pl-1 cursor-pointer rounded-md hover:bg-orange-100 transition-all duration-300 gap-5 items-center text-[14px] ">
            <FaTrash size={13} /> Trash
          </div>
        </div>
      </div>
    </div>
  );
};
