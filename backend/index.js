const express = require('express')
const authRoutes = require('./routes/auth')  
const { sequelize } = require('./config/db')


const app = express()
app.use(express.json())
sequelize.sync({force: true})

app.use('/api/auth', authRoutes);

app.listen(8080, () => {
  console.log('Server is running on port 8080') 
})

// const abc = "nvjdnjvnsdjvnjdsnv"
// module.exports = { User, abc }; 