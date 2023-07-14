import dotenv from "dotenv"
import mongoose from "mongoose"
import app from "./config/server/app.js"


dotenv.config()

const port = process.env.PORT1 || process.env.PORT2

app.listen(port, async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
    }
    catch (err) {
        console.log(err)
    }
    console.log(`Server running on port ${port}`)
})
