import React, { Component } from 'react';
import If from '../../If';
import RelatedBooks from '../../RelatedBooks'
import ShelfOptions from './ShelfOptions'


class ListBooks extends Component {


    render() {

        const { books, shelf, setUpdate, allShelfs, bookIdUpdate,
            filterRelatedBooks, classPopUp, relatedBooks, closePopUp, relatedBookId } = this.props

        let showingBooks


        window.localStorage.setItem('ctrlDidMount', shelf)

        if (shelf === "allShelfs") {

            showingBooks = books

        } else {

            if (typeof (books) !== "undefined" && books.length > 0) {

                if (shelf === "none") { showingBooks = books.filter((book) => typeof (book.shelf) === "undefined") }
                else { showingBooks = books.filter((book) => book.shelf === shelf) }

            }
            else { showingBooks = books }

        }

        if (typeof (showingBooks) === "undefined") {

            showingBooks = []

        }

        showingBooks.map(book =>
            typeof (book.shelf) === "undefined" ? book.shelf ="none" : book.shelf 
        ) 

        return (
            <ol className="books-grid">
                {showingBooks.map(book => (

                    <li key={book.id}>
                        <div className="book">
                            <div className="book-top">
                                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${book.imageLinks.thumbnail}")` }}></div>
                                <If test={book.shelf === 'read'}>
                                    <div onClick={(event) => filterRelatedBooks(book)}>
                                        <a className={relatedBookId === book.id  ? "book-shelf-read-loader" : "book-shelf-read"}></a>
                                    </div>
                                </If>

                                <div className={bookIdUpdate === book.id  ? "book-shelf-on-changer" : "book-shelf-changer"}>
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

                ))}
            </ol>
        )
    }
}

export default ListBooks