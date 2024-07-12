const User = require('../models/user');

//post end point admin
const createadmin = async (req, res) =>{
    try {
        const {admin_email, admin_name , admin_tel , password} = req.body;
        
        //create admin
        const  user = await User.create({
            admin_email, 
            admin_name , 
            admin_tel, 
            password

        })
        return res.status(200).json( { message: 'Admin created successfully',user})
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Server error' });
    }
}
module.exports = {
    createadmin
}