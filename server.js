const express = require('express');
require('dotenv').config();
const cors = require('cors');

const { connectionMongoDB } = require('./database/config');

//App Config
const app = express()
const port = process.env.PORT || 8001
//Middleware
//DB Config
connectionMongoDB();

app.use(express.json());
app.use(cors());
//API Endpoints
app.use('/api', require('./routes/cards'));
//Listener
app.listen(port, () => console.log(`Listening on localhost: ${port}`))