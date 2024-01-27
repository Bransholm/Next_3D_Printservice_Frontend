function formateDate(date) {
  const newDate = new Date(date);
  const formatedNewDate = new Intl.DateTimeFormat("dk", {
    dateStyle: "medium",
  }).format(newDate);
  return formatedNewDate;
}

export { formateDate };
