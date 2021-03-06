const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')


const app = express()

// const connection_string = "mongodb+srv://sin-cc:<sihcc35>@cluster.pcg6g.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

// mongoose.connect(connection_string,{ useNewUrlParser: true ,useUnifiedTopology: true },()=>{
//     console.log('connected to DB');
// });


const requestRoute = require('./routes/request')

app.use(bodyParser.json())
app.use(cors())
app.get("/",(req,res)=>{
    res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('<h1>Hello World</h1>');
})
app.use("/request",requestRoute)

app.listen(process.env.PORT || 5000,() =>{
    console.log("Server is running")
})