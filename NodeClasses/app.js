const express = require('express');
const app = express();
const heapSortRoutes = require('./heapSortRoutes');

app.use('/api', heapSortRoutes);

app.listen(3000, () => console.log('Server is running on port 3000'));