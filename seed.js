const db = require("./models.js");

db.sync({ force: true })
  .then(() => {
    console.log("database synced!");
    db.close();
  })
  .catch(err => {
    console.log("UH OH OH NOOOOOO");
    console.log(err);
    db.close();
  });
