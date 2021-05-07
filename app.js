const express = require('express');
const app = express();

port = process.env.PORT || 3000;

const encodeRoute = require('./routes/encode');
const decodeRoute = require('./routes/decode');



app.use('/encode',encodeRoute);
app.use('/decode',decodeRoute);

app.listen(port);