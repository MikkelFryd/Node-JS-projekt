import db from "../Config/db.config.js";

class UserModel {
  constructor() {
    console.log("Class user model is loaded");
  }

  list = (req, res) => {
    return new Promise((resolve, reject) => {
      const orderKey = req.query.orderBy || "u.id";
      const limit = req.query.limit ? `LIMIT ${req.query.limit}` : "";
      let sql = `SELECT u.id, u.Bruger_id, u.Fornavn, u.Efternavn, u.Brugernavn, u.Password, u.Email, u.Fødselsdato, u.Køn
						FROM user u 
						ORDER BY ${orderKey} ${limit}`;
      db.query(sql, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  };

  search = (req, res) => {
    return new Promise((resolve, reject) => {
      const orderKey = req.query.orderBy || "u.id";
	  let keyword = req.query.keyword
      const limit = req.query.limit ? `LIMIT ${req.query.limit}` : "";
      let sql = `SELECT u.id, u.Bruger_id, u.Fornavn, u.Efternavn, u.Brugernavn, u.Password, u.Email, u.Fødselsdato, u.Køn
						FROM user u
						WHERE Fornavn LIKE '%${keyword}%'
						OR Efternavn LIKE '%${keyword}%'`
						;
      db.query(sql, (err, result) => {
        if (err) {
          reject(err);
        } else {
			const searchresults = {
				matches: result.length,
				result
			}
          resolve(searchresults);
        }
      });
    });
  };

  get = (req, res) => {
    return new Promise((resolve, reject) => {
      const sql = `SELECT u.id, u.Bruger_id, u.Fornavn, u.Efternavn, u.Password, u.Email, u.Fødselsdato, u.Køn 
							FROM user u  
							WHERE u.id = ?`;
      db.query(sql, [req.params.id], (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(...result);
        }
      });
    });
  };

  create = async (req, res) => {
    return new Promise((resolve, reject) => {
      const arrFormValues = Object.values(req.body);
      const sql = `INSERT INTO user(Bruger_id, Fornavn, Efternavn, Brugernavn, Password, Email, Fødselsdato, Køn) 
							VALUES(?,?,?,?,?,?,?,?)`;
      db.query(sql, arrFormValues, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve({ status: "OK", id: result.insertId});
        }
      });
    });
  };

  update = async (req, res) => {
    return new Promise((resolve, reject) => {
      const arrFormValues = Object.values(req.body);
      console.log(arrFormValues);
      const sql = `UPDATE user
							SET Brugernavn = ?, Password = ?, Email = ?
							WHERE id = ?`;
      console.log(sql);
      db.query(sql, arrFormValues, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve({ status: "OK", id: req.body.id });
        }
      });
    });
  };

  delete = async (req, res) => {
    return new Promise((resolve, reject) => {
      const arrFormValues = Object.values(req.body);
      console.log(arrFormValues);
      const sql = `DELETE FROM user WHERE Fornavn = ?`;

      db.query(sql, arrFormValues, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve({ status: "OK"});
        }
      });
    });
  };
}

export default UserModel;
