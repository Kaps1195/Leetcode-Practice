/**
 * @param {number[][]} trips
 * @param {number} capacity
 * @return {boolean}
 */
var carPooling = function(trips, capacity) {
    const dist = new Array(1002).fill(0);
    for (let i = 0; i < trips.length; i++) {
        const [ passengers, start, end ] = trips[i];
        dist[start] += passengers
        dist[end] -= passengers
    }
    // console.log(dist);
    let currPassengers = 0;
    for (let i = 0; i < dist.length; i++) {
        const passengers = dist[i];
        currPassengers += passengers 
        if(currPassengers > capacity) {
            return false;
        }
    }
    return true;
};


console.log(carPooling([[2,1,5],[3,3,7]], 5))

/*

Example 1:

Input: trips = [[2,1,5],[3,3,7]], capacity = 4
Output: false

Example 2:

Input: trips = [[2,1,5],[3,3,7]], capacity = 5
Output: true

*/