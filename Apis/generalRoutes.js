const generalService = require("../service/generalService");
module.exports = function (app) {
    app.get('/general/getBookList', (request, response) => {
        try {
            generalService.getBookList().then(res => {
                response.json(res)
            })
        } catch (error) {
            throw (error);
        }

    });

    app.post("/general/addBook", (request, response) => {

        generalService.addBook(request).then(res => {
            response.json(res)
        })
    });
    app.put("/general/updateBookDetails", (request, response) => {

        generalService.updateBookDetails(request).then(res => {
            response.json(res)
        })
    });
    app.delete("/general/deleteBook", (request, response) => {

        generalService.deleteBook(request).then(res => {
            response.json(res)
        })
    });
}