const jwt=require('jsonwebtoken')

const User=require('../models/auth.model')
const expressJwt = require('express-jwt')
const _=require('lodash');
const {OAuth2Client} = require('google-auth-library')
const fetch = require('node-fetch');
const{validationResult}=require('express-validator');
const {errorHandler} = require('../helpers/dbErrorHandling');
const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.MAIL_KEY);
exports.registerController=(req,res)=>
    {
    const {name,email,password}=req.body;
    console.log(name+" "+email+" "+password);
    const errors=validationResult(req);
    if(!errors.isEmpty()) {

        const firstError = errors.array().map(error => error.message)[0];
        return res.status(422).json({
            error: firstError
        })
    }
    else{
        User.findOne({
            email
        }).exec((err,user)=>{
            if(user){
                return res.status(400).json({
                    error:"Email is taken"}
                )
            }
        });

        const token=jwt.sign({
            name,
            email,
            password
        },
          process.env.JWT_ACCOUNT_ACTIVATION,{expiresIn:'15m'}  );
        const emailData={
            from:process.env.EMAIL_FROM,
            to:{email},
            subject:'Account activation link',
            html: `
            <a href="${process.env.CLIENT_URL}/users/activate/${token}"><h1>Please click to link to activate</h1></a>
            
            `
        };
        sgMail.send(emailData).then(sent=>{
            return res.json({
                message: `Email has been sent to ${email}`
            }).catch(err=>{
                return res.status(400).json({
                    error:errorHandler(err)
                });
            })
        })
    }
}
exports.activationController=(req,res) => {


    const {token} = req.body;
    console.log(token+"BRRRRRRRRRRRRRR");
    if(token) {

        jwt.verify(token, process.env.JWT_ACCOUNT_ACTIVATION,
            (err, decoded) => {
                if (err) {

                    return res.status(401).json({

                        error: 'Expired token.'
                    })
                } else {

                    const {name, email, password} = jwt.decode(token);

                    console.log(email);
                    const user = new User({
                        name,
                        email,
                        password
                    });

                    user.save((err, user) => {
                        if (err) {

                            return res.status(401).json({
                                error: errorHandler(err)
                            })
                        } else {
                            console.log("RRRRRRRRRRRRRRRRRR");
                            return res.json({success: true, message: 'Signup success', user})
                        }
                    })
                }
            })

    }

};
exports.loginController=(req, res) => {
    const {email, password} = req.body;
    const errors=validationResult(req);

    if(!errors.isEmpty()) {
        console.log("AJUNGGGGGGDD")
        const firstError = errors.array().map(error => error.message)[0];
        return res.status(422).json({
            error: firstError
        })
    }else
    {
        User.findOne({
            email
        }).exec((err,user)=>{
            if(err||!user){
                return res.status(400).json({
                    error:'User with that email doesnt exist'
                })
            }

            if(!user.authenticate(password)){
                return res.status(400).json({
                    error:'Email and password do not match'
                })
            }
            const {_id,name,email,role}=user;
            const token=jwt.sign({
                _id:user._id
            },process.env.JWT_SECRET,
                {
                    expiresIn:'7d'
                }
                );



            return res.json({
                token,
                user:{
                    _id,
                    name,
                    email,
                    role
                }
            })

        })
    }
};
exports.forgetController = (req, res) => {
    console.log("DRRRRRRRRRSSSSSS");
    const {name} = req.body;
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        console.log("AJUNGGGGGGDD")
        const firstError = errors.array().map(error => error.message)[0];
        return res.status(422).json({
            error: firstError
        })
    } else {

        User.findOne({name}).exec((err, user) => {
                if (err || !user) {
                    return res.status(400).json({
                        error: 'User with that email doesnt exist'
                    })

                }
                console.log(user.email);
                const token = jwt.sign({
                    _id: user._id,
                }, process.env.JWT_RESET_PASSWORD, {
                    expiresIn: '10m'
                })
                const emailData = {
                    from: process.env.EMAIL_FROM,
                    to: process.env.EMAIL_FROM,
                    subject: 'Password reset link',
                    html: `
                <h1>Please click to link to reset your password</h1>
                <p>${process.env.CLIENT_URL}/users/password/reset/${token}</p>
                `
                };

                return user.updateOne({
                    resetPasswordLink: token
                }, (err, success) => {
                    if (err) {
                        return res.status(400).json({
                            error: errorHandler(err)
                        })

                    } else {
                        sgMail.send(emailData).then(sent => {
                            return res.json({
                                message: `Email has been sent to ${user.email}`
                            }).catch(err => {
                                return res.status(400).json({
                                    error: errorHandler(err)
                                });
                            })
                        })
                    }
                })
            }
        );
    }
};

exports.getDataController=(req,res) => {



    const {_id}=jwt.decode(req.cookies.token);

    console.log(_id);
    console.log(res)
    User.findOne({_id}).exec((err,user)=>{
        const {_id,name,email,role}=user;
        console.log(_id,name,email,role)
        res.json({name:name,email:email,role:role});
    })
};
exports.resetController = (req, res) => {

    const {newPassword,resetPasswordLink}=req.body;
    const errors = validationResult(req);
    // console.log(newPassword,resetPasswordLink);
    if (!errors.isEmpty()) {

        const firstError = errors.array().map(error => error.message)[0];
        return res.status(422).json({
            error: firstError
        })
    } else {
        if(resetPasswordLink)
            jwt.verify(resetPasswordLink,process.env.JWT_RESET_PASSWORD,function(err,decoded){
                if(err){
                    return res.status(400).json({
                        error:'Expired link,try again'
                    })
                }

            User.findOne({resetPasswordLink}).exec((err,user)=>{
                if (err || !user) {

                    return res.status(400).json({
                        error: 'User with that email doesnt exist'
                    })

                }
                    console.log("AJUNGGGGGGDDSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS")
                const updatedFields={
                password:newPassword,
                resetPasswordLink:""};
                user=_.extend(user,updatedFields);
                user.save((err,result)=>{
                    if(err){
                        return res.status(400).json({
                            error:'Error resetting user password'
                        })
                    }
                    res.json({
                        message:'Great! You successfully reseted your password'
                    })
                })
            }
                );




        })
    }
};
