export const truncateString = (providedString) => {
  return providedString.length > 280
    ? providedString.substring(0, 280) + "..."
    : providedString;
};
