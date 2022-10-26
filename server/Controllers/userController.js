const express = require('express')
const Contact = require('../models/userModel')



const ContactDetails = async (req, res) => {
    const { name, email, phoneNumber, address, city, pinCode } = req.body
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

const updateData = async (req, res) => {
    const id = req.params.id
    const { name, email, phoneNumber, address, city, pinCode } = req.body
    try {
        const DtExist = await Contact.findOne({ _id: id })
        if (DtExist) {
             Contact.findByIdAndUpdate({_id:id}, {
                $set: {
                    name: name,
                    email: email,
                    phoneNumber: phoneNumber,
                    address: address,
                    city: city,
                    pinCode: pinCode
                }
            }, { new: true }).then(async(response)=>{
                res.status(200).json(response)
            }).catch((err)=>res.status(500).json(err.message))

        } else {
            console.log({ message: "nothing is here" });
        }

    } catch (error) {
        res.status(500).json({ message: "something went wrong" })
    }
}

module.exports = { ContactDetails, updateData }




