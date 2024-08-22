const express = require('express');
const router = express.Router();

const DataRepository = require('./dataRepository');
const HeapSortService = require('./heapSortService');
const HeapSortController = require('./heapSortController');

const dataRepository = new DataRepository();
const heapSortService = new HeapSortService(dataRepository);
const heapSortController = new HeapSortController(heapSortService);

router.get('/sort', (req, res) => heapSortController.sort(req, res));

module.exports = router;