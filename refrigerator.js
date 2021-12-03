const express = require(`express`);
const connectDB = require(`./config/db`);
var cors = require('cors');

const food = require('./routes/api/fridges');

const app = express();

// Connect Database
connectDB();

// Middleware
app.use(cors({origin:true, credentials:true}));
app.use(express.json({extended:false}))

// Routes
app.use('api/fridges', food);

app.get('/', (req,res) => res.send(`Howdy Partner`));



const port = process.env.PORT || 4444

app.listen(port, () => console.log(`Server running on ${port}`));