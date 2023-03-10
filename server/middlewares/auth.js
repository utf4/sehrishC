const db = require('../models');
const Token = db.token;
const User = db.user;

const checkAuth = async function (req, res, next) {
	const _token = req.headers['x-access-token'];
	if (!_token) {
		return res
			.status(403)
			.send({ status: false, message: 'No token provided.' });
	} else {
		const token = await Token.findOne({ where: { token: _token } });
		if (token) {
			req.userId = null;
			const user = await User.findOne({
				// Find user from DB to get ID for Next Requests
				where: { id: token.userId },
			});
			if (user) {
				req.userId = user.id;
			}
			next();
		} else {
			return res
				.status(403)
				.send({ status: false, message: 'Failed to authenticate token.' });
		}
	}
};
module.exports = checkAuth;
