var mysql = require('mysql');

exports.getAll = function(req, res) {
	var connection = mysql.createConnection('mysql://root:root@localhost/elmenus');
	connection.connect(); 
	var queryString = 'SELECT sizes_prices.id, sizes_prices.small_price, sizes_prices.medium_price, sizes_prices.large_price, items.name AS \'itemname\', categories.name AS \'categoryname\', menus.name AS \'menuname\' FROM sizes_prices, items, categories, menus WHERE sizes_prices.itemid = items.id AND items.categoryid=categories.id AND categories.menuid=menus.id';	 
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
	var queryString = 'SELECT sizes_prices.id, sizes_prices.small_price, sizes_prices.medium_price, sizes_prices.large_price, items.name AS \'itemname\', categories.name AS \'categoryname\', menus.name AS \'menuname\' FROM sizes_prices, items, categories, menus WHERE sizes_prices.itemid = items.id AND items.categoryid=categories.id AND categories.menuid=menus.id AND sizes_prices.id='+req.params.id;	 
	connection.query(queryString, function(err, rows, fields) {
		if (err) throw err;
		//res.writeHead(200, {'Content-Type': 'x-application/json'});
		res.send(JSON.stringify(rows)); 
	});
	connection.end();
};

exports.addSizePrice = function(req, res) {
	var sizeprice = req.body;
	var connection = mysql.createConnection('mysql://root:root@localhost/elmenus');
	connection.connect(); 
	var queryString = 'INSERT into sizes_prices VALUES("'+sizeprice[0].id+'","'+sizeprice[0].small_price+'","'+sizeprice[0].medium_price+'","'+sizeprice[0].large_price+'","'+sizeprice[0].itemid+'")';
	connection.query(queryString, function(err, rows, fields) {
		if (err) throw err;
		//res.writeHead(200, {'Content-Type': 'x-application/json'});
		res.send(JSON.stringify(rows)); 
	});
	connection.end();
};

exports.updateSizePrice = function(req, res) {
	var sizeprice = req.body;
	var connection = mysql.createConnection('mysql://root:root@localhost/elmenus');
	connection.connect(); 
	var queryString = 'UPDATE sizes_prices SET small_price="'+sizeprice[0].small_price+'", medium_price="'+sizeprice[0].medium_price+'", large_price="'+sizeprice[0].large_price+'", itemid="'+sizeprice[0].itemid+'" where id='+req.params.id;
	connection.query(queryString, function(err, rows, fields) {
		if (err) throw err;
		//res.writeHead(200, {'Content-Type': 'x-application/json'});
		res.send(JSON.stringify(rows)); 
	});
	connection.end();
};
exports.deleteSizePrice = function(req, res) {
	var connection = mysql.createConnection('mysql://root:root@localhost/elmenus');
	connection.connect(); 
	var queryString = 'DELETE FROM sizes_prices WHERE id='+req.params.id;
	connection.query(queryString, function(err, rows, fields) {
		if (err) throw err;
		//res.writeHead(200, {'Content-Type': 'x-application/json'});
		res.send(JSON.stringify(rows)); 
	});
	connection.end();
};
