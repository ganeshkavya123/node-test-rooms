
module.exports = app =>{

    const auth = require('../controller/auth.controller');

    app.post("/login",auth.login);

    app.post("/register",auth.register);

}