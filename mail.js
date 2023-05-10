const nodemailer = require("nodemailer");


const sendMail = async options => {

    const transporter = nodemailer.createTransport({
        // service: "custom",
        host: "smtp.gmail.com",
        port: 465,
        auth: {
            user: "test.hmmmzadev@gmail.com",
            pass: "dxudbnmbmhtnmgyg"
        }
    });

    // mail options
    const mailOptions = {
        from: "Hello There",
        to: options.email,
        subject: options.subject,
        text: options.message,
        html: options.html
    }

    // sending the email
    try {
        await transporter.sendMail(mailOptions);
        console.log("mail sent successfully");
    } catch (err) {
        console.log("mail not sent successfully");
        console.log(err);
    }
}

module.exports = { sendMail };
