module.exports = app => {
  const search = require("../../controllers/search/search.controller");
  var router = require("express").Router();
  // Create a new cause
  router.get("/tag", search.search_tags);
  
  app.use('/api/search', router);
  
};