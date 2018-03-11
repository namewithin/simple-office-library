import React from 'react';

function BookPreview(props) {

    let book = props.book;

    return (

        <div className="book-preview media">
            <img src={book.avatar} alt={book.title} className="book-preview__img mr-3"/>
            <section className="book-preview__info media-bdy">
                <h5 className="book-preview__name mt-0">{book.title}</h5>
                <p className="book-preview__description">{book.description}</p>
                <time className="book-preview__publish">{book.published_at}</time>
            </section>
        </div>


    )
}

export default BookPreview;