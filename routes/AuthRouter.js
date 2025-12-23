const { signup, login } = require('../controllers/AuthController');
const { signupValidation, loginValidation } = require('../middlewares/AuthValidation');

const router = require('express').Router();


// router.post('/login', (req, res) => {
//     res.send('Login route');
// });



router.post('/login', loginValidation, login);
router.post('/signup', signupValidation, signup);


module.exports = router;