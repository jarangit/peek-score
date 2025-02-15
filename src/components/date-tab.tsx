/* eslint-disable @typescript-eslint/no-empty-object-type */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
// src/components/DateTaps.jsx
import React from "react";
import { format } from "date-fns";

interface DateTapsProps {}

const DateTaps: React.FC<DateTapsProps> = () => {
  const getFiveDaysArray = (): Date[] => {
    const today = new Date();
    const days: any = [];

    for (let i = -2; i <= 2; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      days.push({
        text:
          date.getTime() == today.getTime() ? "Today" : format(date, "dd/MM"),
        date: date.getTime(),
      });
    }

    return days;
  };

  const fiveDaysArray: any[] = getFiveDaysArray();

  return (
    <div className="flex justify-center w-full space-x-2">
      {fiveDaysArray.map((item: any, index: any) => (
        <div
          key={index}
          className="text-center px-3 py-1 rounded-md font-semibold bg-black"
        >
          {item.text}
        </div>
      ))}
    </div>
  );
};

export default DateTaps;
