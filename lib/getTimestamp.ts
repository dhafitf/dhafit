export default function getTimestamp(timestamp: string) {
  const getDate = new Date(timestamp);
  const [year, month, date] = timestamp.split("/");
  const day = getDate.getDay();

  const dayNames = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jum'at", "Sabtu"];

  const monthNames = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "December"];

  const formatedDay = dayNames[day];
  const formatedMonth = monthNames[parseInt(month) - 1];

  return {
    day: formatedDay,
    date: date + " " + formatedMonth + " " + year,
  };
}
