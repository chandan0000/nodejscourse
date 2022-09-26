const express = require('express');
const bookRouter = require('./book');
const router = express.Router();
const authRouter = require('./auth');
router.get('/', (req, res) => {
    res.send("Hello World");
})
router.use('/auth/' ,authRouter)
router.use(bookRouter)
router.all('/*', function (req, res) {
    console.log(__dirname);
    res.json({ error: 'page not found' });

})

module.exports = router;