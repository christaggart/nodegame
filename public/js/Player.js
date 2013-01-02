/**************************************************
** GAME PLAYER CLASS
**************************************************/
var Player = function(startX, startY, strFaction, strClass, strName) {
	var x = startX,
		y = startY,
		id,
		faction = strFaction,
    	playerClass = strClass,
    	name = strName,
    	position = { "x" : Math.floor((Math.random()*500)+1), "y" : Math.floor((Math.random()*500)+1) },
    	health = { "current" : 20, "max" : 50 },
    	energy = { "current" : 20, "max" : 50 },
    	attributes = { "strength" : 10, "agility" : 10, "intelligence" : 10 },
		moveAmount = 2;

	var getX = function() {
  	  return x;
	};


	var getHealth = function() {
  	  return health;
	};

	var getClass = function(){
		return playerClass;
	};

	var getEnergy = function() {
  	  return energy;
	};

	var getAttributes = function() {
		return attributes;
	};

	var getY = function() {
	    return y;
	};

	var setX = function(newX) {
    	x = newX;
	};

	var setY = function(newY) {
    	y = newY;
	};

	var update = function(keys) {

		var prevX = x,
    	prevY = y;

		// Up key takes priority over down
		if (keys.up) {
			y -= moveAmount;
		} else if (keys.down) {
			y += moveAmount;
		};

		// Left key takes priority over right
		if (keys.left) {
			x -= moveAmount;
		} else if (keys.right) {
			x += moveAmount;
		};

		return (prevX != x || prevY != y) ? true : false;
	};

	var draw = function(ctx) {
		ctx.fillStyle = "orange"
		ctx.fillRect(x-5, y-5, 10, 10);


		// Name
		ctx.fillStyle = "white"
		ctx.font = "9pt Arial";
		ctx.fillText("Aaron", x-15, y-25);
		ctx.moveTo(x - 15, y - 20);
        ctx.lineTo(x + 15, y - 20);

		// Health bar
		ctx.beginPath();
        ctx.strokeStyle = '#003300'; // Dark Green (default)
        ctx.moveTo(x - 15, y - 20);
        ctx.lineTo(x + 15, y - 20);
        ctx.lineWidth = 5;
        ctx.stroke();

        ctx.beginPath();
        ctx.strokeStyle = '#00AA00'; // Dark Green (default)
        ctx.moveTo(x - 15, y - 20);
        ctx.lineTo(x - 15 + 30 * 0.2, y - 20);
        ctx.lineWidth = 5;
        ctx.stroke();
	};

	return {
		getX: getX,
		getY: getY,
		getHealth: getHealth,
		getClass: getClass,
		getEnergy: getEnergy,
		getAttributes: getAttributes,
		setX: setX,
		setY: setY,
		update: update,
		draw: draw
	}
};