async function insertion_sort(req, res, next) {
  //receives an array of numbers => [  1, 11, 12, 90, 3,  8,  2]
  let inputArr = req.body;
  let responseArr = [[...req.body]];

  let sortAlgo = (inputArr) => {
    let n = inputArr.length;
    let stepArr;

    let i, key, j;
    for (i = 1; i < n; i++) {
      key = inputArr[i];
      j = i - 1;

      /* Move elements of arr[0..i-1], that are 
          greater than key, to one position ahead 
          of their current position */
      while (j >= 0 && inputArr[j] > key) {
        inputArr[j + 1] = inputArr[j];
        j = j - 1;
      }
      inputArr[j + 1] = key;
      // print a copy the array after the iteration
      stepArr = [...inputArr];
      // save an snapshot of the array after the iteration
      responseArr.push(stepArr);
    }
    return inputArr;
  };

  let outputArray = await sortAlgo(inputArr);

  try {
    res.json({ response: responseArr });
  } catch (error) {
    res.send(error);
  }
}

module.exports = {
  insertion_sort,
};
