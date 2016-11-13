import {BookResource} from './resources';

export default {
    getBooksPage: function () {
        return BookResource.get();
    },
}