let statues = [6, 2, 3, 8];

function solution(statues) {
  let diferencia = 0;

  statues.sort((a, b) => a - b);

  for (let i = 0; i < solution.length - 1; i++) {
    diferencia += statues[i] - statues[i + 1] + 1;
  }
  return Math.abs(diferencia);
}
