var express=require('express')
var bodyParser=require('body-parser')
var mysql=require('mysql')
var app=express()

app.use(bodyParser.urlencoded({}))
var pool = mysql.createPool({
    host:'localhost',
    user:'root',
    password:'19970818',
    database:'ite',
    port:3306
}) 

app.post('/',(req,res) => {
    res.setHeader('Access-Control-Allow-Origin','*')
    pool.getConnection(function(err,connection){
        if(err){
            console.log(err)
            return
        }
        var sql = `select * from noban where state=${req.body.state}`
        connection.query(sql,function(err,data){
            if(err){
                console.log(err)
                return
            }
            res.send(data)
            connection.end()
        })
    })
})



app.post('/sc',(req,res) => {
    res.setHeader('Access-Control-Allow-Origin','*')
    pool.getConnection(function(err,connection){
        if(err){
            console.log(err)
            return
        }
        var sql = `delete from noban where id=${req.body.id}`
        connection.query(sql,function(err,data){
            if(err){
                console.log(err)
                return
            }
            res.send(data)
            connection.end()
        })
    })
})




app.listen(3000,function(){
    console.log('ok')
})