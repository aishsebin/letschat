module.exports=function(app,client){
    app.get('/',function(req,res){
        // response.render("./client/public/index.html");
        client.query("select * from public.users", function (err, result) {
            if (err) throw err;
            if(result.rows.length!=0){
                console.log(result.rows);
                res.json(result.rows);
            }
        });
        
    });

    app.get('/login',function(req,res){
        // response.render("./client/public/index.html");
        // res.send("Yippie");
        
    });

    app.get('/signup',function(req,res){
        // response.render("./client/public/index.html");
        const { username,email,password,fname,lname }=req.query;
        client.query(`insert into public.users values(3,'${username}','${email}','${password}','${fname}','${lname}')`, function (err, result) {
            if (err) throw err;
            else{
                res.send("Successful");
            }
        });
    });
}