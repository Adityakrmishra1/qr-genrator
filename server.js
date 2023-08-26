const express = require('express');
const app = express();

const CONSTANTS = require('./src/constants/constants');
const apiRoutes = require('./src/app/api/api.routes');

app.use(express.json());
app.use('/api/v1', apiRoutes);


app.listen(CONSTANTS.PORT, ()=> {
	console.log("Sccessfully Started the Server at PORT " + CONSTANTS.PORT);
});