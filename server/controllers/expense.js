const { calculatePayout } = require('../services/payout');
const { validationResult } = require('express-validator');

const project = {
	create: async (req, res) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res
				.status(400)
				.json({ errors: errors.array(), status: false, message: 'Error' });
		}
		const payouts = await calculatePayout(req.body.expenses);
		res.status(200).json({ data: payouts, status: true, message: 'Success' });
	},
};

module.exports = project;
