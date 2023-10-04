const Hapi = require('@hapi/hapi')
const notes = require('./notes')
const routes = require('./routes')

const init = async () => {
    const server = Hapi.server({
        port: 5000,
        host: 'localhost',
        routes: {
            cors: {
              origin: ['http://notesapp-v1.dicodingacademy.com/'],
            },
          },
    }) 

    await server.start()
    console.log(`server dimulai pada ${server.info.uri}`)
};

init();