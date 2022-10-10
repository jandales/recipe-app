
const rand = () => {
    return Math.random().toString(36).substr(2);
  };
  
 
module.exports =  {
    createToken : () => {
        return rand() + rand();
    }
}