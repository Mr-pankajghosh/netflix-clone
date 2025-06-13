import JWT from 'jsonwebtoken';
import { ENV_VARS } from '../config/envVars.js';

export const generateTokenAndSetCookie = (userId,res) => {
    const token = JWT.sign({ userId }, ENV_VARS.JWT_SECRET, {expiresIn: '15d'});
    
    res.cookie("jwt-netflix", token, {
        maxAge: 15 *24 * 60 * 60 * 1000,//in milliseconds 15 days
        httpOnly: true,//only accesible via browswers,,prevent XSS attacks cross site scripting attacks,make it not be accessed by js
        sameSite:"strict",//CSRF attacks cross site request forgery attacks
        secure: ENV_VARS.NODE_ENV !== "development",//cookie only sent in https in production
    });

    return token;
};