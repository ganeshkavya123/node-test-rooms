const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {

    const token = req.body.token || req.query.token || req.headers["x-access-token"];

    if (!token) {
        return res.status(403).send("A token is required for authentication");
    }

    try {
        jwt.verify(token, process.env.TOKEN_KEY, (err, decoded) => {
            if(err)
                res.status(500).send({error: "Authentication failed"});
            // else
            //     res.send(decoded);
        });
        // console.log(process.env.TOKEN_KEY);

       
    } catch (err) {
        return res.status(401).send("Invalid Token");
    }

     next();
}

module.exports = verifyToken;