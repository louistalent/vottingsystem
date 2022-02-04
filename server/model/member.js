const con = require('../DB/mysql');
// proposal submit
exports.submit = async (req, res) => {
    const { title, content } = req.body;
    // const query =  `INSERT INTO proposal ( c_ip, c_title, t_proposal ) VALUES ( 'c_ip', 'c_title', 't_proposal' )`;
    try {
        const q = `SELECT * FROM members WHERE c_ip='${req.ip.replace('::ffff:', '')}'`;
        con.query(q, function (err, result) {
            if (err) throw err;
            console.log(result.length)
            if (result.length > 0) {
                if (result[0].b_access_status == '1') {
                    const query = `INSERT INTO proposal (c_ip, c_title, t_proposal) VALUES ('${req.ip.replace('::ffff:', '')}' , '${title}' , '${content}' )`;
                    con.query(query, function (err, result) {
                        if (err) throw err
                        not_lazyboy(req, function (lazyboy_status) {
                            if (lazyboy_status == 'suc')
                                res.send('success');
                        })
                        return;
                    });
                } else {
                    res.send('accessDenied')
                }
            } else {
                res.send('noreg');
            }
        });

        // console.log(res);
    } catch (error) {
        console.log(error)
    }
};
exports.getProposal = async (req, res) => {
    // no complete
    // db join 
    try {
        var query = "SELECT * FROM proposal";
        con.query(query, function (err, result1) {
            if (err) throw err;
            res.send(result1);
        });
        // const r= JSON.parse(result)
    } catch (error) {
        console.log(error)
    }
};
// proposal Control
exports.up = async (req, res) => {
    const { pk, id } = req.body;
    try {
        const query1 = `SELECT * FROM opinion WHERE c_proposal_id='${pk}'`;
        // Defined callback function
        row_exist_test(query1, pk, id, req, res, function (exi_) {
            console.log('exi______________ ', exi_);
            if (exi_ == 'no') {
                const query2 = `INSERT INTO opinion (c_proposal_id, b_up) VALUES ( '${pk}', true)`;
                con.query(query2, function (err, result1) {
                    // num++
                    num('n_up', pk, function (re) {
                        if (re == 'suc')
                            res.send('success');
                    })
                });
            }
        });
    } catch (error) {
        console.log(error)
    }
};
exports.down = async (req, res) => {
    const { pk, id } = req.body;
    try {
        const query1 = `SELECT * FROM opinion WHERE c_proposal_id='${pk}'`;
        // Defined callback function
        row_exist_test(query1, pk, id, req, res, function (exi_) {
            console.log('exi______________ ', exi_);
            if (exi_ == 'no') {
                const query2 = `INSERT INTO opinion (c_proposal_id, b_down) VALUES ( '${pk}', true)`;
                con.query(query2, function (err, result) {
                    num('n_down', pk, function (re) {
                        if (re == 'suc')
                            res.send('success');
                    })
                });
            }
        });
    } catch (error) {
        console.log(error)
    }
};
exports.delete = async (req, res) => {
    const { pk, id } = req.body;
    try {
        // IP equal test
        // res.send('nodelete')
        mine_test(req, res, pk, function (r) {
            console.log('r : ', r);
            if (r == 'noyourself') {
                res.send('nodelete');
            } else if (r == 'yourself') {
                const q1 = `DELETE FROM proposal WHERE c_ip LIKE '%${req.ip.replace('::ffff:', '')}%' AND pk='${pk}'`;
                con.query(q1, function (err, result) {
                    if (err) { console.log('X -> DELETE command fileure'); throw err };
                    res.send('deletesuccess');
                })
            }
        })
    } catch (error) {
        console.log(error)
    }
};
exports.update = async (req, res) => {
    // revert
    const { pk, id } = req.body;
    try {
        // 
        const q = `SELECT * FROM opinion WHERE c_proposal_id='${pk}'`;
        con.query(q, function (err, result1) {
            if (result1.length > 0) {
                // result[0].b_up
                if (result1[0].b_revert > 0) {
                    res.send('alreadyrevert');
                } else {
                    const q1 = `UPDATE opinion SET b_up = '${result1[0].b_down}', b_down = '${result1[0].b_up}', b_revert = 1 WHERE c_proposal_id='${pk}'`;
                    con.query(q1, function (err, result2) {
                        if (err) throw err;
                        // like and dislike swap
                        // 1. proposal select
                        const ps = `SELECT * FROM proposal WHERE pk='${pk}'`;
                        con.query(ps, function (err, result3) {
                            if (err) throw err
                            var up = '';
                            var down = '';
                            if (result1[0].b_up == 1) {
                                // up-1 down+1
                                console.log('up-1 down+1')
                                up = result3[0].n_up - 1;
                                down = result3[0].n_down + 1;
                            } else {
                                console.log('up+1 down-1')
                                up = result3[0].n_up + 1;
                                down = result3[0].n_down - 1;
                                // up+1 down-1
                            }
                            const value_revert = `UPDATE proposal SET n_up = ${up}, n_down = ${down} WHERE pk='${pk}'`;
                            con.query(value_revert, function (err, vr_result) {
                                if (err) throw err
                                res.send('revertsuccess');
                            })
                        })

                    })
                }
            } else {
                res.send('noupdown');
            }
        })
    } catch (error) {
        console.log(error)
    }
};
// registe membership
exports.memReg = async (req, res) => {
    const { name } = req.body;
    try {
        var query1 = `SELECT * FROM members WHERE c_ip='${req.ip.replace('::ffff:', '')}'`;
        con.query(query1, function (err, result1) {
            if (err) throw err;
            if (result1.length > 0) {
                res.send('exist')
            } else {
                var query12 = `SELECT * FROM members WHERE c_name='${name}'`;
                con.query(query12, function (err, result12) {
                    if (result12.length > 0) {
                        res.send('existname')
                    } else {
                        var query123 = `INSERT INTO members (c_name , c_ip) VALUES ('${name}','${req.ip.replace('::ffff:', '')}')`;
                        con.query(query123, function (err, result) {
                            if (err) throw err;
                            res.send('regsuccess');
                        });
                    }
                })
            }
        })
    } catch (error) {
        console.log(error)
    }
};

