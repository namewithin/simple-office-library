import React from 'react';
import API from '../api';

function AddBook(props) {
    
    function createNewBook(e) {
        e.preventDefault();

        let request = new XMLHttpRequest();

        request.open('GET', API + '/book/create', true);

        // request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

        request.send();

        request.onload = () => {
            console.log(request.response);
        };
    }

    return(

        <form action={API + '/book/create'}>
            <div className="form-group">
                <label htmlFor="bookTitle">Book title</label>
                <input type="text" className="form-control" id="inputEmail4" placeholder="Book title"/>
            </div>
            <div className="form-group">
                <label htmlFor="author">Author</label>
                <input type="text" className="form-control" id="inputAddress" placeholder="Book author"/>
            </div>
            <div className="form-group">
                <label htmlFor="bookDescription">Book description</label>
                <input type="text" className="form-control" id="inputAddress2" placeholder="What is it about"/>
            </div>
            <div className="form-group">
                <label htmlFor="uploadBook">Upload a book</label>
                <input type="file" className="form-control-file" id="uploadBook"/>
            </div>
            <div className="form-row">
                <div className="col-auto">
                    <button type="submit" className="btn btn-primary" onClick={createNewBook}>Add a book</button>
                </div>
                <div className="col-auto">
                    <button type="reset" className="btn btn-secondary">Clear the form</button>
                </div>
            </div>
        </form>
    )

}

export default AddBook;