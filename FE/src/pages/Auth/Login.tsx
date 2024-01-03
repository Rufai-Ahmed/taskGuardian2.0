import logo from "../../Assets/logo.png";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginAccount } from "../../APIs/authAPI";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { useDispatch } from "react-redux";
import { login } from "../../global/reduxState";
import { useState } from "react";

interface iSubmit {
  email: string;
  password: string;
}

export const Login = () => {
  const [state, setState] = useState(false);
  const navigate: NavigateFunction = useNavigate();
  const dispatch = useDispatch();

  const schema = yup.object({
    email: yup.string().required("Your name is required to continue"),
    password: yup.string().required("Please put in your password"),
  });

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onHandleSubmit = handleSubmit((data: iSubmit) => {
    setState(true);

    loginAccount(data)
      .then((res: any) => {
        const decodedID: any = jwtDecode(res);

        if (res?.message) {
          setState(false);
        } else {
          setState(false);
          navigate(`/dashboard/${decodedID!.id}`);
          dispatch(login(decodedID));
        }
      })
      .catch(() => {
        setState(false);
      });
  });

  return (
    <div>
      <div className="w-full flex flex-col items-center">
        <div className="w-[70%] h-[100px] flex items-center  ">
          <img src={logo} className="h-[60%]" />
        </div>
        <div className="w-[80%] h-[calc(100vh-100px)] flex flex-col items-center ">
          <div className="text-[50px] font-bold ">Login</div>
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
                Password
                <input
                  {...register("password")}
                  type="password"
                  placeholder="Enter your password..."
                  className="w-full rounded-sm border bg-[#f7f5f3] text-[#b3b1b0] px-2 py-1 outline-none "
                />
                <div className="w-full text-[11px] text-red-500 flex justify-end ">
                  {errors.password?.message}
                </div>
              </div>
              {state ? (
                <button
                  disabled
                  type="button"
                  className="text-white w-full flex justify-center bg-red-500 hover:bg-red-600 transition-all duration-300 focus:ring-4 focus:ring-red-300 font-medium rounded-md text-sm px-5 py-2.5 text-center me-2 mt-5 items-center"
                >
                  <svg
                    aria-hidden="true"
                    role="status"
                    className="inline w-4 h-4 me-3 text-white animate-spin"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="#ebe5e5"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentColor"
                    />
                  </svg>
                  Loading...
                </button>
              ) : (
                <button
                  type="submit"
                  className="w-full rounded-md border border-red-200 cursor-pointer bg-[#fdf5f2] text-red-500 px-2 py-1 flex justify-center mt-5"
                >
                  {state ? "" : "Continue"}
                </button>
              )}
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
