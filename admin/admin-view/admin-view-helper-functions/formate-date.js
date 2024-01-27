// alteres the date formate - not time
function formateDate(date) {
  const newDate = new Date(date);
  // sets the date formate to danish
  const formatedNewDate = new Intl.DateTimeFormat("dk", {
    dateStyle: "medium",
  }).format(newDate);
  return formatedNewDate;
}

export { formateDate };
