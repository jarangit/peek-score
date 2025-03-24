/* eslint-disable @typescript-eslint/no-explicit-any */
// src/components/Table.jsx

import { useEffect, useState } from "react";
type Props = {
  data: any[];
  columns: any;
  _isCollapsed?: boolean;
};
const Table = ({ columns, data, _isCollapsed = false }: Props) => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [contentData, setContentData] = useState<any[]>();
  useEffect(() => {
    setIsCollapsed(_isCollapsed)
    if (isCollapsed && data?.length) {
      setContentData(data.slice(0, 5));
    } else {
      setContentData(data);
    }
  }, [columns, data, isCollapsed]);
  return (
    <div className="overflow-x-auto p-4 bg-background rounded-lg shadow-md">
      <table className="min-w-full border-collapse">
        <thead>
          <tr className="bg-background-dark">
            {columns.map((col: any) => (
              <th key={col.key} className=" text-center">
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {contentData?.map((row: any, rowIndex: any) => (
            <tr key={rowIndex} className="">
              {columns.map((col: any) => (
                <td
                  key={col.key}
                  className=" text-sm text-center p-2 text-gray-300"
                >
                  {col.render ? col.render(row[col.key], row) : row[col.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-center mt-4">
        <div
          className="mx-auto text-sm text-primary cursor-pointer"
          onClick={() => setIsCollapsed(!isCollapsed)}
        >
          {isCollapsed ? "Show More" : "Show Less"}
        </div>
      </div>
    </div>
  );
};

export default Table;
