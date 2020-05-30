// 求逆序对的数量

function reverseTwain(arr) {
    return process(arr, 0, arr.length - 1);
}

function process(arr, L, R) {
    if(L == R) return 0;
    let mid = L + ((R - L) >> 1);
    return process(arr, L, mid)
        + process(arr, mid + 1, R)
        + merge(arr, L, R, mid);
}

function merge(arr, L, R, mid) {
    let help = new Array(R - L + 1);
    let i = 0;
    let p1 = L;
    let p2 = mid + 1;
    let res = 0;
    while(p1 <= mid && p2 <= R) {
        res += arr[p1] > arr[p2] ? (R - p2 + 1) : 0;
        help[i++] = arr[p1] > arr[p2] ? arr[p1++] : arr[p2++];
    }
    while(p1 <= mid) {
        help[i++] = arr[p1++];
    }
    while(p2 <= R) {
        help[i++] = arr[p2++];
    }
    for(let j = 0; j < help.length; j ++) {
        arr[L + j] = help[j];
    }
    return res;
}

let arr = [5,3,9,6,7,0];
let result = reverseTwain(arr);
console.log(result);
console.log(arr);