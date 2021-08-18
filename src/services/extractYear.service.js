export const extractYear = (date) => {
  const splitDate = date.split("/");
  const yearOnly = splitDate[1];
  return parseInt(yearOnly);
}