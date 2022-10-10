const express = require('express');
const router = express.Router();
const controller = require('../controllers/UserController');

const { UserChangePasswordRequestRules, 
        UserUpdateRequestRules,
        PasswordRequestRules,
        validateRules } = require('../validations/index');

const { isAuthenticated } = require('../middleware/auth');


router.get('/user',
        isAuthenticated,
        controller.getUser
); 

router.get('/user/info/:id',
        isAuthenticated,
        controller.userInfo
);

router.put('/user/update', 
        isAuthenticated,
        UserUpdateRequestRules(),
        validateRules,
        controller.updateUser
);

router.put('/user/change-password',
        isAuthenticated,
        UserChangePasswordRequestRules(),
        validateRules, 
        controller.changePassword, 
);

router.delete('/user/delete/account',
        isAuthenticated,
        controller.deleteAccount,
);

router.put('/user/upload/avatar', 
        isAuthenticated,
        controller.uploadAvatar
);

router.delete('/user/remove/avatar',
        isAuthenticated,
        controller.removeAvatar
);

router.post('/user/confirm/password',
        isAuthenticated,
        PasswordRequestRules(),
        validateRules, 
        controller.confirmDelete
);

router.get('/auth', isAuthenticated, controller.auth);

module.exports = router;