import { format, parseISO } from "date-fns";
import React from "react";

interface Props {
  date: string;
}

export const BlogDate = ({ date }: Props): JSX.Element => {
  return (
    <div className={`text-gray-600 dark:text-gray-400`}>
      {format(parseISO(date), "MMMM do, uuu")}
    </div>
  );
};
