const fs = require('fs');

function calculateSteps(instructions) {
  let steps = 0;
  let position = 0;

  while (position >= 0 && position < instructions.length) {
    steps++;
    const jump = instructions[position];
    instructions[position]++;
    position += jump;
  }

  return steps;
}

function processTraceFile(traceFilePath) {
  const instructionSets = fs
    .readFileSync(traceFilePath, 'utf-8')
    .trim()
    .split('\n');

  let totalSteps = 0;
  let stepsForLastSet = 0;

  instructionSets.forEach((line, index) => {
    const instructions = line.split(' ').map(Number);
    const steps = calculateSteps(instructions);
    totalSteps += steps;

    if (index === instructionSets.length - 1) {
      stepsForLastSet = steps;
    }
  });

  return `submit ${totalSteps}-${stepsForLastSet}`;
}

module.exports = { processTraceFile, calculateSteps };
