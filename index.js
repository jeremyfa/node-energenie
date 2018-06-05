
var spawn = require('child_process').spawn;
var spawnSync = require('child_process').spawnSync;

module.exports = {

    switchOn: function(socket, callback) {
        if (socket == null) socket = 0;
        else socket = parseInt(socket, 10);
        var cmd = spawn('python', [__dirname+'/switch.py', 'on', socket]);
        var err = '';
        cmd.stderr.on('data', function(data) {
            err += data;
        });
        cmd.on('close', function(code) {
            if (callback != null) {
                if (err.length > 0) callback(err);
                else callback(null);
            }
        });
    },

    switchOff: function(socket, callback) {
        if (socket == null) socket = 0;
        else socket = parseInt(socket, 10);
        var cmd = spawn('python', [__dirname+'/switch.py', 'off', socket]);
        var err = '';
        cmd.stderr.on('data', function(data) {
            err += data;
        });
        cmd.on('close', function(code) {
            if (callback != null) {
                if (err.length > 0) callback(err);
                else callback(null);
            }
        });
    },

    switchOnSync: function(socket) {
        if (socket == null) socket = 0;
        else socket = parseInt(socket, 10);
        var result = spawnSync('python', [__dirname+'/switch.py', 'on', socket]);
        if (result.stderr.length > 0) throw new Error(result.stderr);
    },

    switchOffSync: function(socket) {
        if (socket == null) socket = 0;
        else socket = parseInt(socket, 10);
        var result = spawnSync('python', [__dirname+'/switch.py', 'off', socket]);
        if (result.stderr.length > 0) throw new Error(result.stderr);
    }
}
