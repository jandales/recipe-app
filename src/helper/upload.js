const fs = require('fs')
const path = require('path')

module.exports = {
    upload: (image, destination = null) => {
        if (!image || !image.mimetype || typeof image.mv !== 'function') {
            return null;
        }

        let uploadDir = '/img/';

        if (destination == 'avatar') {
            uploadDir += 'avatar/';
        }

        if (destination == 'recipe') {
            uploadDir += 'recipes/';
        }

        const timestamp = Date.now();
        const type = image.mimetype.split('/')[1] || 'jpg';
        const newImageName = timestamp + '.' + type;
        const publicPath = uploadDir + newImageName;
        const uploadPath = path.join(__dirname, '..', '..', 'public', publicPath.replace(/^\//, ''));

        image.mv(uploadPath, function (err) {
            if (err) {
                console.error('Image upload failed:', err);
            }
        });

        return publicPath;
    },
    unlink: async (oldpath) => {
        if (!oldpath) return;

        const fullPath = path.join(__dirname, '..', '..', 'public', String(oldpath).replace(/^\//, ''));

        try {
            if (fs.existsSync(fullPath)) {
                fs.unlinkSync(fullPath);
            }
        } catch (err) {
            console.error(err);
        }
    }
}
