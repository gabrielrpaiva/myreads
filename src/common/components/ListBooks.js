import React, { Component } from 'react';
import If from '../../If';
import RelatedBooks from '../../RelatedBooks'
import ShelfOptions from './ShelfOptions'


class ListBooks extends Component {


    render() {

        const { books, shelf, setUpdate, allShelfs, bookIdUpdate,
            filterRelatedBooks, classPopUp, relatedBooks, closePopUp, relatedBookId } = this.props

        let showingBooks = {}

        window.localStorage.setItem('ctrlDidMount', shelf)

        if (shelf === "allShelfs") {

            showingBooks = books

        } else {

            if (typeof (books) !== "undefined" && books.length > 0) {

                if (shelf === "none") { showingBooks = books.filter((book) => typeof (book.shelf) === "undefined") }
                else { showingBooks = books.filter((book) => book.shelf === shelf) }

            }
            else{
                showingBooks = books
            }

        }

        let shelfBooks

        if (typeof (showingBooks) !== "undefined" && showingBooks.length > 0) {

            shelfBooks = showingBooks.map(function (book) {

                let classToLoad = "book-shelf-changer"

                let classToLoadRelatedBook = "book-shelf-read"

                if (bookIdUpdate === book.id) { classToLoad = "book-shelf-on-changer" }

                if (relatedBookId === book.id) { classToLoadRelatedBook = "book-shelf-read-loader" }

                if (typeof (book.shelf) === "undefined") { book.shelf = "none" }


                return <li key={book.id}>
                    <div className="book">
                        <div className="book-top">
                            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${book.imageLinks.thumbnail}")` }}></div>
                            <If test={book.shelf === 'read'}>
                                <div onClick={(event) => filterRelatedBooks(book)}>
                                    <a className={classToLoadRelatedBook}></a>
                                </div>
                            </If>

                            <div className={classToLoad}>
                                <ShelfOptions allShelfs={allShelfs} setUpdate={setUpdate} book={book} />
                            </div>
                        </div>
                        <div className="book-title">{book.title}</div>
                        <div className="book-authors">{book.authors}</div>
                        <div className="book-authors">{book.shelf}</div>
                        <If test={book.shelf === 'read'}>
                            <div id="popup1" className={`overlay${classPopUp}`}>
                                <div className="popup">
                                    <a className="close" onClick={(event) => closePopUp()}>&times;</a>
                                    <RelatedBooks bookId={book.id} relatedBooks={relatedBooks}
                                        setUpdate={setUpdate}
                                        objShelfs={allShelfs}
                                        bookIdUpdate={bookIdUpdate} />
                                </div>
                            </div>
                        </If>
                    </div>
                </li>

            });
        }

        return (
            <ol className="books-grid">
                {shelfBooks}
            </ol>
        )
    }


}

export default ListBooks