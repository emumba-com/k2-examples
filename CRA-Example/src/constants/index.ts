export const getURL = (route: string) =>
  !process.env.NODE_ENV || process.env.NODE_ENV === "development"
    ? `/api/v1/${route}`
    : `https://mockapiserver.emumba.com:7000/api/v1/${route}`;

export const fullMonthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const shortMonthNames = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
export const quarters = {
  "1st Quarter": 1,
  "2nd Quarter": 2,
  "3rd Quarter": 3,
  "4th Quarter": 4,
};

export const monthTickValues = [
  1546300800000,
  1548979200000,
  1551398400000,
  1554076800000,
  1556668800000,
  1559347200000,
  1561939200000,
  1564617600000,
  1567296000000,
  1569888000000,
  1572566400000,
  1575158400000,
];
