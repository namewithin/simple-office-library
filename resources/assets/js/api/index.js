import {UserResource, AuthResource, BookResource, TagResource} from './resources'

export default {
    mdUser: function (data) {
        return UserResource.update({id: 'mdUser'}, data)
    },
    getTagList: function () {
        return TagResource.get({id: 'getFrontTagList'})
    },
    getBooksPage: function () {
        return BookResource.get({id: 'paginate'})
    },
}
