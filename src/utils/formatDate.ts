export const formatDate = (date: string) => {
const dateObject = new Date(date);
const day = dateObject.getDate();
const month = dateObject.getMonth();
const year = dateObject.getFullYear();
return day + "/" + month + "/" + year;
}