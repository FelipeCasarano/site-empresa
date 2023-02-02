const mailer = require("nodemailer");

module.exports = (firstName, lastName, email, phone, objective, anexo, message) => {
    const smtpTransport = mailer.createTransport({
        host: 'smtp.gmail.com',
        services: 'gmail',
        secure: false,
        auth: {
            user: 'ecmoneybr@gmail.com',
            pass: 'alvgqxyseduyyzve'
        },
        tls: {
            rejectUnauthorized: false,
        },
    })

    const mail = {
        from: `ECmoney ${objective} <ecmoneybr@gmail.com`,
        to: ["stefanyreis68@gmail.com", "felipe262@outlook.com"],
        subject: `${firstName} ${lastName} te enviou uma mensagem (${objective})`,
        html: `
        <html>
            <body>
                <strong>${firstName} ${lastName}</strong></br>
                <p>${message}<p></br></br></br>
                <p>Email: <strong>${email}</strong><p>
                <p>Telefone: <strong>${phone}</strong><p>
            </body>
        </html> `,
    }

    if (anexo) {
        console.log(anexo);
        mail.attachments = [];
        mail.attachments.push({
            filename: anexo.originalname,
            content: anexo.buffer
        })
    }

    return new Promise((resolve, reject) => {
        smtpTransport.sendMail(mail)
            .then(response => {
                smtpTransport.close();
                return resolve(response);
            })
            .catch(error => {
                smtpTransport.close();
                return reject(error);
            });
    })
}   
