const db_BookMaster = require("../dataBase/models/db_BookMaster")

async function getBookList(request, response = []) {
    try {
        response = await db_BookMaster.find()
    } catch (err) {
        throw (err)
    }
    return response
}

async function addBook(request, response = {}) {
    try {
        await db_BookMaster.create(request.body)
        response.message = "Book Added Successfully...!"
    } catch (err) {
        throw (err)
    }
    return response
}
async function updateBookDetails(request, response = {}) {
    try {
        let filter = {
            _id: request.body._id
        }
        let update = {
            bookName: request.body.bookName,
            Auther: request.body.Auther,
            genre: request.body.genre
        }
        await db_BookMaster.findOneAndUpdate(filter, update)
    } catch (err) {
        throw (err)
    }
}

async function deleteBook(request,response={}){
    let filter={
        _id:request.query?._id
    }
    try{
        await db_BookMaster.deleteOne(filter)
        response.message="Deleted.."
    }catch(err){
        throw(err)
    }
    return response
}
module.exports = {
    getBookList: getBookList,
    addBook: addBook,
    updateBookDetails: updateBookDetails,
    deleteBook:deleteBook
}