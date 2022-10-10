const UserServices = require('../services/UserServices');

module.exports = {
    
    auth : async (req, res) => {          
        const user = await UserServices.auth(req.user.id);   
        if(!user) return res.status(401).json({ isAuthenticated : false });   
        return res.status(200).json({ user : user, isAuthenticated : true });
    },

    getUser : async (req, res) => { 
        let user = await UserServices.getUser(req.user.id);
        if(!user) return res.status(401).json({message : 'Unauthecated'});
        return res.status(200).json(user);
    },

    userInfo : async(req, res) => { 
        const user =  await UserServices.getInfo(req.params.id)
        res.status(200).json(user);
    },

    updateUser : async (req,res) => {
        let user = await UserServices.update(req.user.id, req.body); 
        return res.status(200).json(user);
    },

    changePassword : async (req, res) => {          
        let status = await UserServices.updatePassword(req.user, req.body);
        res.status(status.code).json( { message : status.message });      
    },

    uploadAvatar : async (req, res) => {  
        let { id, provider } = req.user; 
        if (provider) return res.status(401).json('UnAuthorized to change your avatar');
        const user = await UserServices.uploadAvatar(id, req.files);
        if (!user) res.status(422).json({message : 'Image File is empty'});
        res.status(200).json(user);
    },

     removeAvatar : async (req, res) => {        
        let { id, provider, image } = req.user;
        if (provider) return res.status(401).json('UnAuthorized to change your avatar');  
        const user = await UserServices.removeAvatar(id, image);
        res.status(200).json(user);
    },

    deleteAccount : async (req, res) => {  
        const status = await UserServices.deleteAccount(req.user.id, req.body.password)
        if (status)  res.status(200).json({message : 'Successfully Deleted'});
    },

    confirmDelete : async (req, res) => { 
        const status = await UserServices.confirmDelete(req.user.id, req.body.password)
        return res.status(200).json(status)
    },
  
    
}