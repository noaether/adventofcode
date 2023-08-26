import input from "./inputs/day-06.js";

function findMarkerIndex(datastream) {
  const buffer = datastream.split("");
  const windowSize = 4;

  for (let i = 0; i < buffer.length - windowSize + 1; i++) {
    const window = buffer.slice(i, i + windowSize);
    const uniqueChars = new Set(window);

    if (uniqueChars.size === windowSize) {
      return i + windowSize;
    }
  }

  return -1; // Marker not found
}

function findMessageMarkerIndex(datastream) {
  const buffer = datastream.split("");
  const windowSize = 14;

  for (let i = 0; i < buffer.length - windowSize + 1; i++) {
    const window = buffer.slice(i, i + windowSize);
    const uniqueChars = new Set(window);

    if (uniqueChars.size === windowSize) {
      return i + windowSize;
    }
  }

  return -1; // Marker not found
}

const markerIndex = findMarkerIndex(input);
const messageMarkerIndex = findMessageMarkerIndex(input);

console.log(
  `The first start-of-packet marker is detected after character ${markerIndex}`
);

console.log(
  `The first start-of-message marker is detected after character ${messageMarkerIndex}`
);
