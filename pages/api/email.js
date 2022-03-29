const nodemailer = require("nodemailer")

export default async function handler(req, res) {
    try {
        const user = process.env.GMAIL_USER
        const password = process.env.GMAIL_PASSWORD

        const sender = req.body.email
        const senderName = req.body.name
        const messageContent = req.body.content

        let transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 587,
            auth: {
                user: user,
                pass: password,
            },
        })

        await transporter.sendMail({
            from: user,
            to: "yuricorredorsendemail@gmail.com",
            subject: "Mensagem do site!",
            html: `<p>Nome: ${senderName}</p>
            <p>Email: ${sender}</p><br>
            <h2>${messageContent}</h2>`
        })

        res.status(200).json({ success: true, user })
    } catch (error) {
        res.status(400).json({ error, user })
    }
}