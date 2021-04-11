import { format, parseISO } from "date-fns";
import React from "react";

interface Props {
  date: string;
  size?: "xs" | "md";
}

export const BlogDate = ({ date, size = "xs" }: Props): JSX.Element => {
  return (
    <div className={`text-gray-600 text-${size}`}>
      {format(parseISO(date), "MMMM do, uuu")}
    </div>
  );
};
