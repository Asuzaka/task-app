import React from "react";

type WidgetProps = {
  children: React.ReactNode;
};

export function Widget({ children }: WidgetProps) {
  return (
    <div className="flex items-center gap-2 bg-slate-50 py-2 px-4">
      {children}
      <input
        type="text"
        placeholder="Filter"
        className="w-[20%] ml-auto px-1 sm:px-2 sm:py-1 border rounded"
      />
    </div>
  );
}
