import { useQuery } from "@tanstack/react-query";
import { getProjects } from "../APIs/API";
import { useDispatch } from "react-redux";
import { addProject } from "../global/reduxState";
import { useSelector } from "react-redux";

export const projectHook = () => {
  const userID = useSelector((state: any) => state.user);

  const { data } = useQuery({
    queryKey: ["project"],
    queryFn: () => getProjects(userID.id),
    refetchInterval: 2000,
  });

  const dispatch = useDispatch();

  dispatch(addProject(data?.data?.data?.project));

  return { data };
};
