const express = require('express')
const router = express.Router()
//const mongoose = require('mongoose')

let data = ''

router.post('/save-details',(req,res)=>{
    console.log(req.body)
    data = req.body
    res.sendStatus(200)
})

router.get('/get-details',(req,res)=>{
    console.log('request')
    if(data == ''){
        res.send({
            status: false,
            data: {},
            message: "Data not found"
        })
    }
    else{
        res.send({
            status: true,
            data: data,
            message:''
        })
    }
})

module.exports = router