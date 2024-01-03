import { useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { AiOutlineStar } from "react-icons/ai";
import { FaAngleDown, FaSearch } from "react-icons/fa";
import {
  FaBoltLightning,
  FaEllipsis,
  FaRegRectangleList,
} from "react-icons/fa6";
import { LuClock10, LuPlus, LuStickyNote } from "react-icons/lu";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { changeToggleT } from "../../global/reduxState";
import { useParams } from "react-router-dom";
import { PTask } from "./PTask";

export const PTaskList = () => {
  const { projectID }: any = useParams();
  const [check, setCheck] = useState(false);
  const dispatch = useDispatch();

  let toggle = useSelector((state: any) => state.toggleT);
  let user = useSelector((state: any) => state.user);
  console.log(user);

  let allProject = useSelector((state: any) => state.project);
  const project = allProject?.find((el: any) => el._id === projectID);

  const onDrag = (res: any) => {
    console.log(res);
  };

  const arrProj = Object.entries(project?.myTask ? project?.myTask : [1, 2, 3]);
  if (project) {
    console.log("arr", arrProj);
  }

  return (
    <DragDropContext onDragEnd={onDrag}>
      <div>
        <div
          className=" w-full flex flex-col items-center  "
          onClick={() => {}}
        >
          <div className="w-[95%] flex justify-between h-[70px] items-center  ">
            <div className="text-[16px] gap-5 flex items-center  ">
              <div> Task List</div>
              <div className="p-1 border rounded-md text-gray-400 text-[14px] ">
                Offline
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
            <div className="text-[40px] font-bold ">
              {" "}
              {project?.projectName} Task List
            </div>
            <div className="text-[14px]  ">
              Use this template to track your personal tasks.
            </div>
            <div className="text-[14px]  ">
              Click{" "}
              <span className="bg-gray-200 text-[12px] p-[2px] rounded-sm text-red-600 ">
                + New
              </span>{" "}
              to create a new task directly on this board.
            </div>
            <div className="text-[14px]  ">
              Click an existing task to add additional context or subtasks.
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

            <div className="flex mt-2 gap-4 ">
              {arrProj &&
                arrProj.map((el: any, i) => (
                  <Droppable droppableId={el[0]} key={el[0]}>
                    {(prov) => (
                      <div
                        className="w-[250px] min-h-[10px] text-sm  "
                        ref={prov.innerRef}
                        {...prov.droppableProps}
                        key={el[0]}
                      >
                        <div className="flex items-center gap-3 mb-5">
                          <div className="flex gap-2 items-center p-2 rounded-xl py-1 bg-red-300 text-red-500  ">
                            <div className="h-2 w-2 rounded-full bg-red-600 capitalize " />
                            {el[0]}
                          </div>
                          <div>
                            {el && el[1]?.data?.length
                              ? el[1]?.data?.length
                              : 0}
                          </div>
                        </div>

                        <div className="max-h-[calc(100vh-50vh)] overflow-y-auto  flex flex-col ">
                          <Draggable
                            draggableId={el[1]?.id?.toString()}
                            index={i}
                            key={el[0]}
                          >
                            {(prov) =>
                              el[1]?.data?.map((EL: any) => (
                                <div
                                  className="w-full mb-2 rounded-md border bg-gray-100 "
                                  {...prov.dragHandleProps}
                                  {...prov.draggableProps}
                                  ref={prov.innerRef}
                                  key={i}
                                >
                                  <div className="text-[14px] font-bold mb-3 px-3 py-2">
                                    <div className="text-[16px] mb-4 ">
                                      Tasks
                                    </div>
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
                                        <div className="line-through">{EL}</div>
                                      ) : (
                                        <div>{EL}</div>
                                      )}
                                    </div>
                                  </div>

                                  <div className="flex gap-5 bg-white items-center py-3 border-t border-gray-200 pl-3 ">
                                    <LuStickyNote />
                                    <div>{project?.projectName}</div>
                                  </div>
                                </div>
                              ))
                            }
                          </Draggable>
                        </div>

                        <div
                          className="mt-5 w-full hover:bg-gray-200 py-1 pl-1 cursor-pointer duration-300 transition-all  "
                          onClick={() => {
                            dispatch(changeToggleT(true));
                          }}
                        >
                          + New
                        </div>
                        {prov.placeholder}
                      </div>
                    )}
                  </Droppable>
                ))}
            </div>
            <div>{toggle ? <PTask /> : ""}</div>
          </div>
        </div>
      </div>
    </DragDropContext>
  );
};
