const DevModel = require('../models/DevModel');

module.exports = {
    async store(req, res) {
        const { devId } = req.params;
        const { user } = req.headers;

        const loggedDev = await DevModel.findById(user);
        const targetDev = await DevModel.findById(devId);

        if(!targetDev){
            return res.status(400).json({ error: 'Developer does not exist' });
        }

        if (targetDev.likes.includes(loggedDev._id)){
            return console.log('Its a match!');
        }

        loggedDev.likes.push(targetDev._id);

        await loggedDev.save();

        return res.json(loggedDev);
    }
};