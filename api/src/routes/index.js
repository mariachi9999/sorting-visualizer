const { Router } = require("express");
const { bubble_sort } = require("../controllers/bubble_sort.js");
const { heap_sort } = require("../controllers/heap_sort.js");
const { insertion_sort } = require("../controllers/insertion_sort.js");
const { merge_sort } = require("../controllers/merge_sort.js");
const { quick_sort } = require("../controllers/quick_sort.js");

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.post("/bubble", bubble_sort);
router.post("/heap", heap_sort);
router.post("/insertion", insertion_sort);
router.post("/merge", merge_sort);
router.post("/quick", quick_sort);

module.exports = router;
