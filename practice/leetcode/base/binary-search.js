function binarySearch(numbers, target) {
    const len = numbers.length;
    let l = 0, r = len - 1; // [l...r]

    while(l <= r) {
        let mid = Math.floor((l + r) / 2);
        if (numbers[mid] === target) {
            return mid;
        }
        if (numbers[mid] > target) {
            r = mid - 1;
        } else {
            l = mid + 1;
        }
    }
    return -1;
}

function binarySearch1(numbers, target) {
    const len = numbers.length;
    let l = 0, r = len; // [l ... r)
    while (l < r) {
        let mid = Math.floor((l + r) / 2);

        if (numbers[mid] === target) {
            return mid;
        }

        if (numbers[mid] > target) {
            r = mid;
        } else {
            l = mid + 1;
        }
    }

    return -1;
}

console.log(binarySearch([1, 3, 4, 6, 8], 6));
console.log(binarySearch1([1, 3, 4, 6, 8], 6));