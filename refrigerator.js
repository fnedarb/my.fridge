const express = require(`express`);
const connectDB = require(`./config/db`);

const app = express();

connectDB();

app.get('/', (req,res) => res.send(`Howdy Partner`));

const port = process.env.PORT || 4444

app.listen(port, () => console.log(`Server running on ${port}`));