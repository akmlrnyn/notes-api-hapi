const nanoid = require('nanoid')
const notes = require('./notes')

const addNoteHandler = (request, h) => {
    const { title, tags, body } = request.payload

    const id = nanoid(16)
    const createdAt = newDate.toISOString()
    const updatedAt = createdAt
    
    const newNote = { 
        title, tags, body, createdAt, updatedAt
     }

     notes.push(newNote)

     const isSuccess = notes.filter((note) => note.id === id).length > 0


     if (isSuccess) {
        const response = h.response({
            status: "success",
            message: "data berhasil ditambahkan",
            data: {
                noteId: id
            }
        })
        response.code(201)
        return response
     }

     const response = h.response({
        status: "fail",
        message: "data gagal ditambahkan"
     })
     response.code(500)
     return response
}

const getAllNotesHandler = () => ({
    status: 'success',
    data: {
        notes
    },
})

const getNoteByIDHandler = (request, h) => {

    const { id } = request.params

    const note = notes.filter((n) => n.id === id)[0]

    if (note !== undefined) {
        return {
            status: 'success',
            data: {
                note
            },
        }
    }

    const response = h.response({
        status: 'fail',
        message: 'Catatan tidak ditemukan'
    })

    response.code(404)
    return response
}

const editNoteById = (request, h) => {
    const { id } = request.params
    const { title, tags, body } = request.payload

    const updatedAt = new Date().toISOString()
    const index = notes.findIndex((note) => note.id === id)

    if (index !== -1) {
        notes[index] = {
            ...notes[index],
            title,
            tags,
            body,
            updatedAt
        }
    

    const response = h.response({
        status: 'success',
        message: 'data berhasil diubah'
    })

    response.code(200)
    return response
}

 const response = h.response({
    status: 'fail',
    message: 'cant find id note'
 })

 response.code(404)
 return response
}
    

module.exports = { addNoteHandler, getAllNotesHandler, getNoteByIDHandler }