const {Client} = require('pg');
results=[]
const client = new Client({
  host: "localhost",
  port:5432,
  user: "postgres",
  password: "postgres",
  database: "postgres"
});

const connect = ()=>{
    client.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
        client.query('select username from public.chatlog', function (err, result) {
          if (err) throw err;
          console.log(result.rows);
          var results=false;
        });
        
      });
}


connect();
console.log(results);
// client.end();