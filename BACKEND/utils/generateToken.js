import JWT from 'jsonwebtoken';
import { ENV_VARS } from '../config/envVars.js';

export const generateTokenAndSetCookie = (userId, res) => {
    const token = JWT.sign({ userId }, ENV_VARS.JWT_SECRET, { expiresIn: '15d' });

    const isProduction = ENV_VARS.NODE_ENV === "production";

    res.cookie("jwt-netflix", token, {
        maxAge: 15 * 24 * 60 * 60 * 1000, // 15 days
        httpOnly: true, // secure against XSS
        secure: isProduction, // only send over HTTPS in production
        sameSite: isProduction ? "None" : "Lax", // 'None' allows cross-origin; 'Lax' is okay for localhost
    });

    return token;
};
