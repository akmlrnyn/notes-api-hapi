const Hapi = require('@hapi/hapi');
const routes = require('./routes');
const notes = require('./notes.js');

const init = async () => {
  const server = Hapi.server({
    port: 5000,
    host: 'localhost',
    routes: {
      cors: {
        origin: ['*'],
      },
    },
  });

  server.route(routes);

  await server.start();
  console.log(`server is running in ${server.info.uri}`);
};

init();