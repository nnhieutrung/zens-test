function sum(arr) {
    let sum = 0;
    
    // Loop each: sum = sum + every num in array
    for (let num of arr) 
        sum += num;

    return sum;
}

function minItem(arr) {
    // min as first item
    let min = arr[0];

    // loop from i = 1 => n-1: min = min(min, item)
    for (let i = 1; i < arr.length; i++)
        min = Math.min(min, arr[i])

    return min;
}

function maxItem(arr) {
    // max as first item
    let max = arr[0];

    // loop from i = 1 => n-1: max = max(max, item)
    for (let i = 1; i < arr.length; i++)
        max = Math.max(max, arr[i])

    return max;
}

function minMaxSum(arr) {
    // The solution is find sum = total item, min = min item, max = max item
    // The min-sum is sum everything except max-item => min-sum = sum - max
    // Its same for max-sum = sum-min
    let min = arr[0];
    let max = arr[0];
    let sum = arr[0];

    for (let i = 1; i < arr.length; i++) {
        min = Math.min(min, arr[i]);
        max = Math.max(max, arr[i]);
        sum += arr[i];
    }

    return [sum-max, sum-min];
}

function evenItems(arr) {
    //Using filter func, even is %2 == 0
    return arr.filter((num) => num%2 == 0)
}

function oddItems(arr) {
    //Using filter func, odd is %2 != 0
    return arr.filter((num) => num%2 != 0)
}
