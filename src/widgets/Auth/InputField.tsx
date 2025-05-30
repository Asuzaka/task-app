import React from "react";

type WidgetProps = {
  id: string;
  name: string;
  type: string;
  label: string;
  placeholder?: string;
  required?: boolean;
  icon?: React.ReactNode;
};

export function Widget({
  id,
  name,
  type,
  label,
  placeholder,
  required,
  icon,
}: WidgetProps) {
  return (
    <div className="flex items-center border-gray-300 rounded-md shadow-sm py-2 px-3 border">
      <div className="w-[90%]">
        <label htmlFor={id} className="block text-sm font-medium text-gray-700">
          {label}
        </label>
        <input
          name={name}
          type={type}
          id={id}
          autoComplete="off"
          className="mt-1 block w-full focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          placeholder={placeholder}
          required={required}
        />
      </div>
      <div className="ml-auto w-[7%]">{icon}</div>
    </div>
  );
}
