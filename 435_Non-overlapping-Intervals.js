var eraseOverlapIntervals = function(intervals) {
    if(intervals.length === 0) return 0;
    
    let count = 0;
    
    // Sort by starting interval times
    intervals.sort((a,b) => {
        return a[0] - b[0]
    });
    // console.log(intervals);
    let end = intervals[0][1];

    for (let i = 1; i < intervals.length; i++) {
        const interval = intervals[i];
        const intervalStart = interval[0];
        const intervalEnd = interval[1];

        if(intervalStart < end) {
            count++;
            end = Math.min(intervalEnd, end);
        } else {
            end = intervalEnd;
        }
    }

    return count;
}

eraseOverlapIntervals([[1,2],[2,3],[3,4],[1,3]])

/**
 * intervals = [[1,2],[2,3],[3,4],[1,3]]
 * 
*/

