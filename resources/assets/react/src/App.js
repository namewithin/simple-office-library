import React from 'react';
import {Route} from 'react-router-dom';
import API from './api';
import Navigation from './components/Navigation';
import BooksTable from './components/BooksTable';
import AddBook from "./components/AddBook";


class App extends React.Component {

    constructor() {
        super();

        this.state = {booksList: ''};

        this.loadBooks = this.loadBooks.bind(this);
    }

    loadBooks() {

        let request = new XMLHttpRequest();

        request.open('GET',  API + '/book', true);

        request.send();

        request.onload = () => {

            let books = JSON.parse(request.response);

            this.setState({bookList: books});

            // console.log(this.state.bookList);
        };
    }

    componentDidMount() {

        this.loadBooks();
    }

    render() {

        return(
            <div>
                <header className="main-header">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                            <Navigation/>
                            </div>
                        </div>
                    </div>
                </header>
                <main className="main">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <Route exact path='/' render={() => <BooksTable books={this.state.bookList}/>}/>
                                <Route path="/add-book" component={AddBook}/>
                            </div>                            
                        </div>
                    </div>
                </main>
            </div>       

        )
    }

}

export default App;