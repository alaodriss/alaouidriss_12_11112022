/**
 * It takes a string, capitalizes the first letter, and then lowercases the rest of the string
 * @param {string} str - The string to be converted.
 * @returns {string} The first character of the string is converted to uppercase and the rest of the string is
 * converted to lowercase.
 */

export function fromLowerToUpperCase(str) {
  return str.charAt(0).toUpperCase() + str.substring(1).toLowerCase();
}

/**
 * @param {Number} numDay  the number of the day in the week (start at 0)
 * @returns {String} the first letter of day
 */

export function handleFormatTick(numDay) {
  const days = ["l", "m", "m", "j", "v", "s", "d"];

  switch (numDay) {
    case 1:
      return fromLowerToUpperCase(days[0]);
    case 2:
      return fromLowerToUpperCase(days[1]);
    case 3:
      return fromLowerToUpperCase(days[2]);
    case 4:
      return fromLowerToUpperCase(days[3]);
    case 5:
      return fromLowerToUpperCase(days[4]);
    case 6:
      return fromLowerToUpperCase(days[5]);
    case 7:
      return fromLowerToUpperCase(days[6]);
  }
}
