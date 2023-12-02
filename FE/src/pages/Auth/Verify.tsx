import { AiFillEye } from "react-icons/ai";
import logo from "../../Assets/logo.png";
import { LuEyeOff } from "react-icons/lu";
import { useState } from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { createAccount, verifyAccount } from "../../APIs/authAPI";
import { NavigateFunction, useNavigate } from "react-router-dom";
interface iSubmit {
  email: string;
  vToken: string;
}

export const Verify = () => {
  const navigate: NavigateFunction = useNavigate();

  const [toggle, setToggle] = useState(true);

  const schema = yup.object({
    email: yup.string().required("Your name is required to continue"),
    vToken: yup.string().required("Please put in your one-time token"),
  });

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onHandleSubmit = handleSubmit((data: iSubmit) => {
    verifyAccount(data).then((res: any) => {
      if (res?.message) {
      } else {
        navigate("/login");
      }
    });
  });

  return (
    <div>
      <div className="w-full flex flex-col items-center">
        <div className="w-[70%] h-[100px] flex items-center  ">
          <img src={logo} className="h-[60%]" />
        </div>
        <div className="w-[80%] h-[calc(100vh-100px)] flex flex-col items-center ">
          <div className="text-[50px] font-bold ">Verify</div>
          <form
            onSubmit={onHandleSubmit}
            className="w-[70%] flex flex-col items-center mt-10 "
          >
            <div className="w-[300px] flex flex-col gap-2">
              <div className="text-[14px]">
                Email
                <input
                  {...register("email")}
                  type="email"
                  placeholder="Enter your email..."
                  className="w-full rounded-sm border bg-[#f7f5f3] text-[#b3b1b0] px-2 py-1 outline-none "
                />
                <div className="w-full text-[11px] text-red-500 flex justify-end ">
                  {errors.email?.message}
                </div>
              </div>

              <div className="text-[14px]">
                Token
                <input
                  {...register("vToken")}
                  type="token"
                  placeholder="Enter your one-time token..."
                  className="w-full rounded-sm border bg-[#f7f5f3] text-[#b3b1b0] px-2 py-1 outline-none "
                />
                <div className="w-full text-[11px] text-red-500 flex justify-end ">
                  {errors.vToken?.message}
                </div>
              </div>

              <button
                type="submit"
                className="w-full rounded-md border border-red-200 cursor-pointer bg-[#fdf5f2] text-red-500 px-2 py-1 flex justify-center mt-5"
              >
                Continue
              </button>
            </div>
          </form>

          <div className="text-center w-[100%] mt-20 text-[14px] text-[#b3b1b0] ">
            By clicking “Continue” above, you acknowledge that you have read and
            understood, <br /> and agree to Notion's{" "}
            <span className="underline cursor-pointer">Terms & Conditions</span>{" "}
            and <span className="underline cursor-pointer">Privacy Policy</span>
            .
          </div>
        </div>
      </div>
    </div>
  );
};
