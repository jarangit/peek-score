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
    <div className="flex justify-between w-full space-x-4">
      {fiveDaysArray.map((item: any, index: any) => (
        <div
          key={index}
          className="border  w-full  text-center px-4 py-1 rounded-lg font-semibold"
        >
          {item.text}
        </div>
      ))}
    </div>
  );
};

export default DateTaps;
