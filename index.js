
 const express = require ('express')
 const app = express()

 app.use(express.urlencoded({extended: true}))

 app.get('/', (req,res)=>{
     console.log (req.params)
     
     res.send('Você chamou a pagina principal')
 })

 app.get('/List1Ex1', (req, res)=>{
     const n1 = parseFloat(req.body.n1)
     const n2 = parseFloat(req.body.n2)
     const n3 = parseFloat(req.body.n3)
     const n4 = parseFloat(req.body.n4)

     const media= parseFloat(n1 + n2 + n3 + n4)/4
     res.send(`${media}`)
     
    
})

 app.get('/pagina2', (req,res)=>{
    res.send('Você chamou a pagina pagina 2')
})
 app.listen(2000, ()=>{
     console.log('servidor rodando na porta 3000')
 })
 