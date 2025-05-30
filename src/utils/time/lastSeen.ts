export function Ago(activity: string): string {
  const lastSeen = new Date(activity.endsWith("Z") ? activity : activity + "Z");
  const now = new Date();

  const diffMs: number = now.getTime() - lastSeen.getTime();

  const seconds = Math.floor(diffMs / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  if (days > 0) {
    return `Last seen ${days} day${days > 1 ? "s" : ""} ago`;
  } else if (hours > 0) {
    return `Last seen ${hours} hour${hours > 1 ? "s" : ""} ago`;
  } else if (minutes > 0) {
    return `Last seen ${minutes} minute${minutes > 1 ? "s" : ""} ago`;
  } else {
    return `Last seen less than a minute ago`;
  }
}
