const express=require('express');
const app=express();
const helmet=require('helmet')
const cors=require('cors');
const morgan=require('morgan');
const { dbConnection } = require('./src/db/dbConnection');
const userRouter = require('./src/routes/users');
const authRouter = require('./src/routes/auth');
const postRouter=require('./src/routes/posts')
const multer=require('multer')
require('dotenv').config();
const PORT=process.env.PORT ||4000;


// middlewares
app.use(express.json());
app.use(helmet())
app.use(morgan('dev'));
app.use(cors());
// app.use(multer().any())


app.use(cors({ origin: '*' }));
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, OPTIONS, PUT, PATCH, DELETE"
    );
    res.setHeader(
      "Access-Control-Allow-Headers",
      "X-Requested-With,content-type"
    );
    res.setHeader("Access-Control-Allow-Credentials", true);
    next();
  });


  // db connection
  dbConnection();

  
  //test
  app.get('/',function(req,res){
    return res.status(200).send({status:true,message:'working fine 🚀 🚀 🚀'})
  });

  app.use('/api/user',userRouter)
  app.use('/api/auth',authRouter)
  app.use('/api/posts',postRouter)

  app.listen(PORT,()=>{
    console.log(`application is running on ${PORT} 🟢` );
  });