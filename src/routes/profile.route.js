import express from "express"
import { fetchCatFact } from "../utils/catFact.js"

const profileRouter =  express.Router()

profileRouter.get("/me", async (req,res) => {
    try {
        const fact = await fetchCatFact()
        const timestamp = new Date().toISOString()

        const response = {
            status:"success",
            user:{
                email:"akintolaabdulsamad2@gmail.com",
                name:"Akintola Abdulsamad",
                stack:"Node.js/Express"
            },
            timestamp:timestamp,
            fact:fact
        }

        res.status(200).json(response)
    } catch (error) {
        res.status(500).json({
            status:"error",
            message:"Internal server error"
        })
    }
})

export default profileRouter