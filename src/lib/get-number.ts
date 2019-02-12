export function getNumber(value: string | number): number {
  let numbers: string = "";

  for (const char of value.toString()) {
    if (!isNaN(parseInt(char))) {
      numbers += char;
    }
  }

  return parseInt(numbers);
}
