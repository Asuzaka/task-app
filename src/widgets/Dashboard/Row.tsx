import { FaCheck } from "react-icons/fa";
// import { Sparklines } from "@/widgets";
import { Ago } from "@/utils";
import { User } from "@/entities";

type WidgetProp = {
  user: User;
  isUserSelected: (userId: string) => boolean;
  onSelect: (userId: string) => void;
};

export function Widget({ user, isUserSelected, onSelect }: WidgetProp) {
  return (
    <tr
      key={user.id}
      className={`border-b ${user.blocked ? "text-gray-400" : ""}`}
    >
      <td className="sm:p-4">
        <button
          onClick={() => onSelect(user.id)}
          className={` text-white p-[2px] rounded ${
            isUserSelected(user.id)
              ? "bg-blue-500 border border-transparent"
              : "border border-gray-300"
          }`}
        >
          <FaCheck size={10} />
        </button>
      </td>
      <td className="sm:p-4">
        <div className={`${user.blocked ? "line-through" : ""}`}>
          {user.username}
        </div>
        {/* <div className="text-sm text-gray-500">{user.company}</div> */}
      </td>
      <td className="sm:p-4">{user.email}</td>
      <td className="sm:p-4">
        {Ago(user.last_seen)}
        {/* <Sparklines days7={[2, 5, 3, 4, 1, 0]} /> */}
      </td>
    </tr>
  );
}
