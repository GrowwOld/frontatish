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

export const getYearArray = (
  yearsArrayLowerBound: number,
  yearsArrayUpperBound: number,
) => {
  const yearsArray = [];
  for (
    let year = yearsArrayLowerBound;
    year <= yearsArrayUpperBound;
    year += 1
  ) {
    yearsArray.push(year);
  }
  return yearsArray;
};

export const nDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

export const generateDayMatrix = (activeDate: Date) => {
  const dayMatrix = [];
  // Create header
  dayMatrix[0] = ['1', '2', '3', '4', '5', '6', '7'];
  const year = activeDate.getFullYear();
  const month = activeDate.getMonth();

  let maxDays = nDays[month];
  if (month === 1) {
    // February
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
      maxDays += 1;
    }
  }
  let counter = 8;
  for (let row = 1; row < 5; row += 1) {
    dayMatrix[row] = [];
    for (let col = 0; col < 7; col += 1) {
      if (counter <= maxDays) {
        dayMatrix[row][col] = counter.toString();
        counter += 1;
      } else {
        dayMatrix[row][col] = '';
      }
    }
  }
  return dayMatrix;
};
