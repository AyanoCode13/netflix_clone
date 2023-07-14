import express from 'express';
import cors from 'cors';
import middleware from  "./middleware.js";
import showRoutes from "../routes/showRoutes.js";
import userRoutes from '../routes/userRoutes.js';
import authRoutes from '../routes/authRoutes.js';

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/v1/shows", showRoutes);
app.use("/api/v1/user", middleware,userRoutes);
app.use("/api/v1/", authRoutes);

export default app;
