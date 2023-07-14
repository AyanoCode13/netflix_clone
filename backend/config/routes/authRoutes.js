import express from "express";
import googleOAuthController from "../../controllers/auth/googleOAuthController.js";
import jwtAuthController from "../../controllers/auth/jwtAuthController.js";
const authRoutes = express.Router();
//Google Auth
authRoutes.get("/auth/google/url", googleOAuthController.googleOAuthUrl);
authRoutes.get("/auth/google/callback", googleOAuthController.googleOAuthCallback);

//JWt Auth+
authRoutes.post("/auth/jwt/register", jwtAuthController.jwtAuthRegisterUrl);
authRoutes.post("/auth/jwt/login", jwtAuthController.jwtAuthLoginUrl);
authRoutes.get("/auth/jwt/callback", jwtAuthController.jwtAuthCallback);
export default authRoutes