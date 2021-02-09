const{
    check
}=require('express-validator')
exports.validRegister=[
    check('name','Name is required').notEmpty()
        .isLength({
            min:4,
            max:32
        }).withMessage('Name must be bewtween 4 and 32 characters'),
    check('email').notEmpty().withMessage('Email must be a valid email adress'),
    check('password','password is required').notEmpty(),
    check('password').isLength({
        min:6
    }).withMessage('Password must contain at least 6 characters')
];
exports.validLogin=[

    check('email').notEmpty().isEmail().withMessage('Email must be a valid email adress'),
    check('password','password is required').notEmpty(),
    check('password').isLength({
        min:5
    }).withMessage('Password must contain at least 6 characters')
];
exports.forgotPasswordValidator=[
    check('email').notEmpty().isEmail().withMessage('Must be a valid email adress')
];
exports.resetPasswordValidator=[
    check('email').notEmpty().isEmail().withMessage('Must be a valid email adress')
];

