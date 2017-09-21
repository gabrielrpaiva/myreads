import React from 'react'
import './App.css'
import ListBooks from './common/components/ListBooks'
import * as BooksAPI from './util/BooksAPI'
import App from './App'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'
import { Link } from 'react-router-dom'



class SearchBooks extends React.Component {

    /* Create the states of the component */
    state = {
        books: [],
        query: '',
        shelfFilter: 'allShelfs'
    }

    /* Function  to search the book, accordding to the query */
    searckBook = (query) => {
        this.setState({ query })

        BooksAPI.search(query, 20).then(books => {
            this.setState(state => ({
                books
            }))
        })

    }

    /* Function to change the state for filter the books */
    filterList = (shelfFilter) => {

        this.setState({ shelfFilter })

    }

    render() {

        /* Get the variables from the state */
        const { books, query, shelfFilter } = this.state

        /* Get the variables from the props */
        const { setUpdate, objShelfs, bookIdUpdate, filterRelatedBooks,
            classPopUp, relatedBooks, closePopUp, relatedBookId } = this.props

        let shelfBooks

        /* Verify if there is some books on the state */
        if (typeof (books) !== "undefined" && books.length > 0) {

            /* Set the list of searched books in the localStorage */
            window.localStorage.setItem('searchedBooks', JSON.stringify(books));

            /* Get the books that are in the shelfs */
            let booksInShelfs = window.localStorage.getItem('booksInShelfs') || '{}';

            booksInShelfs = JSON.parse(booksInShelfs)

            /* Go through all the searched books and verify if the specific book is in the shelf, and the set the shelf  */
            shelfBooks = books.map(obj => {

                const newObj = Object.assign({}, obj);
                let bookShelf = booksInShelfs.filter(bs => bs.id === obj.id)

                if (bookShelf.length > 0) {

                    newObj.shelf = bookShelf[0].shelf

                }

                return newObj;

            });

            /* Oder the list of books by the the title */
            shelfBooks.sort(sortBy('title'))
        }


        return (

            <div className="app">

                <div className="search-books">
                    <div className="search-books-bar">
                        <Link
                            to='/'
                            className='close-search'>
                        </Link>
                        <div className="search-books-input-wrapper">

                            <input type="text"
                                placeholder="Search by title or author"
                                value={query}
                                onChange={(event) => this.searckBook(event.target.value)} />

                        </div>
                    
                    </div>

                    <div className="search-books-results">
                    <div className="book-shelf-filter">
                            <span onClick={(event) => this.filterList("read")}>Filter by:</span>
                            <select value={shelfFilter} onChange={(event) => this.filterList(event.target.value)} >
                                <option value="allShelfs">All Shelfs</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                            </select>
                        </div>
                        <ListBooks books={shelfBooks}
                            shelf={shelfFilter}
                            setUpdate={setUpdate}
                            allShelfs={objShelfs}
                            bookIdUpdate={bookIdUpdate}
                            filterRelatedBooks={filterRelatedBooks}
                            classPopUp={classPopUp}
                            relatedBooks={relatedBooks}
                            closePopUp={closePopUp}
                            relatedBookId={relatedBookId} />
                    </div>
                </div>


            </div >

        )

    }

}

export default SearchBooks;