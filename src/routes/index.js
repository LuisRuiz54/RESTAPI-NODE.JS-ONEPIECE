const {Router} = require('express');
const router = Router();


router.get('/test', (req, res) => {
    const data = {
        "name" : "Luis Alberto",
        "sobrenome" : "Ruiz Gomez"
    }
    res.json(data);
});

module.exports = router;