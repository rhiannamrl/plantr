const Sequelize = require("sequelize");
const db = new Sequelize("postgres://localhost:5432/plantr");

const Gardener = db.define("gardener", {
  name: {
    type: Sequelize.TEXT
  },
  age: {
    type: Sequelize.INTEGER
  }
});

const Plot = db.define("plot", {
  size: {
    type: Sequelize.INTEGER
  },
  shaded: {
    type: Sequelize.BOOLEAN
  }
});

const Vegetable = db.define("vegetable", {
  name: {
    type: Sequelize.TEXT
  },
  color: {
    type: Sequelize.TEXT
  },
  planted_on: {
    type: Sequelize.DATE
  }
});

Plot.belongsTo(Gardener, { as: "gardenerId" });
Gardener.belongsTo(Vegetable, { as: "favorite_vegetable" });

module.exports = db;
