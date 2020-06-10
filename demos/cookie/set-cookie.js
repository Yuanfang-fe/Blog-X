var express = require('express');

var app = express();

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Origin', req.headers.origin);
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,UPDATE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept');
  next();
});

app.get('/setCookie', function (req, res) {
  res.cookie('cookieName', (parseInt(Math.random() * 100000000000000000000)).toString(36),{
    // domain: '.cookie.com',
    // httpOnly: false, // dont let browser javascript access cookie ever
    // secure: true, // only use cookie over https
    // sameSite: 'none', // SameSite 属性可以让 Cookie 在跨站请求时不会被发送，从而可以阻止跨站请求伪造攻击（CSRF）。
    expires: new Date(Date.now() + 900000)
  })
  res.send('response header set cookie!');
});

app.get('/catCookie', function (req, res) {
  res.send(`请求携带的cookie为：${req.get('cookie')}`);
});
app.post('/sendCookie', function (req, res) {
  res.send('request header set cookie!');
});

app.listen(3000, function () {
  console.log('http app listening on port 3000!');
});
