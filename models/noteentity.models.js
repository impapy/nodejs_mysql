const db = require("../config/db");
// const mysql = require('mysql2');
class noteentitys {
  constructor(noteTitle, noteMessageBody,userId,noteMediaFiles,notetypeentityId) {
    this.noteTitle = noteTitle;
    this.noteMessageBody = noteMessageBody;
    this.userId = userId;
    this.noteMediaFiles = noteMediaFiles;
    this.notetypeentityId = notetypeentityId;
  }

  save() {
    let d = new Date();
    let y = d.getFullYear();
    let m = d.getMonth() + 1;
    let dd = d.getDate();
   
    let sql = `INSERT INTO noteentity(noteTitle, noteMessageBody,userId,noteMediaFiles,notetypeentityId,created_at)
            values('${this.noteTitle}','${this.noteMessageBody}','${this.userId}','${this.noteMediaFiles}','${this.notetypeentityId}','${dd} - ${m} - ${y}');`;

    return db.execute(sql);
  }

  static findAll() {
    let sql = "SELECT * FROM noteentity;";
    return db.execute(sql);
  }
  static findNoteentityById(id) {
    let sql = `SELECT * FROM noteentity WHERE id = ${id};`;
    return db.execute(sql);
  }
  updateNoteentityById(id) {
    let d = new Date();
    let y = d.getFullYear();
    let m = d.getMonth() + 1;
    let dd = d.getDate();

    let createdAtDate = `${y}-${m}-${dd}`;

    let sql = `UPDATE noteentity
        SET
        noteTitle = '${this.noteTitle}',
        userId = '${this.userId}',
        noteMessageBody = '${this.noteMessageBody}',
        noteMediaFiles = '${this.noteMediaFiles}',
        notetypeentityId = '${this.notetypeentityId}',
        updated_at='${createdAtDate}'
        WHERE id = ${id};`;

    return db.execute(sql);
  }

  static deleteNoteentityById(id) {
    let sql = `DELETE FROM noteentity WHERE id = ${id};`;
    return db.execute(sql);
  }
}
module.exports = noteentitys;
