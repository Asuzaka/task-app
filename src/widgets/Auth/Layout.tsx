import { ReactNode } from "react";
import Image from "next/image";

type WidgetProps = {
  children: ReactNode;
  url?: string;
};

export function Widget({ children, url }: WidgetProps) {
  return (
    <div className="flex h-screen bg-gradient-to-br from-blue-300 to-purple-400">
      <div className="w-full lg:w-1/2 bg-white py-10 px-5 sm:py-14 sm:px-20 rounded-lg shadow-md h-full">
        {children}
      </div>
      {url ? (
        <div className="w-1/2 relative bg-login-pattern bg-cover bg-center">
          <Image src={url} alt="Background" fill className="object-cover" />
        </div>
      ) : null}
    </div>
  );
}
