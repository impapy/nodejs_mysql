const db = require("../config/db");
// const mysql = require('mysql2');
class users {
  constructor(name, image) {
    this.name = name;
    this.image = image;
  }

  save() {
    let d = new Date();
    let y = d.getFullYear();
    let m = d.getMonth() + 1;
    let dd = d.getDate();
    let sql = `INSERT INTO users(
            name,
            image,
            created_at)
            values('${this.name}','${this.image}','${dd} - ${m} - ${y}');`;

    return db.execute(sql);
  }

  static findAll() {
    let sql = "SELECT name , image FROM users;";
    return db.execute(sql);
  }
  static findUserById(id) {
    let sql = `SELECT * FROM users WHERE id = ${id};`;
    return db.execute(sql);
  }
  updateUserById(id) {
    let d = new Date();
    let y = d.getFullYear();
    let m = d.getMonth() + 1;
    let dd = d.getDate();

    let createdAtDate = `${y}-${m}-${dd}`;
    console.log(id, this.name, this.image, createdAtDate);

    let sql = `UPDATE users
        SET
        name = '${this.name}',
        image = '${this.image}',
        updated_at='${createdAtDate}'
        WHERE id = ${id};`;

    return db.execute(sql);
  }

  static deleteUserById(id) {
    let sql = `DELETE FROM users WHERE id = ${id};`;
    return db.execute(sql);
  }
}
module.exports = users;
