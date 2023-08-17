const express = require('express')
const app = express()
const port = 8000
const db = require('./models/index')


app.set('view engine','ejs')
app.set('views','./views')
app.use(express.urlencoded({extended:true}))
app.use(express.json())

//router
// const indexRouter = require('./routes')//"./routes <-라고 써도 됨"
// app.use('/',indexRouter)
//ex)
//const userRouter = require('./rotes/user)
//app.use('/user',userRouter)
const visitorRouter = require('./routes/visitor')

app.get('/',(req,res)=>{
    res.render('index')
})
//localhost:8000/visitor
app.use('/visitor',visitorRouter)


//마지막 선언
app.use('*',(req,res)=>{
    res.render('404')
})


db.sequelize.sync({force:false}).then(()=>{
    app.listen(port,()=>{
        console.log(`http://localhost:${port}`)
    })
})