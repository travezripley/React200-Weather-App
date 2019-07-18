const server = require('./server');

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => console.log(` The Server is listening on ${PORT} just like your chick.`));
