const nodemailer = require("nodemailer");

module.exports =  {
    sendEmail : async(to, subject,  body) => {
        let transporter =  nodemailer.createTransport({
            service : process.env.MAIL_MAILER,
            host:  process.env.MAIL_HOST, 
            auth: {
              user: process.env.MAIL_USERNAME,
              pass: process.env.MAIL_PASSWORD,
            }
          });
        
          // send mail with defined transport object
          await transporter.sendMail({
            from: process.env.MAIL_FROM_ADDRES, // sender address
            to: to, // list of receivers
            subject: subject, // Subject line
            text: subject, // plain text body
            html: body, // html body
          });       
         
    }
}