var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'secret',
  database : 'db_ktstore'
});
 
connection.connect((err)=>{;
  if(err){
      console.log(err);
      return;
  }
  console.log(connect);
});


connection.connect();