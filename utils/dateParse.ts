// https://stackoverflow.com/questions/2587345/why-does-date-parse-give-incorrect-results

const parseDate = (input: string): Date => {
  let parts: any = input.split("-");

  // new Date(year, month [, day [, hours[, minutes[, seconds[, ms]]]]])
  return new Date(parts[0], parts[1] - 1, parts[2]); // Note: months are 0-based
};

export default parseDate;
