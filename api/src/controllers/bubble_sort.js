async function bubble_sort(req, res, next) {
  //receives an array of numbers => [  1, 11, 12, 90, 3,  8,  2]
  let inputArr = req.body;
  let responseArr = [[...req.body]];

  let sortAlgo = (inputArr) => {
    let len = inputArr.length;
    let stepArr;
    let checked;
    do {
      checked = false;
      for (let i = 0; i < len; i++) {
        if (inputArr[i] > inputArr[i + 1]) {
          let tmp = inputArr[i];
          inputArr[i] = inputArr[i + 1];
          inputArr[i + 1] = tmp;
          stepArr = [...inputArr];
          responseArr.push(stepArr);
          checked = true;
        }
      }
    } while (checked);
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
  bubble_sort,
};
