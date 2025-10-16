import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import profileRouter from "./src/routes/profile.route.js"

dotenv.config()

const app = express()

const PORT = process.env.PORT || 300

app.use(cors())

app.use(express.json())

app.use(profileRouter)



app.listen(PORT, () => console.log(`server running on port ${PORT}`))