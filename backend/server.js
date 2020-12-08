import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import users from './routes/userRoutes.js'
import bodyParser from 'body-parser'


const app = express()
dotenv.config()
connectDB()

app.use(bodyParser.json())

app.use('/api/users', users)



const PORT = process.env.PORT || 5000

app.listen(PORT, ()=>{
    console.log(`Server is up and running on Port ${PORT}`);
})