import React from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";

interface Props {
  children: React.ReactNode;
}

export const AppLayout = ({ children }: Props): JSX.Element => {
  return (
    <div className="mx-auto max-w-6xl w-8/12 flex flex-col">
      <Header />
      {children}
      <Footer />
    </div>
  );
};
