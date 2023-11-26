console.log('geelo.');

console.log('hello');

console.log('imkk');

const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  //res.end('Hello World');
  res.end(`<!DOCTYPE html>
  <html lang="en">
  
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>pesudo selectors and more designing</title>
      <style>
          .container {
              border: 2px solid red;
              background-color: aliceblue;
              padding: 34px;
              margin: 34px auto;
              width: 666px;
          }
          .btn:hover{
              color: black;
              background-color: brown;
          }
  
          a {
              text-decoration: none;
          }
  
          a:hover {
              color: grey;
              /*asa ap jisa read more ka button py curdor rukho ge toh oska color chnage hoga*/
              
          }
          a:visited{
              background-color:blue;
              /* matlb jab ap osko ek bar visit krlo ge toh aska coloer chmahe ho jai ga*/
          }
  
          a:active{
             background-color:darkblue;
          }
  
          .btn {
              font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
              font-weight: bold;
              background-color: chartreuse;
              padding: 6px;
              border: none;
              cursor: pointer;
              font-size: 15px;
              border-radius: 4px;
          }
      </style>
  </head>
  
  <body>
      <div class="container" id="cont1">
          <h3>this my hidding</h3>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid harum odit enim voluptatibus, vero velit
              repellat cumque mollitia consequuntur, dignissimos beatae porro deserunt? Laboriosam aperiam atque
              architecto, laudantium est magni doloribus sapiente recusandae ex!</p>
  
          <a href="https:\\google.com" class="btn">Read more</a>
          <button class="btn">contact us</button>
      </div>
  
  </body>
  
  </html>`);
});
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});;


  

        
      
        