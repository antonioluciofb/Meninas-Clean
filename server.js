const jsonServer = require('json-server');
const cors = require('cors');
const path = require('path');
const server = jsonServer.create()
const router = jsonServer.router(path.join(__dirname, 'server.json'))
 

server.use(router);
server.use(cors());
server.listen(3333, () => {
  console.log('JSON Server is running')
})