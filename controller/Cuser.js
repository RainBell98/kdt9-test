const models = require('../models');
const {Op} = require('sequelize')

exports.index = (req, res) => {
    res.render('index');
};
exports.signup = (req, res) => {
    res.render('signup');
};
exports.post_signup = (req, res) => {
    //model
    // User.post_signup(req.body, () => {
    //     res.send({ result: true });
    // });
    models.User.create({
        userid:req.body.userid,
        name:req.body.name,
        pw:req.body.pw
    }).then(result=>{
        res.send({userid:req.body.userid,
            name:req.body.name,
            pw:req.body.pw,result:true})
    })
};

exports.signin = (req, res) => {
    res.render('signin');
};


exports.post_signin = (req, res) => {
    //model
    // User.post_signin(req.body, (result) => {
    //     if (result.length > 0) {
    //         res.send({ result: true, data: result[0] });
    //     } else {
    //         res.send({ result: false, data: null });
    //     }
    // });
    models.User.findOne({
        where: {userid : req.body.userid , pw: req.body.pw}
    }).then((result)=>{
        console.log('result',result)
        res.send({ result: true, data: result });
    })
    
};

exports.post_profile = (req, res) => {
    // User.post_profile(req.body, (result) => {
    //     if (result.length > 0) {
    //         res.render('profile', { data: result[0] });
    //     }
    // });
    models.User.findOne({
        where:{userid:req.body.userid}
    }).then(result=>{
        res.render('profile', { data: result });
    })
};

exports.edit_profile = (req, res) => {
    // User.edit_profile(req.body, () => {
    //     res.send({ result: true });
    // });
    models.User.update({
        userid: req.body.userid,
        name: req.body.name,
        pw:req.body.pw
    },{
        where:{id:req.body.id}
    }).then(()=>{
        res.send({ result: true });
    })
};

exports.delete_profile = (req, res) => {
    // User.delete_profile(req.body.id, () => {
    //     res.send({ result: true });
    // });
    models.User.destroy({where:{id:req.body.id}}).then(result=>{
        res.send({ result: true });
    })
};

exports.findAll = (req,res)=>{
    models.User.findAll({
        //attributes 원하는 컬럼 조회
        attributes:['name','userid'],
        //Op.gt(초과) , Op.gte(이상) , Op.lt(미만) , Op.ne(같지 않은) ,
        //OP.or(또는) , Op.in(배열 요소 중 하나), Op.notIn(배열 요소와 모두 다름)
        // where : {id: {[Op.gte]:4}}
        order:[['id','desc']],
        limit: 1,
        offset:1

    }).then((result)=>{
        console.log('findAll',result)
        res.send(result)
    })
}
