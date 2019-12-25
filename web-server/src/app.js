const express = require('express')

const app = express()

app.get('', (req, res)=>{
    res.send('<h1>Hello Express!</h1>')
})

app.get('/help',(req , res)=>{
    res.send('<h1>Help home</h1>')
})

app.get('/about',(req , res)=>{
    res.send('<h1>About</h1>')
})

app.get('/weather',(req , res)=>{
    res.send('<h1>Today weather</h1>')
})



app.listen(80, ()=>{
    console.log('Server running!')
})