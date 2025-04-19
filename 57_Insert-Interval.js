/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
// var insert = (intervals, newInterval) => {
//     let [start, end] = newInterval;
//     let ans = [];
//     let pushed = false;
//     for (let [currStart, currEnd] of intervals) {
//       if (currEnd < start) {
//         ans.push([currStart, currEnd]);
//       } else if (currStart > end) {
//         if (!pushed) {
//           ans.push([start, end]);
//           pushed = true;
//         }
//         ans.push([currStart, currEnd]);
//       } else {
//         start = Math.min(start, currStart);
//         end = Math.max(end, currEnd);
//       }
//     }
//     if (!pushed) {
//       ans.push([start, end]);
//     }
//     return ans;
// };

var insert = function(intervals, newInterval) {
  // Initialize an array to store the merged intervals
  let merged = [];
  let i = 0;

  // Traverse intervals before newInterval whose end is less than the start of newInterval
  while (i < intervals.length && intervals[i][1] < newInterval[0]) {
      merged.push(intervals[i]);
      i++;
  }

  // Merge overlapping intervals
  while (i < intervals.length && intervals[i][0] <= newInterval[1]) {
      // Update newInterval to merge with the current interval
      newInterval = [
          Math.min(newInterval[0], intervals[i][0]),
          Math.max(newInterval[1], intervals[i][1])
      ];
      i++;
  }

  // Add the merged newInterval
  merged.push(newInterval);

  // Add remaining intervals after newInterval
  while (i < intervals.length) {
      merged.push(intervals[i]);
      i++;
  }

  return merged;
};

/*
intervals = [[1,3],[6,9]], newInterval = [2,5]
intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
[[1,2], [3,10],  ]

start = 3
end = 10

[[1,2],[3,10],[12,16]]

*/