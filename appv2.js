const http = require('http');

//ejemplo de routing basico

const server = http.createServer((req, res) => {
    const url = req.url;
    if(url ==='/'){
        res.write('<html>');
        res.write('<head><title>Enter a message</title></head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="txtmessage"><button type="submit">Send</button></body>');
        res.write('</html>');
        return res.end(); //este return es importante ya que detiene la ejecucion del script
        //notese que el resultado es desde /message
    }
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