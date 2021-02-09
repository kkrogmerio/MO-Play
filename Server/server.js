const express=require('express');
const morgan=require('morgan');
const bodyParser=require('body-parser');
const cors=require('cors');
const app=express();
const connectDB=require('./config/db')
const cookieParser=require('cookie-parser');
require('dotenv').config({
    path:'./config/config.env'
});
connectDB();
process.env.JWT_ACCOUNT_ACTIVATION
app.use(cookieParser());
app.use(express.static('public'));
app.use(bodyParser.json());
if(process.env.NODE_ENV === 'development'){
    app.use(cors({
        origin:"http://localhost:3000",
        credentials:true
    }));
    app.use(morgan('dev'))
}
const authRouter=require('./routes/auth.route');

app.use('/api/',authRouter);
app.use((req,res,next)=>{
    res.header('Content-Type', 'application/json')
    res.header('Access-Control-Allow-Credentials',"true");
    res.header('Access-Control-Allow-Origin',"true")
});
app.use((req,res,next) => {
    res.status(404).json({
        success:false,
        message:"Page not found",

    })
});


const PORT=process.env.PORT;
app.listen(PORT,()=>{
    console.log(`listening on port  ${PORT}`)
});
