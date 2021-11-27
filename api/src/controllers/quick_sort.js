async function quick_sort(req, res, next) {
  //receives an array of numbers => [  1, 11, 12, 90, 3,  8,  2]
  let inputArr = req.body;
  let responseArr = [[...req.body]];

  let sortAlgo = async (inputArr) => {
    let n = inputArr.length;

    // This Function handles sorting part of quick sort
    // start and end points to first and last element of
    // an array respectively
    let partition = (start, end, array) => {
      // Initializing pivot's index to start
      let pivot_index = start;
      let pivot = array[pivot_index];

      // This loop runs till start pointer crosses
      // end pointer, and when it does we swap the
      // pivot with element on end pointer

      while (start < end) {
        // Increment the start pointer till it finds an
        // element greater than  pivot
        while (start < array.length && array[start] <= pivot) {
          start += 1;
        }

        // Decrement the end pointer till it finds an
        // element less than pivot
        while (array[end] > pivot) {
          end -= 1;
        }

        // If start and end have not crossed each other,
        //swap the numbers on start and end
        if (start < end) {
          [array[start], array[end]] = [array[end], array[start]];
        }
      }

      // Swap pivot element with element on end pointer.
      // This puts pivot on its correct sorted place.
      [array[end], array[pivot_index]] = [array[pivot_index], array[end]];

      // Returning end pointer to divide the array into 2
      return end;
    };

    // The main function that implements QuickSort
    let quick_sort = (start, end, array) => {
      let stepArr;

      if (start < end) {
        // p is partitioning index, array[p]
        // is at right place
        p = partition(start, end, array);

        stepArr = array;
        responseArr.push(stepArr);

        // Sort elements before partition
        // and after partition
        quick_sort(start, p - 1, array);
        quick_sort(p + 1, end, array);
      }
    };

    quick_sort(0, n - 1, inputArr);

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
  quick_sort,
};
