/**
 * @param {string} S
 * @return {number[]}
 */
var partitionLabels = function(S) {
    // const last = new Array(26).fill(-1);
    const lastIndexMap = {};
    const partitions = [];
    // let anchor = 0;
    let size = 0;
    let end = 0;
    
    for (let i = 0; i < S.length; i++) {
        // last[S.charCodeAt(i) - 'a'.charCodeAt(0)] = i;
        lastIndexMap[S[i]] = i;
    }
    
    /*
    example
    a b c c a d d b e f f e
    
          a b c d e  f  
    last=[4,7,3,6,11,10]
    
    i=0  -> end=max(0,4)=4     anchor=0
    i=1  -> end=max(4,7)=7     anchor=0
    i=2  -> end=max(7,3)=7     anchor=0
    i=3  -> end=max(7,3)=7     anchor=0
    i=4  -> end=max(7,3)=7     anchor=0
    i=5  -> end=max(7,6)=7     anchor=0
    i=6  -> end=max(7,6)=7     anchor=0
    i=7  -> end=max(7,7)=7     anchor=8   partitions.push(7 - 0 + 1)
    i=8  -> end=max(7,11)=11   anchor=8
    i=9  -> end=max(11,10)=11  anchor=8
    i=10 -> end=max(11,10)=11  anchor=8
    i=11 -> end=max(11,11)=11  anchor=12  partitions.push(11 - 8 + 1)
    
    partitions = [8, 4]
    */
    for (let i = 0; i < S.length; i++) {
        size += 1;
        // end = Math.max(end, last[S.charCodeAt(i) - 'a'.charCodeAt(0)]);
        end = Math.max(end, lastIndexMap[S[i]]);
        if (i === end) {
            partitions.push(size);
            size = 0;
        }
    }
    // console.log(partitions); 
    return partitions;
};


partitionLabels("ababcbacadefegdehijhklij");
