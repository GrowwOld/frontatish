export const changeYear = (
  newYear: number,
  activeDate: Date,
  setActiveDate: (arg0: Date) => void,
) => {
  const newTimeInMS = activeDate.setFullYear(newYear);
  const updatedDate = new Date(newTimeInMS);
  setActiveDate(updatedDate);
};

export const changeMonth = (
  newMonth: number,
  activeDate: Date,
  setActiveDate: (arg0: Date) => void,
) => {
  const newTimeInMS = activeDate.setMonth(newMonth);
  const updatedDate = new Date(newTimeInMS);
  setActiveDate(updatedDate);
};

export const changeDay = (
  dateOfMonth: number,
  activeDate: Date,
  setActiveDate: (arg0: Date) => void,
) => {
  const newTimeInMS = activeDate.setMonth(activeDate.getMonth(), dateOfMonth);
  const updatedDate = new Date(newTimeInMS);
  setActiveDate(updatedDate);
};

export const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
