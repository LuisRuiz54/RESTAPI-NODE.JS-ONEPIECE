const { Router } =  require('express');
const router = Router();

const nakamas = require('../example.json');

router.get('/',(req, res) => {
    res.json(nakamas);
});

router.post('/', (req, res) => {
    console.log(req.body);
    res.send('received');
});

module.exports = router;