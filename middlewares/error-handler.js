const errorHandler = (err, req, res, next) => {
  res.status(err.status || 500);
  res.json({
    status: err.status,
    message: err.message,
  });
  next(err);
};

module.exports = errorHandler;
