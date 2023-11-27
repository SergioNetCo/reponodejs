/* Se asigna http como libreria a la variable constante http */
const http = require('http');
/* Aquí creamos la constante server y se guardará en esa constante a través de metodos req los datos que se envían de la pag web
   Luego el servidor a través de res (response) envía a el cliente todo lo que ha pedido a traves de el request                 */
const server = http.createServer((req, res) => {
    /*Escribe a la pagina web el codigo 200(Todo OK) y le decimos que la información que el servido envia a el navegador es de tipo
      texto plano / html... para que interprete la información que le llega.                                                              */
    res.writeHead(200,{'Content-Type':'text/html'})
    /*Cuando escribes res.end envia el mensaje y corta la comunicación con el cliente. Si fuera res.write no cortaria la comunicación y
      estaria el cliente buscando petición constante a el servidor.                                                             */
    res.write('<html><head><title>Mi Primer Servidor</title></head>')
    res.end('<body><h1>Hola desde mi servidor Node.js</h1></body></html>')
 });
/* Cogemos la variable server y le asignamos a traves de listen el puerto 3000. El => es una magic function, no hace falta poner el nombre
   a la funcion y si lo anterior se ha ejecutado se realiza la función que le pongas.                                           */
server.listen(3000,() => {console.log('Servidor escuchamdo en el puerto 3000'); });
