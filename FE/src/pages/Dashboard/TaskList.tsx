import { useState } from "react";
import { AiOutlineStar } from "react-icons/ai";
import { FaAngleDown, FaSearch } from "react-icons/fa";
import {
  FaBoltLightning,
  FaEllipsis,
  FaRegRectangleList,
} from "react-icons/fa6";
import { LuClock10, LuPlus, LuStickyNote } from "react-icons/lu";
import { Task } from "./Task";
import { useSelector } from "react-redux";
import {} from "../../global/reduxState";
import { taskHook } from "../../hooks/taskHook";
import { Link } from "react-router-dom";

export const TaskList = () => {
  taskHook();
  const [check, setCheck] = useState(false);
  let toggle = useSelector((state: any) => state.toggleT);
  let tasks = useSelector((state: any) => state.tasks);
  const ID: any = useSelector((state: any) => state.user);

  return (
    <div>
      <div className="flex flex-col items-center w-full " onClick={() => {}}>
        <div className="w-[95%] flex justify-between h-[70px] items-center  ">
          <div className="text-[16px] gap-5 flex items-center  ">
            <div>Task List</div>
            <div className="p-1 border rounded-md text-gray-400 text-[14px] ">
              Online
            </div>
          </div>
          <div className="flex items-center gap-5 text-[15px] ">
            <div className="py-1 px-3 hover:bg-gray-200 transition-all duration-300 cursor-pointer rounded-sm ">
              Share
            </div>
            <div className="py-2 px-2 hover:bg-gray-200 transition-all duration-300 cursor-pointer rounded-sm ">
              <LuClock10 />
            </div>
            <div className="py-2 px-2 hover:bg-gray-200 transition-all duration-300 cursor-pointer rounded-sm ">
              <AiOutlineStar />
            </div>
            <div className="py-2 px-2 hover:bg-gray-200 transition-all duration-300 cursor-pointer rounded-sm ">
              <FaEllipsis />
            </div>
          </div>
        </div>

        <div className="w-[85%]   ">
          <div className="text-[40px] font-bold ">Task List</div>
          <div className="text-[14px]  ">
            Use this template to track all of your personal tasks.
          </div>
        </div>

        <div className="w-[85%] mt-8  ">
          <div className="w-full flex border-b items-center justify-between ">
            <div className=" flex items-center gap-3 pb-2 border-b border-black ">
              <FaRegRectangleList />
              <div className="text-[14px]">Board View</div>
              <LuPlus
                className="h-6 w-6 p-1 cursor-pointer transition-all duration-300 rounded-md hover:bg-gray-200 "
                size={10}
              />
            </div>

            <div className="flex text-[14px] gap-5 items-center ">
              <div>Filter</div>
              <div>Sort</div>
              <div>
                <FaBoltLightning />
              </div>
              <div>
                <FaSearch />
              </div>
              <div>
                <FaEllipsis />
              </div>
              <div className="px-2 py-1 rounded-sm text-white flex items-center bg-blue-500 ">
                <div className="border-r border-white mr-2 pr-2 ">New</div>
                <FaAngleDown />
              </div>
            </div>
          </div>

          <div className="flex mt-2 gap-4 flex-wrap ">
            {tasks &&
              tasks!.data!.tasks!.map((el: any) => (
                <Link to={`/dashboard/${ID.id}/${el._id}/projectlist`}>
                  <div className="w-[250px] text-sm rounded-md border bg-gray-100 ">
                    <div className="text-[14px] font-bold mb-3 px-3 py-2">
                      <div className="text-[16px] mb-4 ">Tasks</div>
                      <div className="flex gap-2">
                        {check ? (
                          <input
                            type="checkbox"
                            onClick={() => {
                              setCheck(!check);
                            }}
                            checked
                            value={"check"}
                          />
                        ) : (
                          <input
                            type="checkbox"
                            onClick={() => {
                              setCheck(!check);
                            }}
                            value={"check"}
                          />
                        )}
                        {check ? (
                          <div className="line-through">{el.task}</div>
                        ) : (
                          <div>{el.task}</div>
                        )}
                      </div>
                    </div>

                    <div className="flex gap-5 bg-white items-center py-3 border-t border-gray-200 pl-3 ">
                      <LuStickyNote />
                      <div>{el.projectName}</div>
                    </div>
                  </div>
                </Link>
              ))}
          </div>

          <div>{toggle ? <Task /> : ""}</div>
        </div>
      </div>
    </div>
  );
};
