const bcrypt = require("bcrypt");

const  SALT_WORK_FACTOR = 10;


   const cryptpassword = async ( password ) => {   
       return  await bcrypt.hash(password, SALT_WORK_FACTOR );  
            
    }

    const comparePassword = async (password, hashpassword) => {
        return await bcrypt.compare(password, hashpassword);
    }   

    module.exports = {
        cryptpassword, comparePassword,

    }