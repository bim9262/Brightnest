/**
 * =================
 * MODULE - VLC
 * =================
 * Driver to handle VLC media player as an actuator
 */
 var exec = require('child_process').exec,
	logger = require("../../logger");

/**
 * add
 * ====
 * Add the sensor to the system.
 * Parameters:
 *	- customId (String):		Custom ID of the new device for the driver
 *	- cb (Function(error)):		Callback with an error or *null* as parameter
 */
function add(customId, cb) {
	// Nothing to do (no need to inform VLC or anything)
	cb(null);
}

/**
 * update
 * ====
 * Change the custom ID of the device.
 * Parameters:
 *	- prevCustomId (String):	Previous ID
 *	- newCustomId (String):		New ID
 *	- cb (Function(error)):		Callback with an error or *null* as parameter
 */
function update(prevCustomId, newCustomId, cb) {
	// Nothing to do (no need to inform VLC or anything)
	cb(null);
}

/**
 * remove
 * ====
 * Remove a device.
 * Parameters:
 *	- customId (String):		ID
 *	- cb (Function(error)):		Callback with an error or *null* as parameter
 */
function remove(customId, cb) {
	// Nothing to do (no need to inform VLC or anything)
	cb(null);
}

/**
 * apply
 * ====
 * Requests the actuator to apply the given value.
 * Here, VLC is launched, with the value as a path to the requested music.
 * Parameters:
 *	- customId (String):		ID
 *	- value (Object):			Value to apply
 *	- cb (Function(error)):		Callback with an error or *null* as parameter
 */
function apply(customId, value, cb) {
	//var cmd = 'vlc '+ value.split(/[|><()$`;]/)[0] + ' & exit'; Nice but limit the filenames
	var cmd = 'vlc '+ value.split(/[|><$`]/)[0] + ' & exit';
	logger.debug(cmd);
	exec(cmd,function(error,stdout,stderr){}); // Really dangerous to do so. Open to malicious behavior (ex: if value=". | rm -rf *"...)
	cb();
}

exports.add = add;
exports.update = update;
exports.remove = remove;
exports.apply = apply;
