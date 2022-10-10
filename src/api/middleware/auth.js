module.exports =  {
    isAuthenticated  : function(req, res, next){  
      
        if(req.isAuthenticated()) return next()

        res.status(401).send('You are not authenticated') 

    },
    guest  : function(req, res, next){   

        if(!req.isAuthenticated()) return next();

        res.status(200).send('You are  authenticated') 
       
    }
}
