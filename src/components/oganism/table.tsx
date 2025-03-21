/* eslint-disable @typescript-eslint/no-explicit-any */
// src/components/Table.jsx

const Table = ({ columns, data }: any) => {
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
          {data?.map((row: any, rowIndex: any) => (
            <tr key={rowIndex} className="">
              {columns.map((col: any) => (
                <td key={col.key} className=" text-sm text-center p-2">
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
