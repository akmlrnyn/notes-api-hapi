const { addNoteHandler, getAllNotesHandler, getNoteByIDHandler } = require("./handler")

const routes = [
    {
        method: 'POST',
        path: '/notes',
        handler: addNoteHandler,
    },
    {
        method: 'GET',
        path: '/notes',
        handler: getAllNotesHandler,
    },
    {
        method: 'GET',
        path: '/notes/{id}',
        handler: getNoteByIDHandler,
    },
    {
        method: 'PUT',
        path: '/notes/{id}',
        handler: () => {}
    }
]

module.exports = routes