const userData = require("./users");

exports.seed = function (knex) {
  return knex("users")
    .del()
    .then(() => {
      return knex("users").insert(userData);
    });
};
