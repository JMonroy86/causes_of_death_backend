module.exports = app => {
  const causes = require("../../controllers/causes/causes.controller");
  var router = require("express").Router();
  // Create a new cause
  router.post("/create", causes.create);
  
  app.use('/api/causes', router);
  
};