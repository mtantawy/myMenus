var mysql = require('mysql');

exports.getAll = function(req, res) {
	var connection = mysql.createConnection('mysql://root:root@localhost/elmenus');
	connection.connect(); 
	//var queryString = 'SELECT * from categories';
	var queryString = 'SELECT categories.id, categories.name, menus.name AS \'menuname\' FROM categories, menus WHERE categories.menuid=menus.id';	 
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
	var queryString = 'SELECT categories.id, categories.name, menus.name AS \'menuname\' FROM categories, menus WHERE categories.menuid=menus.id AND categories.id='+req.params.id;	 
	connection.query(queryString, function(err, rows, fields) {
		if (err) throw err;
		//res.writeHead(200, {'Content-Type': 'x-application/json'});
		res.send(JSON.stringify(rows)); 
	});
	connection.end();
};

exports.addCategory = function(req, res) {
	var category = req.body;
	var connection = mysql.createConnection('mysql://root:root@localhost/elmenus');
	connection.connect(); 
	var queryString = 'INSERT into categories VALUES("'+category[0].id+'","'+category[0].name+'","'+category[0].menuid+'")';
	connection.query(queryString, function(err, rows, fields) {
		if (err) throw err;
		//res.writeHead(200, {'Content-Type': 'x-application/json'});
		res.send(JSON.stringify(rows)); 
	});
	connection.end();
};

exports.updateCategory = function(req, res) {
	var category = req.body;
	var connection = mysql.createConnection('mysql://root:root@localhost/elmenus');
	connection.connect(); 
	var queryString = 'UPDATE categories SET name="'+category[0].name+'", menuid="'+category[0].menuid+'" WHERE id='+req.params.id;
	connection.query(queryString, function(err, rows, fields) {
		if (err) throw err;
		//res.writeHead(200, {'Content-Type': 'x-application/json'});
		res.send(JSON.stringify(rows)); 
	});
	connection.end();
};
exports.deleteCategory = function(req, res) {
	var connection = mysql.createConnection('mysql://root:root@localhost/elmenus');
	connection.connect(); 
	var queryString = 'DELETE FROM categories WHERE id='+req.params.id;
	connection.query(queryString, function(err, rows, fields) {
		if (err) throw err;
		//res.writeHead(200, {'Content-Type': 'x-application/json'});
		res.send(JSON.stringify(rows)); 
	});
	connection.end();
};
