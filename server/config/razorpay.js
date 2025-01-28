const Razorpay = require("razorpay");

exports.instance = new Razorpay({
	key_id: "rzp_test_BszWZOAW35E8ip",
	key_secret: process.env.RAZORPAY_SECRET,
});
