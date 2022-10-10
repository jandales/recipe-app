const { sendEmail } = require('../../helper/email');



const body = (name) => {
    return  `<h1>Hello! ${name}</h1>
    <br>
    <h2>Thank you for using our app.</h2>`

}

module.exports = {
    sendEmailRegistration : async (email, name) => {        
        await sendEmail(email, "Registration", body(name))
    }
}