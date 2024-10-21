const jwt = require('jsonwebtoken')

async function authenticateToken (req, res){

    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    
    jwt.verify(token, process.env.JWT_SECRET, (error, user) => {
        if (error)
            return res.sendStatus(403)
        
        req.user = user
        
        res.sendStatus(200)
        // next()
    })
    console.log("*********************************************************************************", authHeader, token)
}


module.exports = authenticateToken