const express = require('express')
const authRoutes = require('./routes/auth')  
const homePages = require('./routes/homePages')
const { sequelize } = require('./config/db')
const cors = require('cors')

const app = express()
app.use(express.json())
app.use(cors())

sequelize.sync({force: true})

app.use('/api/auth', authRoutes);
app.use('/api', homePages);

app.listen(8080, () => {
  console.log('Server is running on port 8080') 
})

// const abc = "nvjdnjvnsdjvnjdsnv"
// module.exports = { User, abc }; 