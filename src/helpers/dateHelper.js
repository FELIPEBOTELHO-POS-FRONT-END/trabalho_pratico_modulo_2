const monthNames = [
  "Jan",
  "Fev",
  "Mar",
  "Abr",
  "Mai",
  "Jun",
  "Jul",
  "Ago",
  "Set",
  "Out",
  "Nov",
  "Dez",
];

export function generateDateString(month, year) {
  const date = `${monthNames[month - 1]}/${year}`;
  return date;
}
