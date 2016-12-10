import {BookResource, RequestResource} from './resources';

export default {
    getBooksPage() {
        return BookResource.get();
    },
    getBook(id) {
        return BookResource.get({id: id})
    },
    createBookRequest(data) {
        return RequestResource.save({data})
    },
    getRequestedBooks(){
        return RequestResource.get();
    }

}
