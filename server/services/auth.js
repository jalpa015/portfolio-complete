const jwt = require("express-jwt");
const jwksRsa = require("jwks-rsa");

const config = require("../config");
const NAMESPACE = config.NAMESPACE;

// MIDDLEWARE
exports.checkJWT = jwt({
	secret: jwksRsa.expressJwtSecret({
		cache: true,
		rateLimit: true,
		jwksRequestsPerMinute: 50,
		jwksUri: "https://dev-3nd55e7f.us.auth0.com/.well-known/jwks.json",
	}),
	audience: "F1Ts2BbYycF5WKl1MRMgNCV83lF4fM7h",
	issuer: "https://dev-3nd55e7f.us.auth0.com/",
	algorithms: ["RS256"],
});

exports.checkRole = (role) => (req, res, next) => {
	const user = req.user;

	if (
		user &&
		user[NAMESPACE + "/role"] &&
		user[NAMESPACE + "/role"] === role
	) {
		next();
	} else {
		return res
			.status(401)
			.send({
				title: "Not Authorized",
				detail: "You are not authorized to access this data",
			});
	}
};
