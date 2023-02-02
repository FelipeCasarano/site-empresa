const path = require('path')
const express = require('express')
const { response } = require('express')

const app = express()

app.use(require('cors')())
app.use(express.json())

const upload = require("multer")();

app.post('/send', upload.single('anexo'), (req, res, next) => {
    const firstName = req.body.firstName
    const lastName = req.body.lastName
    const email = req.body.email
    const phone = req.body.phone
    const objective = req.body.objective
    const anexo = req.file
    const message = req.body.message

    require('./src/services/mailService.js')(firstName, lastName, email, phone, objective, anexo, message)
        .then(response => res.json(response)
        )
        .catch(error => res.status(500).json(error)
        )

})

app.use('/', express.static(path.join(__dirname, './build')))
app.use('*', express.static(path.join(__dirname, './build')))



app.listen(3000, () => {
    console.log('server rodando')
})