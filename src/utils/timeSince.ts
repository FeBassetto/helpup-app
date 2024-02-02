export function timeSince(dateISO: string): string {
  const now = new Date();
  const past = new Date(dateISO);
  const diffInSeconds = Math.floor((now.getTime() - past.getTime()) / 1000);

  const secondsInMinute = 60;
  const secondsInHour = 3600;
  const secondsInDay = 86400;
  const secondsInYear = 31536000;

  if (diffInSeconds < secondsInMinute) {
    return `${diffInSeconds}s`;
  } else if (diffInSeconds < secondsInHour) {
    return `${Math.floor(diffInSeconds / secondsInMinute)}m`;
  } else if (diffInSeconds < secondsInDay) {
    return `${Math.floor(diffInSeconds / secondsInHour)}h`;
  } else if (diffInSeconds < secondsInYear) {
    return `${Math.floor(diffInSeconds / secondsInDay)}d`;
  } else {
    return `${Math.floor(diffInSeconds / secondsInYear)}a`;
  }
}