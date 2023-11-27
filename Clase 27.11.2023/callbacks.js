const fs = require('fs');
console.log('Inicio de el programa');
fs.readFile('archivo.txt','utf8',(err, data) => {
   if(err) {
      console.log('Error al leer el archivo:',err);
      return;
   }
   console.log('Contenido de el archivo',data);
});
console.log('Fin del programa')