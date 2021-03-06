function Ball (radius, colour) {
	if(radius === undefined) { radius = 40; }
	if(colour === undefined) { colour = '#ff0000'; }
	this.x = 0;
	this.y = 0;
	this.radius = radius;
	this.vx = 0;
	this.vy = 0;
	this.mass = 1;
	this.rotation = 0;
	this.scaleX = 1;
	this.scaleY = 1;
	this.colour = utils.parseColour(colour);
	this.lineWidth = 1;
};

Ball.prototype.draw = function(context) {
	context.save();
	context.translate(this.x, this.y);
	context.rotate(this.rotation);
	context.scale(this.scaleX, this.scaleY);
	context.lineWidth = this.lineWidth;
	context.fillStyle = this.colour;
	context.beginPath();
	context.arc(0, 0, this.radius, 0, (Math.PI * 2), true);
	context.closePath();
	context.fill();
	if(this.lineWidth > 0) {
		context.stroke();
	}
	context.restore();
};

Ball.prototype.fillColour = function(colour) {
	content.fillStyle = '#f3f3f3';
};

Ball.prototype.getBounds = function() {
	return {
		x: this.x - this.radius,
		y: this.y - this.radius,
		width: this.radius * 2,
		height: this.radius * 2
	};
};