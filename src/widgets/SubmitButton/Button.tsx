"use client";

import { ComponentProps } from "react";
import { useFormStatus } from "react-dom";

type Props = ComponentProps<"button"> & {
  pendingText?: string;
};

export function Widget({ children, pendingText = "Submitting..." }: Props) {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
    >
      {pending ? pendingText : children}
    </button>
  );
}
