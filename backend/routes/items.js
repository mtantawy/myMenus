var mysql = require('mysql');

exports.getAll = function(req, res) {
	var connection = mysql.createConnection('mysql://root:root@localhost/elmenus');
	connection.connect(); 
	var queryString = 'SELECT items.id, items.name, categories.name AS \'categoryname\', menus.name AS \'menuname\' FROM items, categories, menus WHERE items.categoryid=categories.id AND categories.menuid=menus.id';	 
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
	var queryString = 'SELECT items.id, items.name, categories.name AS \'categoryname\', menus.name AS \'menuname\' FROM items, categories, menus WHERE items.categoryid=categories.id AND categories.menuid=menus.id AND items.id='+req.params.id;	 
	connection.query(queryString, function(err, rows, fields) {
		if (err) throw err;
		//res.writeHead(200, {'Content-Type': 'x-application/json'});
		res.send(JSON.stringify(rows)); 
	});
	connection.end();
};

exports.addItem = function(req, res) {
	var item = req.body;
	var connection = mysql.createConnection('mysql://root:root@localhost/elmenus');
	connection.connect(); 
	var queryString = 'INSERT into items VALUES("'+item[0].id+'","'+item[0].name+'","'+item[0].categoryid+'")';
	connection.query(queryString, function(err, rows, fields) {
		if (err) throw err;
		//res.writeHead(200, {'Content-Type': 'x-application/json'});
		res.send(JSON.stringify(rows)); 
	});
	connection.end();
};

exports.updateItem = function(req, res) {
	var item = req.body;
	var connection = mysql.createConnection('mysql://root:root@localhost/elmenus');
	connection.connect(); 
	var queryString = 'UPDATE items SET name="'+item[0].name+'", categoryid="'+item[0].categoryid+'" where id='+req.params.id;
	connection.query(queryString, function(err, rows, fields) {
		if (err) throw err;
		//res.writeHead(200, {'Content-Type': 'x-application/json'});
		res.send(JSON.stringify(rows)); 
	});
	connection.end();
};
exports.deleteItem = function(req, res) {
	var connection = mysql.createConnection('mysql://root:root@localhost/elmenus');
	connection.connect(); 
	var queryString = 'DELETE FROM items WHERE id='+req.params.id;
	connection.query(queryString, function(err, rows, fields) {
		if (err) throw err;
		//res.writeHead(200, {'Content-Type': 'x-application/json'});
		res.send(JSON.stringify(rows)); 
	});
	connection.end();
};