// *** Share ***
// up or down test
const row_exist_test = (query1, pk, id, req, res, callback) => {
    try {
        // IP equal test
        mine_test(req, res, pk, function (r) {
            console.log('r : ', r);
            if (r == 'noyourself') {
                con.query(query1, function (err, result) {
                    // console.log('_______', result.length)
                    if (result.length > 0) {
                        // already up or down
                        // console.log('_______', `b_${id}`, pk);
                        // console.log('---------->>>>>', result[0][`b_${id}`]);
                        if (result[0][`b_${id}`] == 1) {
                            id == 'up' ? res.send(`alreadyup`) : res.send(`alreadydown`);
                        } else {
                            id == 'up' ? res.send(`alreadydown`) : res.send(`alreadyup`);
                        }
                    } else {
                        // no Up Down
                        callback('no')
                    }
                });
            } else if (r == 'yourself') {
                res.send('yourself')
            }
        })
    } catch (error) {
        console.log(error)
    }
}
// up or down then change number value 
const num = (i, pk, callback) => {
    try {
        const query3 = `SELECT * FROM proposal WHERE pk='${pk}'`;
        con.query(query3, function (err, result2) {
            if (result2.length > 0) {
                var num = result2[0][`${i}`] + 1;
                console.log(num);
                const q4 = `UPDATE proposal SET ${i} = '${num}' WHERE pk='${pk}'`;
                con.query(q4, function (err, result3) {
                    if (err) throw err;
                    callback('suc')
                })
            }
        });
    } catch (err) {
        console.log(err)
    }
}
// test proposal of yourself
const mine_test = (req, res, pk, callback) => {
    const q = `SELECT * FROM proposal WHERE c_ip LIKE '%${req.ip.replace('::ffff:', '')}%' AND pk='${pk}'`;
    con.query(q, function (err, result) {
        if (err) throw err;
        if (result.length > 0) {
            callback('yourself');
        } else {
            console.log(' no yourself')
            callback('noyourself');
        }
    })
}

// I am not lazyboy
const not_lazyboy = (req, callback) => {
    try {
        const q = `UPDATE members SET b_lazyboy = '1' WHERE c_ip='${req.ip.replace('::ffff:', '')}'`;
        con.query(q, function (err, result) {
            if (err) throw err;
            callback('suc')
        })
    } catch (err) {
        console.log(err)
    }
}