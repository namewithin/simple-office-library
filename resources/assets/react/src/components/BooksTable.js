import React from 'react';
import BookPreview from "./BookPreview";

function BooksTable(props) {

    if(!props.books) return <h4>No books available</h4>;

    let books = props.books.data;

    let booksList = books.map((book) =>
        <div className="card" key={book.id}>
            <div className="card-header" id={book.title}>
            <h5 className="mb-0">
                <button className="btn btn-link" data-toggle="collapse" data-target={"#" + book.id} aria-expanded="true" aria-controls="collapseOne">
                {book.title}
                </button>
            </h5>
            </div>
            <div id={book.id} className="collapse" aria-labelledby={book.title} data-parent="#accordion">
            <div className="card-body">
                <BookPreview book={book}/>
            </div>
            </div>
        </div>

);

    return(

        <div className="accordion">
            {booksList}
        </div>        

    )
}

export default BooksTable;