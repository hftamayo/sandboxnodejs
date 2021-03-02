const http = require('http');
//este nombre puede ser cualquiera
/*ejemplo de function Call
function rqListener(req, res){
}

http.createServer(rqListener);
*/

//se usara el estilo de componente funcional o callback Function
const server = http.createServer((req, res) => {
    //las siguientes propiedades ayudan a comprender el request del usuario
    //probar con localhost:3005, localhost:3005/test
    console.log(req.url, req.method, req.headers);
}
);
//ejecuta el proceso principal, por default en produccion buscara ejecutarse en el puerto 80
server.listen(3005);