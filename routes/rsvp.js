var data = {
  rsvp: ['ixd@ucsd.edu']
};

/*
 * GET tasks page.
 */
exports.adminView = function(req, res){
  res.render('rsvp', data);
};
exports.addRSVP = function(req, res) {
	console.log("addRSVP Called");
	console.log(req);
	var rsvpEmail = req.body.rsvpEmail;

	console.log(rsvpEmail);
	data.rsvp.push(rsvpEmail);
	res.send(rsvpEmail);
}
