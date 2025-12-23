const ensureAuthenticated = require('../middlewares/Auth');

const router = require('express').Router();

router.get('/', ensureAuthenticated, (req, res) => {


    // console.log('Authenticated user:', req.user);
   res.status(200).json([
        { id: 1, name: 'Product A', price: 100 },
        { id: 2, name: 'Product B', price: 150 },
        { id: 3, name: 'Product C', price: 200 },
   ]);
});

module.exports = router;