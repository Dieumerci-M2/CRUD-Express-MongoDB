const express = require('express')
const router = express.Router();

router.get('/users', (req, res)=>{
    res.send('This is all users');
})

module.exports = router;

