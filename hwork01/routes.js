/* */
const fs = require('fs');

const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;

    if(url ==='/users'){
        res.write('<html>');
        res.write('<head><title>List of Clients</title></head>');
        res.write('<body><div><h3>List of Clients</h3>');
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
        return req.on('end', () => { 
            const parsedBody = Buffer.concat(body).toString();
            console.log("new user added: "+parsedBody);   
            res.statusCode = 302; //sin esta propiedad no redirecciona         
            res.setHeader('Location', '/users');
            return res.end();
        });
    }
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Welcome Home</title></head>');
    res.write('<body><h1>Hello everyone</h1>');
    res.write('<h3>Greetings from the root page of the app</h3>');    
    res.write('<a href="/users">List of Clients</a></body>');    
    res.write('<div><form action="/create-user" method="POST"><input type="text" name="txtnewuser"><button type="submit">Add Client</button></form></div>');    
    res.write('</html>');
    res.end();
};

module.exports  = {
    handler: requestHandler
};//modulo global




