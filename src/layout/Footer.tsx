import React from "react";
import { Navigation } from "./Navigation";

export const Footer = (): JSX.Element => {
  return (
    <footer className="flex justify-between align-middle bottom-0 bg-white dark:bg-gray-800 z-50 my-8">
      <div className="my-auto">
        &copy; 2021 Bhekani Khumalo. All rights reserved.
      </div>

      <Navigation />
    </footer>
  );
};
