let express = require('express')
let app = express()
let path = require('path')
const PORT = 3000

//Midware
app.use(express.static('public'));

//Routes
app.get('/',(req, res)=>{
    res.sendFile(path.join(__dirname,"views/home.html"))
})

app.get('/register',(req, res)=>{
    res.sendFile(path.join(__dirname,"views/register.html"))
})

app.get('/login',(req, res)=>{
    res.sendFile(path.join(__dirname,"views/login.html"))
})



//Server
app.listen(PORT, () => console.log(`
Servidor escuchando en el puerto ${PORT}
http://localhost:${PORT}
`))
