const verifyToken = require('../middleware/auth');

module.exports = app => {
  
    const roomsdata = require('../controller/rooms.controller')

    app.post('/create',verifyToken,roomsdata.create);
    app.put('/update',verifyToken,roomsdata.update);
    app.delete('/delete/:id',verifyToken,roomsdata.delete);
    app.get('/all',verifyToken,roomsdata.findAll);

  
  };