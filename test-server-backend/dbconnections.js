var mysql=require('mysql');
 var connection=mysql.createPool({
 
host:'olxl65dqfuqr6s4y.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
 user:'jdwsziiazwkzo31p',
 password:'ll18ic8d2pxl34pg ',
 database:'hkgg1pm081ywmuiq'
 
});
 module.exports=connection;