module.exports = app => {
  const causes = require("../../controllers/causes/causes.controller");
  var router = require("express").Router();
  // Create a new cause
  router.post("/create", causes.create);
  router.get("/findByTag", causes.findByTag);
  router.get("/getAllCauses", causes.findAll);
  
  app.use('/api/causes', router);
  
};