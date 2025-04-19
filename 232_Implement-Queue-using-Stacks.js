
var MyQueue = function() {
    queue = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    queue.push(x);
    // console.log(queue);
    return;
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    return queue.shift();
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    // console.log(queue);
    return queue[0];
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    // console.log(queue.length === 0 ? true : false);
    return queue.length === 0 ? true : false;
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */

var obj = new MyQueue()
obj.push(5);
obj.push(10);
obj.pop();
obj.pop();

obj.peek();
obj.empty();
