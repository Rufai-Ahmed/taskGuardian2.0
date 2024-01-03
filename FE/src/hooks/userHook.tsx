import { useQuery } from "@tanstack/react-query";
import { getOneUser } from "../APIs/API";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addUserDetail } from "../global/reduxState";

export const userHook = () => {
  const dispatch = useDispatch();

  const userID = useSelector((state: any) => state.user)!.id;

  const { data } = useQuery({
    queryKey: ["user"],
    queryFn: () => getOneUser(userID),
  });

  dispatch(addUserDetail(data?.data));

  return { data };
};
