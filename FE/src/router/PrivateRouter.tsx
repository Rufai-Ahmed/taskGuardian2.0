import { FC, PropsWithChildren } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export const PrivateRouter: FC<PropsWithChildren> = ({ children }) => {
  const user = useSelector((state: any) => state.user);

  return (
    <div>
      {user ? (
        <div>{children}</div>
      ) : (
        <div>
          <Navigate to={`/login`} />
        </div>
      )}
    </div>
  );
};
