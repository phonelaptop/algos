const getRid = (array) => {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    const filtered = array.filter((num) => num === array[i]);
    result.push(filtered.length);
  }

  const answer = [];
  for (let i = 0; i < array.length; i++) {
    if (result[i] === 4 && !answer.includes(array[i])) {
      answer.push(array[i]);
    }
  }

  console.log("This is answer", answer);
};

getRid([1, 1, 5, 5, 2,2,2,2, 9, 9, 9]);
