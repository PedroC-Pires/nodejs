const { json } = require('express')
const express =  require('express')
const app = express()
const port = 3000
const path = require("path")
const basepath =  path.join(__dirname, 'Aula1')

app.use(
    express.urlencoded({
        extended: true, 
    })
)

app.use(express.json())

const checkAuth = function(req,res,next){
    req.authStatus = true 
    if(req.authStatus){
        console.log('Está logado!')
    } else {
        console.log('Não está logado, faça login!')
    }
}

app.use(checkAuth)

app.get(`users/add`, (req, res) => {
    res.sendFile(`${basepath}/form.html`)
})

app.post('/users/save', (req, res) => {
    console.log(req.body)
    const name = req.body.name
    const email = req.body.email
    
    console.log(name)
    console.log(email)
})

app.get('/users/add', (req, res) => {
    const id = req.params.id
    console.log(`Estamos buscando o usuário: $(id)`)
    res.sendFile(`${basepath}/form.html`)
})

app.get('/', (req, res) =>{
res.sendFile(`${basepath}/index.html`)
})

app.listen(port, () => {
    console.log(`App está rodando na porta ${port}`)
})