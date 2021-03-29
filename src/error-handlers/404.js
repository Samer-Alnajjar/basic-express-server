"use strict"

module.exports = (req, res) => {
  res.status(404);
  res.json({
    status: 404,
    message: 'Not Found',
    route: req.path,
  });
};