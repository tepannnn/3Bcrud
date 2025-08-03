const express = require('express');
const cors = require('cors');
const app = express();
const userRoutes = require('./routes');

app.use(cors());
app.use(express.json());
app.use('/crud', userRoutes);

app.listen(5000, ()=> console.log('SERVER is Running on Port 5000'));