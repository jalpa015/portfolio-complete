const prod = process.env.NODE_ENV === "production";

module.exports = {
	"process.env.BASE_URL": prod
		? "https://jalpa-portfolio.herokuapp.com"
		: "http://localhost:3000",
	"process.env.NAMESPACE": "https://jalpa-portfolio.herokuapp.com",
	"process.env.CLIENT_ID": "F1Ts2BbYycF5WKl1MRMgNCV83lF4fM7h",
};
