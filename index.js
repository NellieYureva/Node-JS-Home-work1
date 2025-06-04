const http = require('http');

let countAbout = 0;
let countMain = 0;

const server = http.createServer((req, res) => {
  console.log('Запрос получен');
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=UTF-8' });
    countMain++;
    res.end(
      `<h1>Главная страница</h1><a href="/about">Перейти на страницу обо мне!</a><p>Количество посещений страницы: ${countMain}</p>`
    );
  } else if (req.url === '/about') {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=UTF-8' });
    countAbout++;
    res.end(
      `<h1>Обо мне</h1><a href="/">Перейти на главную страницу сайтат!</a><p>Количество посещений страницы: ${countAbout}</p>`
    );
  } else {
    res.writeHead(404, { 'Content-Type': 'text/html; charset=UTF-8' });
    res.end(`<h1>Ошибка 404.Страница не найдена!</h1>`);
  }
});

const port = 3000;

server.listen(port, () => {
  console.log(`Сервер запущен на порту ${port}`);
});
