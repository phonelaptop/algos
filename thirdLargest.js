const thirdLargest = (array) => {    
    // 1. find the largest number, remove largest number, fins the largest number

    // find the largest number 16 Math.max(...array)
    const max = (Math.max(...array));
    console.log(max)
    // remove the largest number [12,11,13,9,8] // filter
    const filtered = array.filter((num) => num !== max);
    console.log(filtered)
    // find the largest number again 13
    const max2 = (Math.max(...filtered));
    const filtered2 = filtered.filter((num) => num !== max2)
    //find the largest number again
    const thirdLargest = (Math.max(...filtered2));
    console.log("thirdLargest",thirdLargest);
}

const thirdLargest2 = (array) => {
    // 2. sort the array from great the least, then grab index 1

    // sort the array array1.sort((a, b) => b > a ? 1 : -1);
    const sorttted = array.sort((a, b) => b > a ? 1 : -1);
    console.log(sorttted)
    // then print our the index 1
    console.log("thirdLargest:",  sorttted[2])
}

thirdLargest2([12,11,13,16,9,8]); // 13
//thirdLargest([12,11,13,16,9,8]); // 13