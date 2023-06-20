import mysql from 'mysql';
let todos
const conector = mysql.createPool({
  host: 'localhost',
  user: 'icesena',
  password: 'Yogano92!',
  database: 'agenda_contactos',
});


const agregarContacto = (name, email, phone, subject, message) => {
  conector.getConnection((err, connection) => {
    if (err) throw err;

    const sql = `INSERT INTO contact1 (id_contact, name, email, phone, subject, message) VALUES (null, '${name}', '${email}', '${phone}', '${subject}', '${message}')`;

    connection.query(sql, function(err, result, fields) {
      connection.release();

      if (err) throw err;
      console.log(result);
    });
  });
};

const obtenerContactos = (callback) => {
  const sql = 'SELECT * FROM contact1';
  conector.query(sql, function(err, result, fields) {
    if (err) {
      callback(err, null);
    } else {
      callback(null, result);
    }
  });
};

const borrarContactos = id => {
  const sql =`DELETE FROM contact1 where id_contact=${id}`
  conector.query(sql)
}

/*const reiniciarContador = () => {
  const sql = 'ALTER TABLE contact1 AUTO_INCREMENT = 1';
  conector.query(sql, function(err, result, fields) {
    if (err) throw err;
    console.log('Contador de ID reiniciado');
  });
};
-----para mas adelante */

export { agregarContacto, obtenerContactos, borrarContactos };




















/*import mysql from 'mysql';

const conector = mysql.createConnection({
  host: 'localhost',
  user: 'icesena',
  password: 'Yogano92!',
  database: 'agenda_contactos',
});

const conectar = () => {
  conector.connect((err) => {
    if (err) throw err;
    console.log('conectado');
  });
};

const agregarContacto = (name, email, phone, subject, message) => {
  const sql = `INSERT INTO contact1 (id_contact, name, email, phone, subject, message) VALUES (null, '${name}', '${email}', '${phone}', '${subject}', '${message}')`;
  conector.query(sql, function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
};

export { conectar, agregarContacto, conector };*/
