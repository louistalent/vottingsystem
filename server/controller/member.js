const m = require("../model/member");
exports.submit = (req, res) => {
    m.submit(req, res);
}
exports.getProposal = (req, res) => {
    m.getProposal(req, res);
}
exports.up = (req, res) => {
    m.up(req, res);
}
exports.down = (req, res) => {
    m.down(req, res);
}
exports.delete = (req, res) => {
    m.delete(req, res);
}
exports.update = (req, res) => {
    m.update(req, res);
}
exports.memReg = (req, res) => {
    m.memReg(req, res);
}
