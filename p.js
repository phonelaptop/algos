const findDiff = (array1, array2) => {
    // your code goes here
    const answer = []
    for (let i = 0; i < array1.length; i++) {
        array1[i]
        for (let j = 0; j < array2.length; j++) {
            array2[j]
            if (array1[i] === array2[j]) {
                answer.push(array1[i])
            }
        }
    }

    console.log(answer)
}

findDiff([1, 2, 3, 5], [1, 5, 8, 9])