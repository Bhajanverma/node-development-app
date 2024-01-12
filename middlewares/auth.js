const jwt = require("jsonwebtoken");

const authorizationCheck = (req, res, next) => {
  let token = req.headers.authorization;

  // verify a token symmetric
  jwt.verify(token, process.env.JWT_SECRET_KEY, function (err, decoded) {
    if (err) {
    
      res.send("Not authorized");
      return;
    }

    let userId = decoded._id;

    req.userId = userId;

    next();
  });
};

module.exports = { authorizationCheck };
