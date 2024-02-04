const findDiff = (array1, array2) => {
    // your code goes here

    const array3 = array1.concat(array2);
    const result = [];

    console.log("array3: ",array3);

    for (let i = 0; i < array3.length; i++) {
        const filtered = array3.filter((num) => num === array3[i]);
        console.log("length: ", filtered.length);
        console.log("index: ", array3[i]);

        result.push( filtered.length);
    }

    console.log(result);

    const answer = [];
    for (let i = 0; i < array3.length; i++) {
        if (result[i] === 1) {
            answer.push(array3[i])
        }
    }
    console.log(result)
    console.log("answer", answer)
};

findDiff([1, 2, 3, 5], [1, 5, 8, 9]) // [2,3,8,9]