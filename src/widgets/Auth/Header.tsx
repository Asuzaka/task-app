import React from "react";

type WidgetProps = {
  appName: string;
  title: string;
  subtitle: string;
  fontClass: string;
  Noty: React.ComponentType<{
    size: string;
    padding: string;
    location: string;
  }>;
};

export function Widget({
  appName,
  title,
  subtitle,
  fontClass,
  Noty,
}: WidgetProps) {
  return (
    <div className="mb-10">
      <h1 className={`${fontClass} text-5xl font-semibold text-blue-600 mb-2`}>
        {appName}
      </h1>
      <div className="mt-[19%] ml-[12%] sm:ml-[24%]">
        <p className="text-gray-600/70 font-light">{title}</p>
        <h2 className="text-xl font-medium text-gray-800">{subtitle}</h2>
        <div className="relative flex mb-16">
          <Noty
            size="text-sm"
            padding="py-1 px-4"
            location="top-2 gap-2 w-[70%]"
          />
        </div>
      </div>
    </div>
  );
}
