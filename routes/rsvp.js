var data = {
  rsvp: ['ixd@ucsd.edu']
};

/*
 * GET tasks page.
 */
exports.adminView = function(req, res){
  res.render('rsvp', data);
};
exports.addRSVP = function(Req, res) {
	console.log("addRSVP Called");
	var rsvpEmail = req.body.rsvpEmail;

	console.log(rsvpEmail);
	data.rsvp.push(rsvpEmail);
	res.send(rsvpEmail);
}
