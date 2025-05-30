type Props = { days7: number[] };

export function Widget({ days7 }: Props) {
  return (
    <div className="mt-1 h-4 mb-1 flex gap-1 items-end px-1 border-b-2 border-blue-200/70 w-fit">
      {days7.map((h, j) => (
        <div
          key={j}
          className="w-3 bg-blue-300"
          style={{ height: `${h * 4}px ` }}
        />
      ))}
    </div>
  );
}
