
# Lite PNG captcha generator

More faster and colorful version of [`captchapng`](https://www.npmjs.com/package/captchapng). (2~3 faster than orginal)

## Installation

```shell
npm install captchapng2
```

## Examples

```javascript
const http = require('http');
const captchapng = require('captchapng2');

http.createServer(function (req, res) {
  if(req.url == '/captcha.png') {
    let rand = parseInt(Math.random() * 9000 + 1000);
    let png = new captchapng(80, 30, rand); // width,height, numeric captcha

    res.writeHead(200, { 'Content-Type': 'image/png'});
    res.end(png.getBuffer());
  } else {
    res.end('');
  }
}).listen(8181);

console.log('Web server started.\nSee http:\\\\127.0.0.1:8181\\captcha.png');
```

```
egg.js
	// 生成四位纯数字的验证码
		const code = `0000${parseInt(Math.random() * 10000)}`.substr(-4);
		// 
		ctx.session.messageCode = code;
		const png = new captchapng(80, 35, code, '#cfb988');
		// png.color(0, 0, 0, 1);
		// png.color(80, 80, 80, 255);
		ctx.type = 'image/png';
		ctx.body = png.getBuffer();
```

output:

![captcha](examples/captcha.png)
