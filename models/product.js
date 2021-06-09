const fs = require('fs');
const path = require('path');


module.exports = class Product {
    constructor(t) {
        this.title = t;
    }

    save() {
        //data es la carpeta donde estara el json
        const p = path.
            join(path.dirname(process.mainModule.filename),
                'data', 'products.json');
        fs.readFile(p, (err, fileContent) => {
            //in case the file doesnt not exist
            //it needs to be created
            let products = [];
            if (!err) {
                products = JSON.parse(fileContent);
            }
            products.push(this);
            fs.writeFile(p, JSON.stringify(products), (err) => {
                console.log(err);
            });
        });
    }

    /* metodo sincrono
    sin el callback genera un error
    */

    static fetchAll(cb) {
        //p se va a refactorar mas adelante
        const p = path.
            join(path.dirname(process.mainModule.filename),
                'data', 'products.json');
        fs.readFile(p, (err, fileContent) => {
            if (err) {
                cb([]);
            }
            cb(JSON.parse(fileContent));
        });
    }
};