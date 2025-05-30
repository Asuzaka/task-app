type WidgetProps = {
  id: string;
  name: string;
  label: string;
};

export function Widget({ id, name, label }: WidgetProps) {
  return (
    <div className="flex items-center">
      <input
        name={name}
        type="checkbox"
        id={id}
        className="form-checkbox h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
      />
      <label htmlFor={id} className="ml-2 block text-sm text-gray-900">
        {label}
      </label>
    </div>
  );
}
