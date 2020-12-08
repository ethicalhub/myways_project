import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

const connectDB = async()=>{

    try{

        const conn = await mongoose.connect(process.env.MongoDB_URI, {
            useNewUrlParser:true,
            useUnifiedTopology:true
        })

        console.log('Database Connected')

    } catch(error){

        console.log(`Error: ${error.message}`)
        process.exit(1)

    }

}

export default connectDB