/* eslint-disable no-undef */
const { body, validationResult } = require('express-validator');


const validateMovie = [
    body('title').isLength({ max: 255 }),
    body('director').isLength({ max: 10 }),
    body('year').isInt({ maxcharacters: 4}),
    body('color').isString(),
    body('duration').isInt({ maxcharacters: 3 }),
    (req, res, next) => {
        const error = validationResult(req);
        if (!error.isEmpty()) {
            res.status(422).json({ validationErrors: error.array() });
        } else {
            next();
        }
    },
];



const validateUser = [
    body("firstname").isLength({ max: 8 }),
    body("lastname").isLength({ max: 8 }),
    body("email").isEmail({ blacklisted_chars: "!#$%&'()*+,-./:;<=>?@" }),
    (req, res, next) => {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            res.status(422).json({ validationErrors: errors.array() });
        } else {
            next();
        }
    },
];


module.exports = {
    validateMovie,
    validateUser,

}