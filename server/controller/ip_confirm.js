exports.ip_test = (req, res) => {
    console.log('IP test_________________________');
    console.log('result :', req.ip.replace("::ffff:", ""));
    res.send(req.ip.replace("::ffff:", ""));
    // res.send('192.168.115.160');
};