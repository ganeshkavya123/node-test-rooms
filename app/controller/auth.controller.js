const sql = require("../config/db");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.register =  (req, res) => {

    const { name, password,email } = req.body;

    if (!req.body) {
        res.status(400).send('empty fields !')
    }

    sql.query(`SELECT * FROM users WHERE email='${email}' `,
        (err, rows) => {
            if (!err) {
                // res.send(rows);
                if (rows.length !== 0) {
                    return res.status(409).send("User already Exist.")
                }

                registraion();

            }
            else {
                console.log(err);
            }
        }
    );

    const registraion = async() => {

        const encryptedPassword =  await bcrypt.hash(password, 10);
        // console.log('encryptedPassword',encryptedPassword);

        // Create token
    const token = jwt.sign({ name },process.env.TOKEN_KEY,{ expiresIn: "2h",});
      

        const newUser = {
            name: name,
            email:email,
            password: encryptedPassword
        };

        sql.query(
            `INSERT INTO users SET ?`, newUser,
            (err, rows) => {
                if (!err) {
                    res.send(rows)
                    console.log('Successfully registered !')
                }
                else { console.log(err) };
            }
        );

    };



};

exports.login = (req, res) => {

    
    const { name, password, email } = req.body;

    if (!req.body) {
        res.status(400).send("All input is required");
      }

      sql.query(`SELECT * FROM users WHERE email='${email}' `,
      (err, rows) => {
          if (!err) {
            
              
              if (rows.length === 0) {
                  return res.send("User doesn't Exist.")
              }
            //   res.send(rows);
              userLogin(rows);

          }
          else {
              console.log(err);
          }
      }
     );

  const userLogin = async (rows) => {

    if( await bcrypt.compare(password, rows[0].password) ){
        // Create token
        const token = jwt.sign({ name },process.env.TOKEN_KEY,{ expiresIn: "2h",});
        res.send({msg:'Login successfully!', token :token})
    }else{
        res.status(400).send('Invalid credentials')

    }

  }

};