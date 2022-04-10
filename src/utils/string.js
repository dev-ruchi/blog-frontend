export function truncate(string, length, omission = '...') {
  if (string.length <= length) return string;

  return string.substr(0, length) + omission
}