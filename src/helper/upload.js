const fs = require('fs')
const path = require('path')



module.exports =  {
      upload : (image, destination = null) => {               

        let path = '/img/';   
    
        if (destination == 'avatar'){
            path += 'avatar/';
        }
    
        if (destination == 'recipe') {
            path += 'recipes/';
        }  

        const timestamp = Date.now(); 
        type = image.mimetype.split('/')[1];        
        let newImageName = timestamp + '.' + type;
        path += newImageName;
        let uploadPath = 'public' + path;
    
        image.mv(uploadPath, function(err) {
            if (err)
            return res.status(500).json(err);             
        });
    
        return path; 
    },
    unlink : async (oldpath) => {  

        if(oldpath == null) return;  

        oldpath = path.join(__dirname, '..', '..', '/public'+`${oldpath}`)       
        
        try {
             fs.unlinkSync(oldpath)    
            } catch(err) {
            console.error(err)
        }
    }
}