// 引入檔案
const jsonServer = require('json-server');
// const auth = require('json-server-auth');
// 建立server
const server = jsonServer.create();
const router = jsonServer.router('db.json');

// /!\ Bind the router db to the app
server.db = router.db;

// You must apply the auth middleware before the router
// server.use(auth);
server.use(router);
server.listen(3000);
