
const express = require('express');
const app = express();

const port = 8881;
const www = './../';

app.use(express.static(www));
app.listen(port, () => console.log(`listening on http://localhost:${port}`));
