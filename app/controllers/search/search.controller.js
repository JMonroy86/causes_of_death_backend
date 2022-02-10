const db = require("../../models");
const tags = db.tags;
const Op = db.Sequelize.Op;



exports.search_tags = (req, res) => {
  const name = req.query.name;
  var condition = name ? { name: { [Op.like]: `%${name}%` } } : null;
  tags.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving the Death Causes Data."
      });
    });
};
