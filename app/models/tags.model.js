module.exports = (sequelize, Sequelize) => {
  const Tags = sequelize.define("tags", {
    name: {
      type: Sequelize.STRING
    },
    slug: {
      type: Sequelize.STRING
    },
  });
  return Tags;
};