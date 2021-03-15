/* */
const fs = require('fs');

const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;

    if(url ==='/'){
        res.write('<html>');
        res.write('<head><title>List of Clients</title></head>');
        res.write('<body><div><form action="/create-user" method="POST"><input type="text" name="txtnewuser"><button type="submit">Add Client</button></form></div>');
        res.write('<div><h3>List of Clients</h3>');
        res.write('<ul><li>Ronald Koeman</li><li>Joan Laporta</li></ul>');        
        res.write('</div></body></html>');        
        return res.end(); 
    }
    if(url ==='/create-user' && method === 'POST'){
        const body = [];
        req.on('data', (chunk) => {
            console.log("chunk: " + chunk);
            body.push(chunk);
        });
        return req.on('end', () => { //con return el programa se queda patinando
            const parsedBody = Buffer.concat(body).toString();
            console.log("parsed Body: "+parsedBody);            
            const message = parsedBody.split('=')[1]; //elimine el signo mas de parsedBody
            //fs.writeFileSync('message.txt', message); //para arc grandes no es bueno operarlos sincrono
            /* funcion que escribe del archivo de manera asincrona
            el codigo se gestiona mediante un bloque
            ahora tenemos 2 event listeners, a esto se le llama event driven arq.
            */
            fs.writeFile('message.txt', message, err => {
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();
            });
        });
    }
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My first page</title></head>');
    res.write('<body><h1>Hello from Node.Js Server!</h1></body>');
    res.write('</html>');
    res.end();
};

module.exports  = {
    handler: requestHandler
};//modulo global




