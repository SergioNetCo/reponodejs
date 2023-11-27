/* Esto lo que hace es a traves de fs.reaFile es leer el archivo.txt que está n local y a traves de res.write(data) saca la información
   de el fichero archivo.txt. Quiere decir que en el if si da error no se inicia, pero si funciona se inicia el servidor y coge data.
*/
const http = require('http');
const fs = require('fs');
/* Data por defecto es una variable donde se guarda el contenido de el archivo */
fs.readFile('archivo.txt','utf8',(err, data) => {
    if(err) {
    console.log('Error al leer el archivo:',err);
    return;
    }
    const server = http.createServer((req, res) => {
        res.writeHead(200,{'Content-Type':'text/plain'})                                                          
        res.write(data)
        });                               
    console.log('Contenido de el archivo',data);
    server.listen(3000,() => {console.log('Servidor escuchando en el puerto 3000'); });
});