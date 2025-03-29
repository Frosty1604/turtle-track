export function convertToHtmlInputDate(date: Date | string = new Date()) {
  let convertedDate: Date;
  if (typeof date === 'string') {
    convertedDate = new Date(date);
  } else {
    convertedDate = date;
  }
  return convertedDate.toISOString().split('T')[0];
}
