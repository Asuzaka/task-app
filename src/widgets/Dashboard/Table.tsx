import { ReactNode } from "react";
import { FaArrowDown } from "react-icons/fa";
import { TiMinus, TiPlus } from "react-icons/ti";

type WidgetProp = {
  noSelection: boolean;
  isAllSelected: boolean;
  handleClick: () => void;
  children: ReactNode;
};

export function Widget({
  noSelection,
  isAllSelected,
  children,
  handleClick,
}: WidgetProp) {
  return (
    <table className="w-full text-left p-2">
      <thead>
        <tr className="border-b">
          <th className="sm:p-4">
            <button
              onClick={handleClick}
              className={`text-white p-[2px] rounded ${
                noSelection
                  ? "border border-gray-300"
                  : "bg-blue-500 border border-transparent"
              }`}
            >
              {isAllSelected ? <TiPlus size={10} /> : <TiMinus size={10} />}
            </button>
          </th>
          <th className="sm:p-4 font-semibold">Name</th>
          <th className="sm:p-4 font-semibold flex items-center gap-2">
            Email <FaArrowDown size={14} color="grey" />
          </th>
          <th className="sm:p-4 font-semibold">Last seen</th>
        </tr>
      </thead>
      <tbody>{children}</tbody>
    </table>
  );
}
