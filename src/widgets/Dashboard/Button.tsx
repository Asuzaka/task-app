import React from "react";

const colorClasses: Record<AllowedColors, string> = {
  red: "text-red-600 border-red-600",
  blue: "text-blue-600 border-blue-600",
  green: "text-green-600 border-green-600",
};

type AllowedColors = "red" | "blue" | "green";

type WidgetProps = {
  handler: () => void;
  icon?: React.ReactNode;
  text?: string;
  color?: AllowedColors;
};

export function Widget({
  handler,
  icon,
  text = "",
  color = "blue",
}: WidgetProps) {
  return (
    <button
      onClick={() => handler()}
      className={`flex items-center text-lg gap-1 px-1 py-1 sm:px-3 sm:py-2 border rounded ${
        colorClasses[color] || colorClasses["blue"]
      }`}
      style={{ lineHeight: 0 }}
    >
      {icon}
      {text}
    </button>
  );
}
