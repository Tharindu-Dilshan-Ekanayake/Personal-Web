const User = require('../models/user');
const { comparePassword } = require('../helpers/auth')
const jwt = require('jsonwebtoken')

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
};

//loging endpoint
const loginAdmin = async (req, res) =>{
    try {
        const { admin_email, password} = req.body;
        // check if user exists
        const user = await User.findOne({admin_email});
        if(!user){
            return res.json({
                error: 'No user found'
            })
        }

        //compare password
        const match = await comparePassword(password,user.password);
        if (match) {
            //return res.json('passwordmatch);
            jwt.sign({id: user._id, admin_name: user.admin_name, admin_email: user.admin_email}, process.env.REACT_APP_JWT_SECRET,{}, (err,token) =>{
                if(err) throw err;
                res.cookie('token',token).json(user)
            })
        }else{
            return res.json({ error: 'Incorrect password' });
        }
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: 'Server error' });
    }
}

module.exports = {
    createadmin,
    loginAdmin
}