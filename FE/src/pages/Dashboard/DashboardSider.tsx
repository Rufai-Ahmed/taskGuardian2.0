import { Dispatch, useEffect, useState } from "react";
import { AiFillPlusCircle, AiFillProject } from "react-icons/ai";
import {
  FaAngleDoubleLeft,
  FaAngleDown,
  FaAngleRight,
  FaAngleUp,
  FaBook,
  FaBookOpen,
  FaPlus,
  FaSearch,
  FaShapes,
  FaStarAndCrescent,
  FaTrash,
} from "react-icons/fa";
import {
  FaDownload,
  FaPerson,
  FaRegNoteSticky,
  FaScissors,
} from "react-icons/fa6";
import {
  LuClock10,
  LuLogOut,
  LuPictureInPicture,
  LuPin,
  LuSettings,
} from "react-icons/lu";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { projectHook } from "../../hooks/projectHook";
import { changeToggleP, logout } from "../../global/reduxState";
import { useDispatch } from "react-redux";
import { AnyAction } from "@reduxjs/toolkit";
import { Project } from "./Project";
import { userHook } from "../../hooks/userHook";
import { NavLink } from "react-router-dom";

export const DashboardSider = () => {
  userHook();
  const navigate = useNavigate();
  const [board, setBoard] = useState(false);
  const [project, setProject] = useState(false);
  const projects = projectHook()!.data?.data?.data?.project;
  const dispatch: Dispatch<AnyAction> = useDispatch();
  const toggle = useSelector((state: any) => state.toggleP);
  const ID: any = useSelector((state: any) => state.user);
  const user: any = useSelector((state: any) => state.userDetail);

  useEffect(() => {
    if (ID === null) {
      navigate("/login");
    }
  }, [ID]);

  const userName = user?.userName;

  const initials =
    userName?.split(" ")[0]?.charAt(0) +
    (userName?.split(" ")[1]?.charAt(0)
      ? userName?.split(" ")[1]?.charAt(0)
      : userName?.split(" ")[0]?.charAt(userName?.length - 1));

  return (
    <div className="">
      {user?.plan !== "premo" ? (
        <NavLink to="/pricing">
          <div className="absolute bottom-2 bg-orange-400 text-white animate-bounce right-2 rounded-md px-2 flex gap-3 items-center py-2">
            Upgrade
            <FaStarAndCrescent />
          </div>
        </NavLink>
      ) : (
        ""
      )}
      <div className="p-3 bg-[#f9f9f9]  min-h-screen text-gray-500 overflow-y-auto flex flex-col justify-between   ">
        <div>
          <div className="flex items-center justify-between w-full  ">
            <div className="rounded-lg text-[14px] p-2 bg-orange-500 text-white ">
              {initials}
            </div>
            <div className=" whitespace-nowrap w-[50%] relative group">
              <div className="text-[15px] overflow-hidden whitespace-nowrap overflow-ellipsis cursor-pointer text-center   ">
                {" "}
                {userName}
              </div>
              {user?.userName.length > 11 ? (
                <div className="absolute top-2 text-white p-2 -left-10 hidden group-hover:flex bg-black  text-sm ">
                  {userName}
                </div>
              ) : (
                ""
              )}
            </div>

            <div className="gap-1 items-center flex">
              <div className="text-[11px] ">
                <FaAngleUp />
                <FaAngleDown />
              </div>
              <div>
                <FaAngleDoubleLeft />
              </div>
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
              <Link to={`/dashboard/${ID!.id}/tasklist`}>
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
              {project ? (
                <FaAngleDown
                  onClick={() => {
                    setProject(false);
                  }}
                  size={13}
                  className="hover:bg-orange-200 transition-all duration-300 rounded-md h-4 w-4 "
                />
              ) : (
                <FaAngleRight
                  onClick={() => {
                    setProject(true);
                  }}
                  size={13}
                  className="hover:bg-orange-200 transition-all duration-300 rounded-md h-4 w-4 "
                />
              )}{" "}
              <AiFillProject size={14} /> Project List{" "}
              <FaPlus
                className="w-5 p-[4px] hover:bg-orange-200 h-5 rounded-md text-[10px] bg-orange-100  "
                onClick={() => {
                  dispatch(changeToggleP(true));
                }}
              />
            </div>
            {toggle ? <Project /> : ""}

            {project ? (
              <div className="w-full text-[14px] ">
                {projects.map((el: any) => (
                  <Link to={`/dashboard/${ID!.id}/${el._id}/projectlist`}>
                    <div className="flex w-full cursor-pointer transition-all duration-300 hover:bg-orange-100 rounded-md gap-3 items-center">
                      <div className="w-2 h-2 rounded-full bg-gray-400 ml-10 " />

                      <div>{el.projectName}</div>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              ""
            )}
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

        <div
          className="] w-full p-1 transition-all duration-300 hover:bg-orange-300 left-0 justify-center flex rounded-md cursor-pointer gap-5 items-center "
          onClick={() => {
            dispatch(logout());
            navigate("/");
          }}
        >
          Log out <LuLogOut />
        </div>
      </div>
    </div>
  );
};
