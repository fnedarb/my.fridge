const express = require("express");

const app = express();

app.get('/', (req,res) => res.send("hi there"));

const port = process.env.PORT || 4444

app.listen(port, () => console.log(`Server running on ${port}`))