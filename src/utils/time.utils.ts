export const generateFakeTimeByHours = (hours: number): string => {
  const timeNow = new Date();
  timeNow.setHours(timeNow.getHours() - hours);
  return timeNow.toLocaleString();
};

export const getTimeAgo = (createdAt: string): string => {
  const currentTime = new Date();
  const createdAtTime = new Date(createdAt);

  const timeDifference = currentTime.getTime() - createdAtTime.getTime();
  const seconds = Math.floor(timeDifference / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  if (days >= 1) {
    return `${days} days ago`;
  }
  if (hours >= 1) {
    return `${hours} h ago`;
  }
  if (minutes >= 1) {
    return `${minutes} min ago`;
  }
  if (seconds >= 1) {
    return `${seconds} ago`;
  }
  if (seconds < 1) {
    return "now";
  }

  return `${createdAtTime.toLocaleDateString()} ${createdAtTime.toLocaleDateString()}`;
};
