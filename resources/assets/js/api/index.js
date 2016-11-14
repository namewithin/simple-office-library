import {BookResource} from './resources';

export default {
    getBooksPage: function () {
        return BookResource.get();
    },
    getBook: function (id) {
        return BookResource.get({id: id})
    }
}