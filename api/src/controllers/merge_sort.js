let database = require("../../database/database");

async function merge_sort(req, res, next) {
  //receives an array of numbers => [  1, 11, 12, 90, 3,  8,  2]
  let inputArr = req.body;
  let responseArr = [[...req.body]];

  let sortAlgo = async (inputArr) => {
    let n = inputArr.length;
    let stepArr;

    let merge = (inputArr, l, m, r) => {
      // Merges two subarrays of arr[].
      // First subarray is arr[l..m]
      // Second subarray is arr[m+1..r]
      let n1 = m - l + 1;
      let n2 = r - m;

      // Create temp arrays
      let L = new Array(n1);
      let R = new Array(n2);

      // Copy data to temp arrays L[] and R[]
      for (let i = 0; i < n1; i++) L[i] = inputArr[l + i];
      for (let j = 0; j < n2; j++) R[j] = inputArr[m + 1 + j];

      // Merge the temp arrays back into arr[l..r]

      // Initial index of first subarray
      let i = 0;

      // Initial index of second subarray
      let j = 0;

      // Initial index of merged subarray
      let k = l;

      while (i < n1 && j < n2) {
        if (L[i] <= R[j]) {
          inputArr[k] = L[i];
          i++;
        } else {
          inputArr[k] = R[j];
          j++;
        }
        k++;
      }

      // Copy the remaining elements of
      // L[], if there are any
      while (i < n1) {
        inputArr[k] = L[i];
        i++;
        k++;
      }

      // Copy the remaining elements of
      // R[], if there are any
      while (j < n2) {
        inputArr[k] = R[j];
        j++;
        k++;
      }
      // print a copy the array after the iteration
      stepArr = [...inputArr];
      // save an snapshot of the array after the iteration
      responseArr.push(stepArr);
    };

    // l is for left index and r is
    // right index of the sub-array
    // of arr to be sorted */
    let mergeSort = (arr, l, r) => {
      if (l >= r) {
        return; //returns recursively
      }
      let m = l + parseInt((r - l) / 2);
      mergeSort(arr, l, m);
      mergeSort(arr, m + 1, r);
      merge(arr, l, m, r);
    };

    mergeSort(inputArr, 0, n - 1);

    return inputArr;
  };

  let outputArray = await sortAlgo(inputArr);

  let response = {
    sortedArr: responseArr,
    algoInfo: database.database.merge_sort,
  };

  try {
    res.json({ response: response });
  } catch (error) {
    res.send(error);
  }
}

module.exports = {
  merge_sort,
};
