/**
 * clamp string so that the length of the string will be the limit. If the string length is over the limit,
 * the string will be converted to a form 'strstrstr...abcd' where there is 4 ending characters, and the whole length
 * of the clamped string will be the limit.
 * 
 * @param {string} value
 * @param {number} limit
 */
export default function (value, limit, startLimit = 6) {
  if (!value) return "";
  value = value.toString();
  if (value.length <= limit) {
    return value;
  }
  return value.substr(0, startLimit) + "..." + value.substr(value.length - 4);
}
