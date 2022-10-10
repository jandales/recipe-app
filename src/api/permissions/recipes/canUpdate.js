const Recipe = require('../../models/recipe');

module.exports = {

    canUpdate :  async function(req, res, next) { 

        let recipe = await Recipe.findById(req.params.id);
    
        if (req.user.id != recipe.user._id) return res.status(401).json({message : 'unauthorized'});
    
        next();
    },

    canDelete :  function (req, res , next, model) {  
        if (user._id === model._id) next();
        return res.status(401).json({message : 'unauthorized'});
    }
    
}