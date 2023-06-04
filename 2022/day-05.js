import { crates, instructions } from './inputs/day-05.js';

function parseCrates(crates) {
  const rows = crates.trim().split('\n');
  const stacks = [];

  for (let i = 0; i < rows.length; i++) {
    const row = rows[i].trim();
    const stack = row.split(' ').slice(1);
    stacks.push(stack);
  }

  return stacks;
}

function performInstructions(stacks, instructions) {
  const moves = instructions.trim().split('\n');

  for (let i = 0; i < moves.length; i++) {
    const move = moves[i].trim().split(' ');
    const count = parseInt(move[1]);
    const fromStack = parseInt(move[3]) - 1;
    const toStack = parseInt(move[5]) - 1;

    for (let j = 0; j < count; j++) {
      const crate = stacks[fromStack].pop();
      stacks[toStack].push(crate);
    }
  }
}

function getTopCrates(stacks) {
  let topCrates = '';
  for (let i = 0; i < stacks.length; i++) {
    const stack = stacks[i];
    if (stack.length > 0) {
      topCrates += stack[stack.length - 1];
    }
  }
  return topCrates;
}

const stacks = parseCrates(crates);
performInstructions(stacks, instructions);
const topCrates = getTopCrates(stacks);
console.log("Top Crates:", topCrates);
