export const formatDate = (date) => {
  let _date = new Date(date);
  var month = new Array();
  month[0] = "January";
  month[1] = "February";
  month[2] = "March";
  month[3] = "April";
  month[4] = "May";
  month[5] = "June";
  month[6] = "July";
  month[7] = "August";
  month[8] = "September";
  month[9] = "October";
  month[10] = "November";
  month[11] = "December";
  var n = month[_date.getMonth() ];
  return `${n} ${_date.getDate()}, ${_date.getFullYear()}`;
}
