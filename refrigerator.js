const express = require('express');
const connectDB = require('./config/db');
var cors = require('cors');

const port = 4445
const food = require('./api/fridges');

const app = express();

// Connect Database
connectDB();

// Middleware
app.use(cors({origin:true, credentials:true}));
app.use(express.urlencoded({ extended: false }));
app.use(express.json({extended:false}))

// Routes
app.use('/', food);

app.get('/', (req,res) => res.send(`Howdy Partsner`));

app.listen(port, () => console.log(`Server running on ${port}`));