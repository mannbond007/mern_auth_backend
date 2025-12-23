const jwt = require('jsonwebtoken');

const ensureAuthenticated = (req, res, next) => {
  const auth = req.headers['authorization'];

  if(!auth) {
    return res
    .status(401)
    .json({
      message: "unauthorized: jwt token is missing",
      success: false,
    });
  }

  try {
    const decoded = jwt.verify(auth, process.env.JWT_SECRET);
    req.user = decoded;
    next();
    
  } catch (error) {
    return res
    .status(401)
    .json({
      message: "unauthorized: invalid jwt token",
      success: false,
    });
  }
};

module.exports = ensureAuthenticated;