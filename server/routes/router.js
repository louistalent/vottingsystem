const express = require('express');
const router = express.Router();
// **********Member***************
const sub = require('../controller/member');
router.post('/submit', sub.submit);
router.post('/getProposal', sub.getProposal);
router.post('/up', sub.up);
router.post('/down', sub.down);
router.post('/delete', sub.delete);
router.post('/update', sub.update);
router.post('/memReg', sub.memReg);

// *********** Boss **************
const boss = require('../controller/boss');
router.post('/getMembers', boss.getMembers);
router.post('/on_command', boss.on_command);
router.post('/off_command', boss.off_command);
router.post('/getLazyboys', boss.getLazyboys);
router.post('/busi_share', boss.busi_share);
router.post('/proposal_delete', boss.proposal_delete);
router.post('/getBusiness', boss.getBusiness);



const test = require('../controller/ip_confirm');
router.post('/ip_test', test.ip_test);

module.exports = router;