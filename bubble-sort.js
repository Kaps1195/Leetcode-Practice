const arr = [5,3,9,2,7,8,10]
/*
3,5,2,7,8,9,10
3,2,5,7,8,9,10
2,3,5,7,8,9,10
*/

function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length-i-1; j++) {
            if(arr[j] > arr[j+1]) {
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
            }
        }
    }
    console.log(arr);
}

bubbleSort(arr);