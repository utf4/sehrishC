const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('./server/routes/index');
const app = express();
app.use(cors());
app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*');
	res.header(
		'Access-Control-Allow-Headers',
		'Origin, X-Requested-With, Content-Type, Accept'
	);
	next();
});
app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ extended: false, limit: '50mb' }));

app.use('/', express.static(path.join(__dirname, './client/dist')));

app.use('/payouts', routes.expense);

const port = 3000;
app.listen(port, () => {
	console.log(`Server running on port ${port}`);
});
module.exports = app;
