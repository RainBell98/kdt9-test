const mysql = require('mysql')

const conn = mysql.createConnection({
    host:'kdt-9-test-woo.cmhyp4kdkfku.ap-southeast-2.rds.amazonaws.com',
    user: 'admin',
    password: '12341234',
    database: 'kdt9',
    // port:3306
})
conn.connect((err)=>{
    if(err){
        console.log('error')
        return
    }
    console.log('connect')
})

exports.postsignup = (data,callback)=>{
    const query = `insert into prac1 (userid,name,pw) values ("${data.userid}","${data.name}","${data.pw}")`
    conn.query(query, (err, rows) => {
        console.log('rows', rows);
        if(err){
            console.log("Error")
            return
        }callback()
    });
}

exports.postSignin = (data,callback)=>{
    const query = `SELECT * FROM prac1`
    conn.query(query,(err,rows)=>{
        console.log(id)
        if(err){
            console.log("Error")
            return
        }callback()
    })
}

exports.editInfo = (callback)=>{
    const query = `update prac1 set userid = '${req.body.change}' where userid = '${req.body.name}'`
    conn.query(query,(err,rows)=>{
        if(err){
            console.log(err)
            return
        }
        callback()
    })
}






