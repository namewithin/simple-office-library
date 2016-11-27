import {BookResource, RequestResource} from './resources';

export default {
    getBooksPage: function () {
        return BookResource.get();
    },
    getBook: function (id) {
        return BookResource.get({id: id})
    },
    createBookRequest: function (data) {
        return RequestResource.save({data})
    }

}
