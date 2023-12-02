import { AiFillEye } from "react-icons/ai";
import logo from "../../Assets/logo.png";
import { LuEyeOff } from "react-icons/lu";
import { useState } from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { createAccount } from "../../APIs/authAPI";
import { NavigateFunction, useNavigate } from "react-router-dom";
interface iSubmit {
  userName: string;
  email: string;
  password: string;
  confirm?: string | undefined;
}

export const Register = () => {
  const navigate: NavigateFunction = useNavigate();

  const [toggle, setToggle] = useState(true);

  const schema = yup.object({
    userName: yup.string().required("Your name is required to continue"),
    email: yup.string().email().required("Your email is required to continue"),
    password: yup
      .string()
      .min(6)
      .required("A password is required to continue"),
    confirm: yup.string().oneOf([yup.ref("password")]),
  });

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onHandleSubmit = handleSubmit((data: iSubmit) => {
    createAccount(data).then((res: any) => {
      if (res?.message) {
      } else {
        navigate("/verify");
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
          <div className="text-[50px] font-bold ">Sign up</div>
          <form
            onSubmit={onHandleSubmit}
            className="w-[70%] flex flex-col items-center mt-10 "
          >
            <div className="w-[300px] flex flex-col gap-2">
              <div className="text-[14px]">
                Name
                <input
                  {...register("userName")}
                  type="text"
                  placeholder="Enter your name..."
                  className="w-full rounded-sm border bg-[#f7f5f3] text-[#b3b1b0] px-2 py-1 outline-none "
                />
                <div className="w-full text-[11px] text-red-500 flex justify-end ">
                  {errors.userName?.message}
                </div>
              </div>

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
                Password
                <div className="w-full rounded-sm border bg-[#f7f5f3] text-[#b3b1b0] px-2 py-1 flex justify-between">
                  <input
                    {...register("password")}
                    type={toggle ? "password" : "text"}
                    placeholder="Enter your password..."
                    className=" outline-none flex flex-[0.98] bg-transparent  "
                  />
                  {toggle ? (
                    <LuEyeOff
                      size={18}
                      className="cursor-pointer"
                      onClick={() => {
                        setToggle(!toggle);
                      }}
                    />
                  ) : (
                    <AiFillEye
                      size={18}
                      className="cursor-pointer"
                      onClick={() => {
                        setToggle(!toggle);
                      }}
                    />
                  )}
                </div>
                <div className="w-full text-[11px] text-red-500 flex justify-end ">
                  {errors.password?.message}
                </div>
              </div>

              <div className="text-[14px]">
                Confirm Password
                <input
                  {...register("confirm")}
                  type="password"
                  placeholder="Re-enter your password..."
                  className="w-full rounded-sm border bg-[#f7f5f3] text-[#b3b1b0] px-2 py-1 outline-none "
                />
                <div className="w-full text-[11px] text-red-500 flex justify-end ">
                  {errors.confirm?.message}
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
