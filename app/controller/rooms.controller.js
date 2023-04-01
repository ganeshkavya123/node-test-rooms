const sql = require('../config/db');

exports.create = (req, res)=>{

    const {room_type,s_occupancy, m_occupancy, basic_price, extra_bed_rate,created_on, is_Active} = req.body;

    newRoom = {
        room_type: room_type,
        s_occupancy: s_occupancy,
        m_occupancy: m_occupancy,
        basic_price: basic_price,
        extra_bed_rate: extra_bed_rate,
        is_Active:is_Active
    }

    if(!req.body){
        res.json({meggase:"fields are empty !"})
    }

    sql.query('INSERT INTO rooms SET ?',newRoom, (err, rows) => {

        if(err){
            console.log(err)
        }

        console.log(rows);

    })


};

exports.findAll = (req, res) => {
    
    sql.query(
        `SELECT * FROM rooms `,
        (err, rows) => {
            if(!err) res.send(rows);
            else console.log(err);
        }
    )

};

exports.update = (req, res)=>{

    const {room_id, room_type,s_occupancy, m_occupancy, basic_price, extra_bed_rate,created_on, is_Active} = req.body;

    const id= room_id;

    const updateData = {
        room_type: room_type,
        s_occupancy: s_occupancy,
        m_occupancy: m_occupancy,
        basic_price: basic_price,
        extra_bed_rate: extra_bed_rate,
        is_Active:is_Active
    }

    sql.query("UPDATE rooms SET ? WHERE room_id = ?", [updateData,id], (err, rows) => {
        if (err) {
          console.log("error: ", err);
        }

    });
    res.json({message:"Updated Successfully!"})
    
}

exports.delete = (req, res) => {

    const id = req.params.id;

    sql.query("DELETE FROM rooms WHERE room_id = ?", id, (err, res) => {
        if (err) {
          console.log("error: ", err);
        }

    });
    res.json({message:"Deleted Successfully!"})
    

}
