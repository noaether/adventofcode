import assignmentPairsStr from "./inputs/day-04.js";

const assignmentPairs = assignmentPairsStr.trim().split("\n");

function countFullyContainedPairs(assignmentPairs) {
  let count = 0;

  for (const pair of assignmentPairs) {
    const [range1, range2] = pair.split(",");

    const [start1, end1] = range1.split("-").map(Number);
    const [start2, end2] = range2.split("-").map(Number);

    if (
      (start1 >= start2 && end1 <= end2) ||
      (start2 >= start1 && end2 <= end1)
    ) {
      count++;
    }
  }

  return count;
}

const fullyContainedPairs = countFullyContainedPairs(assignmentPairs);
console.log("Number of fully contained pairs:", fullyContainedPairs);
