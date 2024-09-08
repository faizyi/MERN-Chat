import { check, query } from "express-validator";

export const signupRouteValidator = [
    check("fullName").notEmpty().withMessage("Full name is required")
    .bail()
    .isLength({min: 2}).withMessage("Full name must be at least 2 characters long")
    .isLength({ max: 50 }).withMessage('Full name must be less than 50 characters long')
    .matches(/^[a-zA-Z\s'-]+$/)
    .withMessage("Full name can only contain letters, spaces, hyphens, and apostrophes"),
    
    check("email").trim().notEmpty().withMessage("Email is required")
    .bail()
    .isEmail().withMessage("Invalid Email"),

    check("password").trim().notEmpty().withMessage("Password is required")
    .bail()
    .isLength({min: 6}).withMessage("Password must be 6 char")
]