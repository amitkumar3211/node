const http = require('http');

http.createServer((req, res) => {

    // res.write("hello this is amit kumar fdgjhdf");

    // res.end();
res.writeHead(200,{'content-Type' : 'application\json'});
res.write(JSON.stringify({name:'Amit Kumar ji', email:'ashu@gamil.com'}));
res.end();
}).listen(4500);


