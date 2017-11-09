const express = require('express'); 
const router = express.Router();

router.get('/', (req, res, next) => {
    res.send('Hello World'); 
})

router.post('/', (req, res, next) => {
    
})
    
router.put('/', (req, res, next) => {
    
})
    
router.delete('/', (req, res, next) => {
        
})

module.exports = router;
