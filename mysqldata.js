var mysql = require("mysql")
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Nav@gur1",
  database:"mydatabasenode"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});


// con.connect(function(err) {
//     if (err) throw err;
//     console.log("Connected!");
//     con.query("CREATE DATABASE mydatabasenode", function (err, result) {
//       if (err) throw err;
//       console.log("Database created");
//     });
//   });

// con.connect(function(err) {
//     if (err) throw err;
//     console.log("Connected!");
//     var table = "CREATE TABLE curdoprationNode (id INT AUTO_INCREMENT PRIMARY KEY,name VARCHAR(255), address VARCHAR(255))"
//     con.query(table, function (err, result) {
//       if (err) throw err;
//       console.log("Table created created");
//     });
//   });


// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
//   var sql = "INSERT INTO curdoprationNode (name, address) VALUES ?";
//   var values = [
//     ['John', 'Highway 71'],
//     ['Peter', 'Lowstreet 4'],
//     ['Amy', 'Apple st 652'],
//     ['Hannah', 'Mountain 21'],
//     ['Michael', 'Valley 345'],
//     ['Sandy', 'Ocean blvd 2'],
//     ['Betty', 'Green Grass 1'],
//     ['Richard', 'Sky st 331'],
//     ['Susan', 'One way 98'],
//     ['Vicky', 'Yellow Garden 2'],
//     ['Ben', 'Park Lane 38'],
//     ['William', 'Central st 954'],
//     ['Chuck', 'Main Road 989'],
//     ['Viola', 'Sideway 1633']
//   ];
//   con.query(sql,[values], function (err, result) {
//     if (err) throw err;
//     console.log("1 record inserted");
//   });
// });

// con.connect(function(err) {
//   if (err) throw err;
//   var sql = "INSERT INTO curdoprationNode (name, address) VALUES ('Michelle', 'Blue Village 1')";
//   con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log("1 record inserted, ID: " + result.insertId);
//   });
// });

// con.connect(function(err) {
//   if (err) throw err;
//   con.query("SELECT * FROM curdoprationNode", function (err, result, fields) {
//     if (err) throw err;
//     console.log(result);
//   });
// });

// con.connect(function(err) {
//   if (err) throw err;
//   con.query("SELECT name, address FROM curdoprationNode", function (err, result, fields) {
//     if (err) throw err;
//     console.log(result);
//   });
// });

// con.connect(function(err) {
//   if (err) throw err;
//   con.query("SELECT * FROM curdoprationNode WHERE address = 'Valley 345'", function (err, result) {
//     if (err) throw err;
//     console.log(result);
//   });
// });


// con.connect(function(err) {
//   if (err) throw err;
//   con.query("SELECT * FROM curdoprationNode WHERE address LIKE 'o%'", function (err, result) {
//     if (err) throw err;
//     console.log(result);
//   });
// });


// var adr = 'One way 98';
// var sql = 'SELECT * FROM curdoprationNode WHERE address = ' + mysql.escape(adr);
// con.query(sql, function (err, result) {
//   if (err) throw err;
//   console.log(result);
// });

// var adr = 'One way 98' ;
// var sql = 'SELECT * FROM curdoprationNode WHERE address = ?';
// con.query(sql, [adr], function (err, result) {
//   if (err) throw err;
//   console.log(result);
// });

// var name = 'Amy';
// var adr = 'Mountain 21';
// var sql = 'SELECT * FROM curdoprationNode WHERE name = ? OR address = ?';
// con.query(sql, [name, adr], function (err, result) {
//   if (err) throw err;
//   console.log(result);
// });

// con.connect(function(err) {
//   if (err) throw err;
//   con.query("SELECT * FROM curdoprationNode ORDER BY name", function (err, result) {
//     if (err) throw err;
//     console.log(result);
//   });
// });

// con.connect(function(err) {
//   if (err) throw err;
//   con.query("SELECT * FROM curdoprationNode ORDER BY address DESC", function (err, result) {
//     if (err) throw err;
//     console.log(result);
//   });
// });

// con.connect(function(err) {
//   if (err) throw err;
//   var sql = "DELETE FROM curdoprationNode WHERE address = 'Mountain 21'";
//   con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log("Number of records deleted: " + result.affectedRows);
//   });
// });

// con.connect(function(err) {
//   if (err) throw err;
//   var sql = "DROP TABLE curdoprationNode";
//   con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log("Table deleted");
//   });
// });

// con.connect(function(err) {
//   if (err) throw err;
//   var sql = "DROP TABLE IF EXISTS curdoprationNode";
//   con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log(result);
//   });
// });

// con.connect(function(err) {
//   if (err) throw err;
//   var sql = "UPDATE curdoprationNode SET address = 'Canyon 123' WHERE address = 'Valley 345'";
//   con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log(result.affectedRows + " record(s) updated");
//   });
// });

// con.connect(function(err) {
//   if (err) throw err;
//   var sql = "SELECT * FROM curdoprationNode LIMIT 12";
//   con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log(result);
//   });
// });

// con.connect(function(err) {
//   if (err) throw err;
//   var sql = "SELECT * FROM curdoprationNode LIMIT 5 OFFSET 4";
//   con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log(result);
//   });
// });


// con.connect(function(err) {
//   if (err) throw err;
//   var sql = "SELECT * FROM curdoprationNode LIMIT 3, 6";
//   con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log(result);
//   });
// });
// [
//   { id: 1, name: 'John', favorite_product: 154},
//   { id: 2, name: 'Peter', favorite_product: 154},
//   { id: 3, name: 'Amy', favorite_product: 155},
//   { id: 4, name: 'Hannah', favorite_product:23},
//   { id: 5, name: 'Michael', favorite_product:43}
// ]
// [
//   { id: 154, name: 'Chocolate Heaven' },
//   { id: 155, name: 'Tasty Lemons' },
//   { id: 156, name: 'Vanilla Dreams' }
// ]

// con.connect(function(err) {
//   if (err) throw err;
//   var sql = "SELECT curdoprationNode.name AS curdoprationNode, products.name AS favorite FROM curdoprationNode JOIN products ON curdoprationNode.favorite_product = products.id";
//   con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log(result);
//   });
// });