/* eslint-disable @typescript-eslint/no-explicit-any */
// src/components/Table.jsx
import React from "react";

const Table = ({ columns, data }: any) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-background-dark">
            {columns.map((col: any) => (
              <th
                key={col.key}
                className="border border-gray-300 px-4 py-2 text-left"
              >
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row: any, rowIndex: any) => (
            <tr key={rowIndex} className="">
              {columns.map((col: any) => (
                <td key={col.key} className="border border-gray-300 px-4 py-2">
                  {col.render ? col.render(row[col.key], row) : row[col.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
