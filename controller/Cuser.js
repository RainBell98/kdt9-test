const login = require('../model/user')

exports.main=(req,res)=>{
    res.render('index')
}

exports.getSignin = (req,res)=>{
    res.render('signin')
}

exports.getSignup = (req,res)=>{
    res.render('signup')
}

exports.postProfile = (req,res)=>{
    res.render('profile', {data:req.body})
}

exports.postSignup = (req,res)=>{
    login.postsignup = (req.body,(rows)=>{
        res.send({ userid: req.body.userid, name: req.body.name, pw: req.body.pw });
    })   
}

exports.postSignin = (req,res)=>{
    login.postSignin(req.body,(rows)=>{
        const id = req.body.userid
        const pw = req.body.pw
        for(let i =0; i<rows.length;i++){
            console.log(rows[i].userid)
            if(rows[i].userid == id && rows[i].pw == pw){
                res.send({result:true})
                return 
            }
        }res.send({result:false})
    })
    
    
}

exports.editInfo = (req,res)=>{
    login.editInfo((rows)=>{
        res.send({result:true})
    })
}

// exports.deleteInfo = (req,res)=>{
//     const query = `delete from prac1 where userid="${req.body.userid}"`
//     conn.query(query,(err,rows)=>{
//         if(err){
//             return
//         }
//         res.send({result:true})
//     })
// }