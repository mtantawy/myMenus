var express = require('express');
var bodyParser = require('body-parser');


// my custom
var menus = require('./routes/menus');
var categories = require('./routes/categories');
var items = require('./routes/items');
var sizes_prices = require('./routes/sizes_prices');
 
var app = express();

app.use(bodyParser());

// CORS
app.all('*', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');

  if ('OPTIONS' == req.method) {
      res.send(200);
  }
  else {
      next();
  }
 });
 
app.get('/menus', menus.getAll);
app.get('/menus/:id', menus.getById);
app.post('/menus', menus.addMenu);
app.put('/menus/:id', menus.updateMenu);
app.delete('/menus/:id', menus.deleteMenu);

 
app.get('/categories', categories.getAll);
app.get('/categories/:id', categories.getById);
app.post('/categories', categories.addCategory);
app.put('/categories/:id', categories.updateCategory);
app.delete('/categories/:id', categories.deleteCategory);

 
app.get('/items', items.getAll);
app.get('/items/:id', items.getById);
app.post('/items', items.addItem);
app.put('/items/:id', items.updateItem);
app.delete('/items/:id', items.deleteItem);


app.get('/sizes_prices', sizes_prices.getAll);
app.get('/sizes_prices/:id', sizes_prices.getById);
app.post('/sizes_prices', sizes_prices.addSizePrice);
app.put('/sizes_prices/:id', sizes_prices.updateSizePrice);
app.delete('/sizes_prices/:id', sizes_prices.deleteSizePrice); 

app.listen(4000);
console.log('Listening on port 4000...');
