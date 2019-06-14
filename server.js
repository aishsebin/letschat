var express= require('express');
var app=express();
var server= require('http').createServer(app);
// var io=require('socket.io').listen(server);
var {Client} = require('pg');

const client = new Client({
    host: "localhost",
    port:5432,
    user: "postgres",
    password: "postgres",
    database: "postgres"
});

client.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});


users=[];
connections=[];

server.listen(process.env.PORT || 5000);
console.log('Server running');
app.get('/',function(req,res){
    const customers = [
        {id: 1, firstName: 'John', lastName: 'Doe'},
        {id: 2, firstName: 'Brad', lastName: 'Traversy'},
        {id: 3, firstName: 'Mary', lastName: 'Swanson'},
      ];
    
      res.json(customers);
    // res.sendFile(__dirname+'/index.html');
});

// io.sockets.on('connection',function(socket){
//     connections.push(socket);
//     console.log('Connected; %s sockets connected',connections.length);

//     socket.on('disconnect', function(data){
        
//         users.splice(users.indexOf(socket.username),1);
//         updateUsernames();
//         connections.splice(connections.indexOf(socket),1);
//         console.log('Disconnected; %s sockets connected',connections.length);

//     });

//     socket.on('send message',function(data){
//         //console.log(data);
//         io.sockets.emit('new message', {msg:data, user:socket.username});
        
//     });

//     socket.on('new user', function(data){
//         // callback(true);
//         socket.username=data;
//         console.log(socket.username);
//         client.query('select * from public.chatlog where username=$1',[socket.username], function (err, result) {
//             if (err) throw err;
//             if(result.rows.length!=0){
//                 console.log(result.rows);
//                 users.push(socket.username);
//                 updateUsernames();
//                 io.sockets.emit('user status',"valid");
                
//             }
//             else{
//                 io.sockets.emit('user status',"invalid");
//             }
            
            
//         });
//           // client.end();    
        
        

//     });
    
//     function updateUsernames(){
//         io.sockets.emit('get users', users);
//     }
// });
