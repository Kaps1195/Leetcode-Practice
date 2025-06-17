/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    if(!intervals.length) return intervals;

    intervals.sort((a,b) => a[0] - b[0]);

    const res = [intervals[0]];

    for(let i = 0; i < intervals.length; i++) {
        const currentInterval = intervals[i];
        const lastIntervalinResultArr = res[res.length - 1];

        if(currentInterval[0] <= lastIntervalinResultArr[1]) {
            lastIntervalinResultArr[1] = Math.max(currentInterval[1], lastIntervalinResultArr[1]);
        } else {
            res.push(currentInterval);
        }
    }

    return res;
};


// merge([[1,3],[2,6],[8,10],[15,18]]);
/*
intervals = [[1,3],[2,6],[8,10],[15,18]]

intervals = [[1,4],[4,6],[7,10],[15,18]]

*/