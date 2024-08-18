const path = require('path');

// Get the file path segments from command-line arguments
const segment1 = process.argv[2];
const segment2 = process.argv[3];

// Function to join the file paths
function joinPaths(segment1, segment2) {
  return path.join(segment1, segment2);
}

// Join the paths and print the result to the console
const joinedPath = joinPaths(segment1, segment2);
console.log(joinedPath);

// DO NOT EDIT BELOW THIS LINE
module.exports = { joinPaths };
