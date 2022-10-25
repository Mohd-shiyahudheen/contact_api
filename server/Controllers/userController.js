const express = require('express')
const Contact =require('../models/userModel')



const ContactDetails =async(req,res)=>{
    const {name,email,phoneNumber,address,city,pinCode}=req.body
    try {
        const user = await Contact.create({
            name,
            email,
            phoneNumber,
            address,
            city,
            pinCode
        })
        console.log(user);
        res.status(200).json(user)
    } catch (error) {
        console.log(error);
    }

}

module.exports =ContactDetails




