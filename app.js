var express= require('express');
var app=express();
var server= require('http').createServer(app);
var io=require('socket.io').listen(server);
var {Client} = require('pg');

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
        });
      });
}

connect();

users=[];
connections=[];

server.listen(process.env.PORT || 3000);
console.log('Server running');
app.get('/',function(req,res){
    res.sendFile(__dirname+'/index.html');
});

io.sockets.on('connection',function(socket){
    connections.push(socket);
    console.log('Connected; %s sockets connected',connections.length);

    socket.on('disconnect', function(data){
        
        users.splice(users.indexOf(socket.username),1);
        updateUsernames();
        connections.splice(connections.indexOf(socket),1);
        console.log('Disconnected; %s sockets connected',connections.length);

    });

    socket.on('send message',function(data){
        //console.log(data);
        io.sockets.emit('new message', {msg:data, user:socket.username});
        
    });

    socket.on('new user', function(data,callback){
        callback(true);
        socket.username=data;

        users.push(socket.username);
        updateUsernames();

    });
    
    function updateUsernames(){
        io.sockets.emit('get users', users);
    }
});
