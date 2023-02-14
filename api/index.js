const path = require('path')
const express = require('express')
const { response } = require('express')
const cors = require("cors")

const app = express()

app.use(cors())
app.use(express.json())
const port = process.env.PORT || 3030

const upload = require("multer")();

app.post('/send', upload.single('anexo'), (req, res, next) => {
    const firstName = req.body.firstName
    const lastName = req.body.lastName
    const email = req.body.email
    const phone = req.body.phone
    const objective = req.body.objective
    const anexo = req.file
    const message = req.body.message

    require('../src/services/mailService.js')(firstName, lastName, email, phone, objective, anexo, message)
        .then(response => res.json(response)
        )
        .catch(error => res.status(500).json(error)
        )

})





app.listen(port, () => {
    console.log('server rodando')
})