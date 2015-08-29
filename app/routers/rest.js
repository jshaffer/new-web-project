module.exports = function(fileName) {

	var express = require("express"),
		router = express.Router();

	router.route("/test")
		.get(function(req, res) {
			DataModel.findById(req.params.id,
				function(err, result) {
					if (err) {
						
						return;
					}
					res.json(result);
				});
		})
		.put(function(req, res) {
			DataModel.findByIdAndUpdate(req.params.id,
				req.body,
				function(err, result) {
					if (err) {
						res.status(500).json(err);
						return;
					}
					res.json(req.body);
				});
		})
		.delete(function(req, res) {
			DataModel.findByIdAndRemove(req.params.id,
				function(err, result) {
					if (err) {
						res.status(500).json(err);
						return;
					}
					res.json(result);
				});
		});

 	return router;
};
