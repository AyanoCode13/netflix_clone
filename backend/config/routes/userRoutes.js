import express from 'express';

const userRoutes = express.Router();

userRoutes.post("/register", async (req, res) => {
    const { register } = await import("../../controllers/UserController.js")
    await register(req, res)
})
userRoutes.post("/login", async (req, res) => {
    const { login } = await import("../../controllers/UserController.js")
    await login(req, res)
})
export default userRoutes;