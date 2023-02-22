var mysql = require('mysql')
var connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    pass : '',
    database : 'manager'

});

var ketnoi = function(){
    connection.connect(function(error)
    {
        if(!error)
        {
            console.log(" ket noi thanh cong");
        }
        else
        {
            console.log(" ket noi that bai");
        }
    });
}

exports.getAllStudent = function(callbackQuery)
{
    ketnoi();
    connection.query('SELECT * FROM student', function(error,results,fields){
        if(!error)
        {
            callbackQuery(results);
        }
        else
        {
            console.log(" loi roi"*error)
        }
    });
};