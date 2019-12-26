const path = require('path')
const express = require('express')


const app = express()
const publicDirPath = path.join(__dirname, '../public')
app.use(express.static(publicDirPath))


app.get('/weather',(req , res)=>{
    res.send({
        location:'Boston',
        weather:{
            temperature:5,
            chance_rain:0.01,
            status:'Sunny'
        }
    })
})



app.listen(80, ()=>{
    console.log('Server running!')
})