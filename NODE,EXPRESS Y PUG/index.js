import express from 'express';
import { agregarContacto, obtenerContactos, borrarContactos } from './src/mysql_conector.js';

const app = express(); // Iniciamos Express

app.listen('8000', function() {
  console.log('Server is running at port 8000');
});

// Configuración de pug
app.set('views', './vistas');
app.set('view engine', 'pug');

// Configuración de archivos estáticos
app.use(express.static('./vistas'));
app.use(express.static('./src'));
app.use(express.static('./css'));

app.get('/', function(req, res) {
  obtenerContactos(function(err, result) {
    if (err) {
      console.error(err);
      res.send('Error obteniendo contactos');
    } else {
      const contactos = result;
      res.render('index', { titulo: 'Aplicacion de contactos', dato: 'cualquier texto', contactos });
    }
  });
});

app.get('/agregar/:name/:email/:phone/:subject/:message', function(req, res) {
  let name = req.params.name;
  let email = req.params.email;
  let phone = req.params.phone;
  let subject = req.params.subject;
  let message = req.params.message;
  
  agregarContacto(name, email, phone, subject, message);
  res.redirect('/');

  console.log(name, email, phone, subject, message);
});
app.get('/borrar/:id', function(req, res){
  let id = req.params.id
  borrarContactos(id)
  res.redirect('/')

})







/*app.get('/reset-id', function(req, res) {
  reiniciarContador();
  res.redirect('/');
}); ------------------------para mas adelante*/


