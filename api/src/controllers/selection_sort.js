let database = require("../../database/database");

async function selection_sort(req, res, next) {
  console.log(database.database.selection_sort);
  //receives an array of numbers => [  1, 11, 12, 90, 3,  8,  2]
  let inputArr = req.body;
  let responseArr = [[...req.body]];

  let sortAlgo = (inputArr) => {
    let len = inputArr.length;
    let stepArr;
    let checked;

    let swap = (arr, xp, yp) => {
      let temp = arr[xp];
      arr[xp] = arr[yp];
      arr[yp] = temp;
    };

    let selectionSort = (arr, n) => {
      let i, j, min_idx;

      // One by one move boundary of unsorted subarray
      for (i = 0; i < n - 1; i++) {
        // Find the minimum element in unsorted array
        min_idx = i;
        for (j = i + 1; j < n; j++) if (arr[j] < arr[min_idx]) min_idx = j;

        // Swap the found minimum element with the first element
        swap(arr, min_idx, i);
        // print a copy the array after the iteration
        stepArr = [...arr];
        // save an snapshot of the array after the iteration
        responseArr.push(stepArr);
      }
    };

    selectionSort(inputArr, len);
  };

  let outputArray = await sortAlgo(inputArr);

  let response = {
    sortedArr: responseArr,
    algoInfo: database.database.selection_sort,
  };

  try {
    res.json({ response: response });
  } catch (error) {
    res.send(error);
  }
}

module.exports = {
  selection_sort,
};
