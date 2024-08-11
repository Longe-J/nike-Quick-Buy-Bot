const express = require('express');
const cors = require('cors');
const buyShoe = require('./puppet')

const app = express();
app.use(express.json());
app.use(cors());


buyShoe();