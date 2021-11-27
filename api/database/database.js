const database = {
  bubble_sort: {
    description:
      "This sorting algorithm is comparison-based algorithm in which each pair of adjacent elements is compared and the elements are swapped if they are not in order. This algorithm is not suitable for large data sets.",
    best: "Ο(n)",
    average: "Ο(n^2)",
    worst: "Ο(n^2)",
    memory: "Ο(1)",
    stable: "Yes",
    method: "Exchanging",
  },
  heap_sort: {
    description:
      "The Heapsort algorithm involves preparing the list by first turning it into a max heap. The algorithm then repeatedly swaps the first value of the list with the last value, decreasing the range of values considered in the heap operation by one, and sifting the new first value into its position in the heap.",
    best: "Ο(nlogn)",
    average: "Ο(nlogn)",
    worst: "Ο(nlogn)",
    memory: "Ο(1)",
    stable: "No",
    method: "Selection",
  },
  insertion_sort: {
    description:
      "Insertion sort is the sorting mechanism where the sorted array is built having one item at a time. The array elements are compared with each other sequentially and then arranged simultaneously in some particular order. The analogy can be understood from the style we arrange a deck of cards.",
    best: "Ο(n)",
    average: "Ο(n^2)",
    worst: "Ο(n^2)",
    memory: "Ο(1)",
    stable: "Yes",
    method: "Insertion",
  },
  merge_sort: {
    description:
      "Merge sort is one of the most efficient sorting algorithms. It works on the principle of Divide and Conquer. Merge sort repeatedly breaks down a list into several sublists until each sublist consists of a single element and merging those sublists in a manner that results into a sorted list.",
    best: "Ο(nlogn)",
    average: "Ο(nlogn)",
    worst: "Ο(nlogn)",
    memory: "Ο(n)",
    stable: "Yes",
    method: "Merging",
  },
  quick_sort: {
    description:
      "It is one of the most efficient sorting algorithms and is based on the splitting of an array into smaller ones and swapping based on the comparison with 'pivot' element selected. Due to this, quick sort is also called as \"Partition Exchange\" sort. It falls into the category of divide and conquer approach of problem-solving methodology.",
    best: "Ο(nlogn)",
    average: "Ο(nlogn)",
    worst: "Ο(n^2)",
    memory: "Ο(logn)",
    stable: "No",
    method: "Partitioning",
  },
  selection_sort: {
    description:
      "This sorting algorithm is comparison-based algorithm in which each pair of adjacent elements is compared and the elements are swapped if they are not in order. This algorithm is not suitable for large data sets.",
    best: "Ο(n^2)",
    average: "Ο(n^2)",
    worst: "Ο(n^2)",
    memory: "Ο(1)",
    stable: "No",
    method: "Selection",
  },
};

module.exports = {
  database,
};
