export const formatHour = (timestamp: number) => {
  const d = new Date(timestamp * 1000);
  const hour = d.getHours() + (+!!d.getMinutes());
  return `${String(hour).padStart(2, '0')}:00`;
};
