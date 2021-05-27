const { Router } =  require('express');
const router = Router();

const nakamas = require('../example.json');

router.get('/',(req, res) => {
    res.json(nakamas);
});

module.exports = router;