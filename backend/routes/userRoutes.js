import express from 'express'
const router = express.Router()
import bcrypt from 'bcrypt'
import User from '../models/userModel.js'
import dotenv from 'dotenv'
dotenv.config()



router.post('/signup', (req,res)=>{

    User.findOne({email : req.body.email}).then(user=>{
        console.log(user)
        if(user){
            return res.status(400).json({email : 'Email Already Exists'})
        } else {
            const newUser = new User({
                firstName : req.body.firstName,
                lastName : req.body.lastName,
                email : req.body.email,
                password : req.body.password
            })

            bcrypt.genSalt(10, (err,salt)=>{
                bcrypt.hash(newUser.password, salt, (err, hash)=>{
                    if(err){
                        console.log(err)
                    }
                    newUser.password = hash
                    newUser
                    .save()
                    .then(user=>res.json(user))
                    .catch(err=>console.log(err))
                })
            })
        }
    })




})

router.post('/login', (req,res)=>{



    const email = req.body.email
    const password = req.body.password

    User.findOne({email}).then(user =>{
        if(!user){
            return res.status(404).json({ emailnotfound : 'Email Not Found'})
        }

        bcrypt.compare(password, user.password).then(isMatch =>{

            if(isMatch){
            
                return res.status(200).json({
                    status : 200,
                    message : 'Login Successful',
                    result : user.firstName
                
                })
            } else {
                return res.status(400).json({
                    status:400,
                    message : 'Wrong Password'})
            }
        })
    })

})



export default router