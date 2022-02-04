const m = require("../model/boss");
exports.getMembers = (req, res) => {
    m.getMembers(req, res);
}
exports.off_command = (req, res) => {
    m.access(req, res);
}
exports.on_command = (req, res) => {
    m.access(req, res);
}
exports.getLazyboys = (req, res) => {
    m.getLazyboys(req, res);
}
exports.busi_share = (req, res) => {
    m.busi_share(req, res);
}
exports.proposal_delete = (req, res) => {
    m.proposal_delete(req, res);
}
exports.getBusiness = (req, res) => {
    m.getBusiness(req, res);
}

