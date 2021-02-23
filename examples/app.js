'use strict';

const http = require('http');
const captchapng = require('..');

http.createServer(function (req, res) {
  if(req.url == '/captcha.png') {
    let rand = parseInt(Math.random() * 9000 + 1000);
    
    // width, height, dispNumber, bgColor = '#FFF', fgColor = []
    let png = new captchapng(80, 30, rand, '#FFF'); // width,height, numeric captcha

    res.writeHead(200, { 'Content-Type': 'image/png'});
    res.end(png.getBuffer());
  } else {
    res.end('');
  }
}).listen(8181);

console.log('Web server started.\n http:\\\\127.0.0.1:8181\\captcha.png');
