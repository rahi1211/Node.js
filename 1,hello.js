const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;

const Home = fs.readFileSync('index.html')
const About = fs.readFileSync('About.html')
const Servers = fs.readFileSync('Servers.html')
const Contact = fs.readFileSync('Contact.html')


const server = http.createServer((req, res) => {
  console.log(req.url)
  url = req.url;
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');

    if(url == '/'){
    res.end(Home);
    }

    else if(url == '/About'){
      res.end(About);
    }
    else if(url == '/Servers'){
      res.end(Servers);
    }
    else if(url == '/Contact'){
      res.end(Contact);
    }

    else{
      res.statusCode = 404;
      res.end('<h1>404 not found</h1>');
    }

  });
  

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
