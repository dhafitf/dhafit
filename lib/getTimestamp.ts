export default function getTimestamp(timestamp: string) {
  const getDate = new Date(timestamp);
  const options = { weekday: "long", year: "numeric", month: "long", day: "numeric" } as any;

  const formatedDate = getDate.toLocaleDateString("en", options);
  return formatedDate;
}
