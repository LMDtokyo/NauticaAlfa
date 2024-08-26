export default (max: number, counts: number[]) => {
  const [first, second] = counts;

  if (first + second <= max) return [first + second, 0];

  const difference = (first + second) - max;

  return [max, difference];
}