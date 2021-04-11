import React from "react";
import { MainNavigation } from "./MainNavigation";

interface Props {
  children: React.ReactNode;
}

export const AppLayout = ({ children }: Props): JSX.Element => {
  return (
    <div className="mx-auto w-9/12 my-8">
      <MainNavigation />
      {children}
    </div>
  );
};
