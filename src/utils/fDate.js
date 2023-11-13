export const fDate = (date, format) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');

  format = format.replace('yyyy', year);
  format = format.replace('mm', month);
  format = format.replace('dd', day);
  return format;
};
