const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { User } = require('../config/db')


async function registerUser(req, res) {
    const { email, password} = req.body;

    const hashedPassword = await bcrypt.hash(password, 10)

    try{
        const user = await User.create({email, password: hashedPassword})
        res.status(201).json({message: "user registered", user})
    }catch(e) {
        res.status(400).json({error: 'user Alredy exists'});
    }
}


async function loginUser(req, res) {
    const { email, password} = req.body

    try {
        const user = await  User.findOne({where: {email}});
        if (!user)
            return res.status(404).json({error: 'user not found'})

        const validPassword = await bcrypt.compare(password, user.password)
        if (!validPassword)
            return res.status(400).json({error: "invalid password"})

        const token = jwt.sign({id: user.id}, process.env.JWT_SECRET)
        res.status(200).json({ token })
    } catch (error) {
        res.status(500).json({error: 'server error'})
    }
}

module.exports = {registerUser, loginUser}