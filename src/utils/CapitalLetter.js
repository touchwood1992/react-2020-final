const CapitalLetter = (text = "") => {
  const newText = text
    .split(" ")
    .map((i) => i.charAt(0).toUpperCase() + i.slice(1))
    .join(" ");
  return newText;
};
export default CapitalLetter;
