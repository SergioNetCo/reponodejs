const http = require ('http');
/* Recoge de un formulario web un fichero o lo que se necesite. */
var formidable = require('formidable');
/* File system, guarda el fichero que se envie en el disco. */
var fs = require('fs');
/* Move, sirve para mover un fichero a la posición que tu quieras. */
var mv = require('mv');
const { type } = require('os');

/* Creamos el servidor con requiere y response */
http.createServer(function(req, res) {
    // Si la petición viene de una página que viene de /fileupload recogemos el fichero y lo movemos.
    if (req.url == '/fileupload') {
        var form = new formidable.IncomingForm();
        form.parse(req, function (err, fields, files) {
            var oldpath = files.filetoupload[0].filepath;
            var newpath = 'C:\Users\User\NodeJS\Git Repository\Clase 01.12.2023\FileLoaded' + files.filetoupload.originalFilename;
            mv(oldpath, newpath, function(err) {
                if(err) throw err;
                else {
                    res.write('File uploaded and moved!');
                    res.end();
                }
            }); 
        });
    } else {
        res.writeHead(200, {'content-type': 'text/html'});
        res.write("<h1> prueba iaw </h1>");
        res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
        res.write('<input type="file" name="filetoupload"><br>');
        res.write('<input type="submit">');
        res.write('</form>');
        return res.end();
    }
}).listen(8080, () => {console.log('Servidor escuchando en el puerto 8080'); });