const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.write('<h1> ALHAMDULILLAH server is working great </h1>');
        res.end();
    }

    if(req.url === '/students'){
        res.write(JSON.stringify([{name: 'Md. Omar', id: 1},
                                    {name: 'Md. Faruk', id: 2}]));
        res.end();
    }

});



server.listen(3000, () => {
    console.log('listening on *:3000');
});