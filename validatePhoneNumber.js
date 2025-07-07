function validatePhoneNumber(number) {
  const lgt = number.length;

  if (lgt === 12) {
    if (
      (number[3] === " " && number[7] === " ") ||
      (number[3] === "-" && number[7] === "-")
    ) {
      return true;
    } else {
      return false;
    }
  }
  if (lgt === 10) return true;

  if (lgt !== 10 || lgt !== 12) return false;
}

console.log(validatePhoneNumber("0791954372"));
