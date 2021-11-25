async function quick_sort(req, res, next) {
  const array = req.body;
  console.log(array);

  try {
    res.json({ respuesta: [1, 2, 3, 4, 5, 6] });
  } catch (error) {
    res.send(error);
  }
}

module.exports = {
  quick_sort,
};
