import {BookResource, RequestResource, ReserveResource} from './resources';

export default {
    getBooksPage() {
        return BookResource.get();
    },
    getBook(id) {
        return BookResource.get({id: id});
    },
    createBookRequest(data) {
        return RequestResource.save({data});
    },
    getRequestedBooks(){
        return RequestResource.get();
    },
    deleteRequestedBook(id){
        return RequestResource.delete({id: id});
    },
    reserveBook(bookId){
        return ReserveResource.post({bookId: bookId})
    }
}
