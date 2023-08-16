// const mysql = require('mysql');
import mysql from 'mysql2/promise'

//mysql 연결
const conn = mysql.createPool({
    host: 'localhost',
    user: 'news',
    password: '1234',
    database: 'kdt9',

});
//createConnection: 단일연결, 매번 연결이 필요할 때마다 새로운 연결 생성
//연결 수가 많아지면 성능에 영향이 생김.
//createPool: 여러연결, 여러개의 연결을 미리 생성하고 관리
//요청이 들어올 때마다 생성한 연결을 할당, 동시처리 가능

export const post_signup = async(data)=>{
    try {
        const query = 'insert into user (userid,pw,name) values (?,?,?)'
        await conn.query(query,[data.userid, data.pw, data.name])
    } catch (error) {
        console.log(error)
    }
}
// exports.post_signup = (data, callback) => {
//     const query = `INSERT INTO prac1 (userid, pw, name) VALUES ('${data.userid}', '${data.pw}', '${data.name}')`;
//     conn.query(query, (err, rows) => {
//         console.log('post_signup', rows);
//         callback();
//     });
// };

export const post_signin = async (data)=>{
    try {
        const query = 'select * from prac1 where userid=? and pw=?'
        const [rows] = await conn.query(query,[data.userid, data.pw])
        return rows
    } catch (error) {
        console.log(error)
    }
}

export const post_profile = async (data)=>{
    try {
        const query = 'select * from prac1 where userid=?'
        const [rows] = await conn.query(query,[data.userid])
    } catch (error) {
        console.log(error)
    }
}

export const edit_profile = async (data)=>{
    try {
        const query = 'update prac1 set userid=?,pw=?,name=? where id=?'
        const [rows] = await conn.query(query,[data.userid,data.pw,data.name,data.id])
        return rows
    } catch (error) {
        console.log(error)
    }
}

export const delete_profile = async (id)=>{
    try {
        const query = 'delete from prac1 where id=?'
        await conn.query(query,[id])
    } catch (error) {
        console.log(error)
    }
}

// exports.post_signin = (data, callback) => {
//     const query = `SELECT * FROM user WHERE userid='${data.userid}' AND pw='${data.pw}'`;
//     conn.query(query, (err, rows) => {
//         console.log('post_signin', rows);
//         callback(rows);
//     });
// };

// exports.post_profile = (data, callback) => {
//     const query = `SELECT * FROM user WHERE userid='${data.userid}' `;
//     conn.query(query, (err, rows) => {
//         console.log('post_profile', rows);
//         callback(rows);
//     });
// };

// exports.edit_profile = (data, callback) => {
//     const query = `UPDATE user SET userid='${data.userid}', pw='${data.pw}', name='${data.name}' WHERE id=${data.id}  `;
//     conn.query(query, (err, rows) => {
//         callback();
//     });
// };

// exports.delete_profile = (id, callback) => {
//     const query = `DELETE FROM user WHERE id=${id}`;
//     conn.query(query, (err, rows) => {
//         callback();
//     });
// };
