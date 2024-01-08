require('./db.js')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

let BookRoutes = require('./controllers/BookController')
let HotelRoutes = require('./controllers/HotelController')
let UserRoutes = require('./controllers/UserController')

let app = express()
app.use(bodyParser.json())
app.use(cors({origin:'*'}))
let socket_data = app.listen(process.env.PORT || 5000,()=>console.log('Server Port : 5000'))

const io = require('socket.io')(socket_data, {
    cors: {
      origin: '*',
    }
  });

io.sockets.on('connection', (socket) => {
    socket.on('hotel', function(data){
        console.log(data)
        io.sockets.emit('hotel', data);
    });
})

app.use('/Book',BookRoutes)
app.use('/Hotel',HotelRoutes)
app.use('/User',UserRoutes)
app.use(express.static('public'))

module.exports = app
