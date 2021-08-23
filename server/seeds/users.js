const bcrypt = require("bcryptjs");

function hashPassword(password) {
  const salt = bcrypt.genSaltSync();
  return bcrypt.hashSync(password, salt);
}

module.exports = [
  {
    first_name: "nirali",
    last_name: "vadsaria",
    email: "nirali@gmail.com",
    password: hashPassword("password"),
  },
  {
    first_name: "carlos",
    last_name: "peter",
    email: "carlos@gmail.com",
    password: hashPassword("password"),
  },
  {
    first_name: "patrick",
    last_name: "date",
    email: "patrick@gmail.com",
    password: hashPassword("password"),
  },
];
