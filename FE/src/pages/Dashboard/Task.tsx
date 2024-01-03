import moment from "moment";
import { FaCheck } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import { LuClock10, LuLoader } from "react-icons/lu";
import { useDispatch } from "react-redux";
import { changeToggleT } from "../../global/reduxState";

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup/src/yup.js";
import { createProject } from "../../APIs/API";
import { useParams } from "react-router-dom";

export const Task = () => {
  const dispatch = useDispatch();

  const { userID }: any = useParams();

  const schema = yup.object({
    projectName: yup.string().required(),
    comment: yup.string(),
    taskTitle: yup.string().required(),
  });

  const { handleSubmit, register } = useForm({
    resolver: yupResolver(schema),
  });

  const onHandleSubmit = handleSubmit((data) => {
    createProject(data, userID)?.then(() => {
      dispatch(changeToggleT(false));
    });

    // createTask(data, )
  });

  return (
    <form
      className="absolute top-0 right-0 overflow-y-auto "
      onSubmit={onHandleSubmit}
    >
      <div className="w-[50vw] shadow-2xl flex justify-center bg-white h-screen ">
        <div className="w-[80%]  ">
          <input
            {...register("projectName")}
            type="text"
            placeholder="Project Name"
            className="border-none w-full text-[40px] my-16 placeholder:text-black outline-none "
          />

          <div className="flex flex-col gap-3 ">
            <div className="flex gap-20 items-center text-gray-500 text-[15px]">
              <div className="flex gap-5 items-center">
                <LuClock10 />
                <div>Date Created</div>
              </div>

              <div>{moment(new Date().getTime()).fromNow()}</div>
            </div>

            <div className="flex gap-20 items-center text-gray-500 text-[15px]">
              <div className="flex gap-5 items-center">
                <LuLoader />
                <div>Status</div>
              </div>

              <div>
                <div className="flex gap-2 items-center p-1 rounded-xl bg-red-200 text-red-500  ">
                  <div className="h-2 w-2 rounded-full bg-red-600 " />
                  To Do
                </div>
              </div>
            </div>
          </div>

          <div className="flex gap-5 py-5 border-y mt-10 ">
            <div className="w-9 h-9 flex items-center justify-center text-[14px] text-white bg-zinc-400 rounded-full ">
              AZ
            </div>
            <input
              {...register("comment")}
              type="text"
              placeholder="Add a comment..."
              className="placeholder: text-[15px] outline-none border-none flex flex-1 "
            />
          </div>

          <div>
            <div className="text-[30px] font-bold mt-5 ">Task</div>
            <textarea
              {...register("taskTitle")}
              placeholder="Input task here"
              className="w-full border-none outline-none "
            />

            <div className="flex gap-5">
              <FaXmark
                size={40}
                className="hover:text-red-500 text-black transition-all duration-300 cursor-pointer"
                onClick={() => {
                  dispatch(changeToggleT(false));
                }}
              />
              <button type="submit">
                <FaCheck
                  size={35}
                  className="hover:text-green-500 text-black transition-all duration-300 cursor-pointer"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};
