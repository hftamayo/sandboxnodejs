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
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My first page</title></head>');
    res.write('<body><h1>Hello from Node.Js Server!</h1></body>');
    res.write('</html>');
    res.end();
}
);
//ejecuta el proceso principal, por default en produccion buscara ejecutarse en el puerto 80
server.listen(3005);