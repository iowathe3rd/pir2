type Column = {
  header: string;
  accessor?: string;
};

type TableProps<T> = {
  columns: Column[];
  data: T[];
};

function Table<T extends Record<string, string>>({
  columns,
  data,
}: TableProps<T>) {
  const cellClasses =
    "w-32 h-18 outline outline-1 outline-[#DADADA] text-3xl font-normal leading-9 whitespace-nowrap";

  const emptyCellClass =
    "w-32 h-18 text-3xl font-normal leading-9 whitespace-nowrap";
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead>
          <tr>
            {/* Пустая ячейка для выравнивания с первой колонкой данных */}
            <th className={emptyCellClass}></th>
            {columns.map((column, index) => (
              <th
                key={`th-${index}`}
                className={cellClasses + " border-orange-600 bg-white"}
                style={{
                  fontSize: "24px",
                  fontWeight: "400",
                  lineHeight: "27px",
                  letterSpacing: "0.02em",
                  borderBottom: "7px solid #ED801B",
                }}
              >
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white">
          {data.map((item, rowIndex) => (
            <tr key={`row-${rowIndex}`}>
              <td
                className={cellClasses + " bg-white"}
                style={{
                  fontSize: "24px",
                  fontWeight: "400",
                  lineHeight: "35.1px",
                  letterSpacing: "0.02em",
                }}
              >
                {item.name}
              </td>
              {columns.map((column, colIndex) => (
                <td
                  key={`td-${rowIndex}-${colIndex}`}
                  className={cellClasses + " bg-white text-center"}
                  style={{
                    fontSize: "24px",
                    fontWeight: "400",
                    lineHeight: "35.1px",
                    letterSpacing: "0.02em",
                    borderWidth: rowIndex === 0 ? "7px" : "1px", // Установить толщину border для первой строки данных
                    borderColor: rowIndex === 0 ? "#ED801B" : "#DADADA", // Установить цвет border для первой строки данных
                  }}
                >
                  {column.accessor ? item[column.accessor] : ""}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
