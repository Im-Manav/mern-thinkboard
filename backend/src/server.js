import express from "express";
import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";
import rateLimiter from "./middleware/rateLimiter.js";

dotenv.config()

const app = express();
const port = process.env.PORT || 5001

//middleware
app.use(express.json())
app.use(rateLimiter)

app.use("/api/notes", notesRoutes);

connectDB().then(() => {
    app.listen(port, () => {
        console.log("Server started at port 5001");
    });
})

//mongodb+srv://manavgupta:manavgupta@cluster0.hoxkdcd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0