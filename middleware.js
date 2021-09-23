// middleware  during working
var requestTime = function (req, res, next) {
  req.requestTime = new Date();
  if (
    req.requestTime.getHours() >= 9 &&
    req.requestTime.getHours() <= 17 &&
    req.requestTime.getDay() !== 5 &&
    req.requestTime.getDay() !== 6
  ) {
    next();
  } else {
    res.status(401).send("this is available Monday to Friday,  from 9 to 17");
  }
};
module.exports = requestTime;
