import express from 'express'
import cors from 'cors'
import validator from 'validator'
import 'dotenv/config'
import connectDB from './config/mongodb.js'
import connectCloudinary from './config/cloudinary.js'
import userRouter from './routes/userRoute.js'
import foodRouter from './routes/foodRoute.js'


//App config
const app = express()
const port = process.env.PORT || 4000
connectDB()
connectCloudinary();


// middlewares
app.use(express.json())
app.use(cors())


// api endpoints
app.get(`/`,(req,res)=>{
    res.send("API working")
})

app.use('/api/user',userRouter)
app.use('/api/food',foodRouter)



app.listen(port,()=> console.log('server started on port : ' +port))