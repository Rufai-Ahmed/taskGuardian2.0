import { useQuery } from "@tanstack/react-query";
import { getTasks } from "../APIs/API";
import { useDispatch } from "react-redux";
import { addTask } from "../global/reduxState";
import { useSelector } from "react-redux";

export const taskHook = () => {
  const ID: any = useSelector((state: any) => state.user)!.id;

  const { data } = useQuery({
    queryKey: ["tasks"],
    queryFn: () => getTasks(ID),
    refetchInterval: 2000,
  });

  const dispatch = useDispatch();

  const task = dispatch(addTask(data));
  console.log("tt", task);

  return { data };
};
