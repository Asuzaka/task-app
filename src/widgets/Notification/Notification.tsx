"use client";

import { IoClose } from "react-icons/io5";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

type WidgetProps = {
  size: string;
  padding: string;
  location: string;
};

export function Widget({
  size = " ",
  padding = " ",
  location = "",
}: WidgetProps) {
  const [show, setShow] = useState<boolean>(false);
  const searchParams = useSearchParams();
  const router = useRouter();
  const error = searchParams.get("error");
  const succes = searchParams.get("succes");

  useEffect(() => {
    if (error || succes) {
      setShow(true);
    }
  }, [error, succes]);

  const handleClose = () => {
    setShow(false);

    const params = new URLSearchParams(searchParams.toString());
    params.delete("error");
    params.delete("succes");

    // Construct new URL without these query parameters
    const newParams = params.toString();
    const newUrl = `${window.location.pathname}${
      newParams ? `?${newParams}` : ""
    }`;

    router.replace(newUrl);
  };

  return (
    show && (
      <div
        className={`popup absolute z-20 ${padding} ${location} rounded-xl text-white flex items-center ${
          error ? "bg-red-500" : "bg-green-500"
        }`}
      >
        <div>
          <p className={size}>
            {error}
            {succes}
          </p>
        </div>
        <button
          onClick={handleClose}
          className="cursor-pointer ml-auto rounded-full border border-white"
        >
          <IoClose color="white" />
        </button>
      </div>
    )
  );
}
