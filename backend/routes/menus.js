var mysql = require('mysql');

exports.getAll = function(req, res) {
	var connection = mysql.createConnection('mysql://root:root@localhost/elmenus');
	connection.connect(); 
	var queryString = 'SELECT * FROM menus';	 
	connection.query(queryString, function(err, rows, fields) {
		if (err) throw err;
		//res.writeHead(200, {'Content-Type': 'x-application/json'});
		res.send(JSON.stringify(rows)); 
	});
	connection.end();
};
 
exports.getById = function(req, res) {
    var connection = mysql.createConnection('mysql://root:root@localhost/elmenus');
	connection.connect(); 
	var queryString = 'SELECT * FROM menus WHERE id='+req.params.id;	 
	connection.query(queryString, function(err, rows, fields) {
		if (err) throw err;
		//res.writeHead(200, {'Content-Type': 'x-application/json'});
		res.send(JSON.stringify(rows)); 
	});
	connection.end();
};

exports.addMenu = function(req, res) {
	var menu = req.body;
	var connection = mysql.createConnection('mysql://root:root@localhost/elmenus');
	connection.connect(); 
	var queryString = 'INSERT into menus VALUES("'+menu[0].id+'","'+menu[0].name+'")';
	connection.query(queryString, function(err, rows, fields) {
		if (err) throw err;
		//res.writeHead(200, {'Content-Type': 'x-application/json'});
		res.send(JSON.stringify(rows)); 
	});
	connection.end();
};

exports.updateMenu = function(req, res) {
	var menu = req.body;
	var connection = mysql.createConnection('mysql://root:root@localhost/elmenus');
	connection.connect(); 
	var queryString = 'UPDATE menus SET name="'+menu[0].name+'" WHERE id='+req.params.id;
	connection.query(queryString, function(err, rows, fields) {
		if (err) throw err;
		//res.writeHead(200, {'Content-Type': 'x-application/json'});
		res.send(JSON.stringify(rows)); 
	});
	connection.end();
};
exports.deleteMenu = function(req, res) {
	var connection = mysql.createConnection('mysql://root:root@localhost/elmenus');
	connection.connect(); 
	var queryString = 'DELETE FROM menus WHERE id='+req.params.id;
	connection.query(queryString, function(err, rows, fields) {
		if (err) throw err;
		//res.writeHead(200, {'Content-Type': 'x-application/json'});
		res.send(JSON.stringify(rows)); 
	});
	connection.end();
};
