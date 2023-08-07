const db = require("../config/db");
// const mysql = require('mysql2');
class notetypeentitys {
  constructor(typeName,isDisabled) {
    this.typeName = typeName;
    this.isDisabled = isDisabled;
  }

  save() {
    let d = new Date();
    let y = d.getFullYear();
    let m = d.getMonth() + 1;
    let dd = d.getDate();
    let sql = `INSERT INTO notetypeentity(
      typeName,
      isDisabled,
            created_at)
            values('${this.typeName}','${this.isDisabled}','${dd} - ${m} - ${y}');`;

    return db.execute(sql);
  }

  static findAll() {
    let sql = "SELECT * FROM notetypeentity;";
    return db.execute(sql);
  }
  static findNotetypeentityById(id) {
    let sql = `SELECT * FROM notetypeentity WHERE id = ${id};`;
    return db.execute(sql);
  }
  updateNotetypeentityById(id) {
    let d = new Date();
    let y = d.getFullYear();
    let m = d.getMonth() + 1;
    let dd = d.getDate();

    let createdAtDate = `${y}-${m}-${dd}`;
    console.log(id, this.typeName, this.isDisabled, createdAtDate);

    let sql = `UPDATE notetypeentity
        SET
        typeName = '${this.typeName}',
        isDisabled = '${this.isDisabled}',
        updated_at='${createdAtDate}'
        WHERE id = ${id};`;

    return db.execute(sql);
  }

  static deleteNotetypeentityById(id) {
    let sql = `DELETE FROM notetypeentity WHERE id = ${id};`;
    return db.execute(sql);
  }
}
module.exports = notetypeentitys;
