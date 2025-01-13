export const generateRandomColor = (): string => {
  const colorSet = ['#ffd6ff', '#e7c6ff', '#ffafcc', '#bde0fe', '#a2d2ff'];
  return colorSet[Math.floor(Math.random() * colorSet.length)];
};
