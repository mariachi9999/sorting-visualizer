let database = require("../../database/database");

async function heap_sort(req, res, next) {
  //receives an array of numbers => [  1, 11, 12, 90, 3,  8,  2]
  let inputArr = req.body;
  let responseArr = [[...req.body]];

  let sortAlgo = (inputArr) => {
    let n = inputArr.length;
    let stepArr;

    // Build heap (rearrange array)
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) heapify(inputArr, n, i);

    // One by one extract an element from heap
    for (let i = n - 1; i > 0; i--) {
      // Move current root to end
      let temp = inputArr[0];
      inputArr[0] = inputArr[i];
      inputArr[i] = temp;
      // print a copy the array after the iteration
      stepArr = [...inputArr];
      // save an snapshot of the array after the iteration
      responseArr.push(stepArr);

      // call max heapify on the reduced heap
      heapify(inputArr, i, 0);
    }

    // To heapify a subtree rooted with node i which is
    // an index in arr[]. n is size of heap
    function heapify(arr, n, i) {
      let largest = i; // Initialize largest as root
      let l = 2 * i + 1; // left = 2*i + 1
      let r = 2 * i + 2; // right = 2*i + 2

      // If left child is larger than root
      if (l < n && arr[l] > arr[largest]) largest = l;

      // If right child is larger than largest so far
      if (r < n && arr[r] > arr[largest]) largest = r;

      // If largest is not root
      if (largest != i) {
        let swap = arr[i];
        arr[i] = arr[largest];
        arr[largest] = swap;

        // Recursively heapify the affected sub-tree
        heapify(arr, n, largest);
      }
    }
    return inputArr;
  };
  let outputArray = await sortAlgo(inputArr);

  let response = {
    sortedArr: responseArr,
    algoInfo: database.database.heap_sort,
  };

  try {
    res.json({ response: response });
  } catch (error) {
    res.send(error);
  }
}

module.exports = {
  heap_sort,
};
