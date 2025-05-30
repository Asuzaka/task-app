import Link from "next/link";

type WidgetProps = {
  question: string;
  link1: string;
  link1Text: string;
  link2: string;
  link2Text: string;
};

export function Widget({
  question,
  link1,
  link1Text,
  link2,
  link2Text,
}: WidgetProps) {
  return (
    <div className="absolute bottom-8 flex flex-col justify-between sm:flex-row translate-x-[-50%] left-[50%] sm:w-[80%] lg:w-[40%] lg:left-[25%] text-sm text-gray-500">
      <div className="flex flex-col gap-2 sm:flex-row ">
        {question}
        <Link
          href={link1}
          className="font-medium text-blue-600 hover:underline"
        >
          {link1Text}
        </Link>
      </div>
      <span className="float-right">
        <Link
          href={link2}
          className="font-medium text-blue-600 hover:underline"
        >
          {link2Text}
        </Link>
      </span>
    </div>
  );
}
