const con = require('../DB/mysql');
// complete
// exports.submit = async (req, res) => {
//     const { title, content } = req.body;
//     // const query =  `INSERT INTO proposal ( c_ip, c_title, t_proposal ) VALUES ( 'c_ip', 'c_title', 't_proposal' )`;
//     try {
//         const q = `SELECT * FROM members WHERE c_ip='${req.ip}'`;
//         con.query(q, function (err, result) {
//             if (err) throw err;
//             console.log(result.length)
//             if (result.length > 0) {
//                 if (result[0].b_access_status == '1') {
//                     const query = `INSERT INTO proposal (c_ip, c_title, t_proposal) VALUES ('${req.ip}' , '${title}' , '${content}' )`;
//                     con.query(query, function (err, result) {
//                         if (err) throw err
//                         res.send('success');
//                         return;
//                     });
//                 } else {
//                     res.send('accessDenied')
//                 }
//             } else {
//                 res.send('noreg');
//             }
//         });

//         // console.log(res);
//     } catch (error) {
//         console.log(error)
//     }
// };
// no complete
exports.getMembers = async (req, res) => {
    var query = "SELECT * FROM members";
    try {
        con.query(query, function (err, result) {
            if (err) throw err;
            res.send(result);
        });
        // const r= JSON.parse(result)
    } catch (error) {
        console.log(error)
    }
};
exports.access = async (req, res) => {
    const { pk, id } = req.body;
    console.log(pk, id);
    try {
        var bool = '0';
        if (id == 'off_command') {
            bool = '1';
        }
        const query = `UPDATE members SET b_access_status=${bool} WHERE pk=${pk}`;
        con.query(query, function (err, result) {
            if (err) throw err;
            res.send('success');
        });
    } catch (error) {
        console.log(error)
    }
};
exports.getLazyboys = async (req, res) => {
    var query = "SELECT * FROM members WHERE b_lazyboy='1'";
    try {
        con.query(query, function (err, result) {
            if (err) throw err;
            res.send(result);
        });
        // const r= JSON.parse(result)
    } catch (error) {
        console.log(error)
    }
};
exports.busi_share = async (req, res) => {
    console.log(req.body)
    const { businessContent } = req.body;
    console.log(businessContent)
    try {
        var query = `SELECT * FROM business_share`;
        con.query(query, function (err, result1) {
            if (err) throw err;
            if (result1.length > 0) {
                var query = `UPDATE business_share SET t_content = '${businessContent}', d_date = CURRENT_TIMESTAMP()`;
                con.query(query, function (err, result2) {
                    if (err) throw err;
                    res.send('success');
                });
            } else {
                var query = `INSERT INTO business_share (t_content) VALUES ('${businessContent}')`;
                con.query(query, function (err, result2) {
                    if (err) throw err;
                    res.send('success');
                });
            }
        });
        // const r= JSON.parse(result)
    } catch (error) {
        console.log(error)
    }
};
exports.proposal_delete = async (req, res) => {
    try {
        var query = `DELETE FROM proposal`;
        con.query(query, function (err, result1) {
            if (err) throw err;
            var query = `DELETE FROM opinion`;
            con.query(query, function (err, result1) {
                if (err) throw err;
                res.send('PDsuccess')
            });
        });
    } catch (error) {
        console.log(error)
    }
};
exports.getBusiness = async (req, res) => {
    try {
        var query = `SELECT * FROM business_share`;
        con.query(query, function (err, result) {
            if (err) throw err;
            res.send(result)
        });
    } catch (error) {
        console.log(error)
    }
};

