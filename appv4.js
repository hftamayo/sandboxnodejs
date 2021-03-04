const http = require('http');
const fs = require('fs');
//ejemplo de redirecting request
//bug: ya no pasa por /message ni muestra el mensaje

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;
    if(url ==='/'){
        res.write('<html>');
        res.write('<head><title>Enter a message</title></head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="txtmessage"><button type="submit">Send</button></body>');
        res.write('</html>');
        return res.end(); //este return es importante ya que detiene la ejecucion del script
        //notese que el resultado es desde /message
    }
    if(url ==='/message' && method === 'POST'){
        /*se crea una especia de buffer con el evento data 
        end se usa para finalizar el buffer
        esta es una estructura de datos eficiente
        */
        const body = [];
        req.on('data', (chunk) => {
            console.log("chunk: " + chunk);
            body.push(chunk);
        });
        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            console.log("parsed Body: "+parsedBody);            
            const message = parsedBody.split('=')[1]; //elimine el signo mas de parsedBody
            fs.writeFileSync('message.txt', message);
        });
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();

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