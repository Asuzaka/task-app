import { Message } from "@/entities";

export function Widget({ message }: { message: Message }) {
  return (
    <div className="flex flex-col gap-2 w-full max-w-md text-sm">
      {"success" in message && (
        <p className="text-green-500 px-4">{message.success}</p>
      )}
      {"error" in message && (
        <p className="text-red-500 px-4">{message.error}</p>
      )}
      {"message" in message && <p className="px-4">{message.message}</p>}
    </div>
  );
}
