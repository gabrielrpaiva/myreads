import React, { Component } from 'react';
import If from '../../If';
import RelatedBooks from '../../RelatedBooks'
import ShelfOptions from './ShelfOptions'


class ListBooks extends Component {


    render() {

        /* Get the variables from the props */
        const { books, shelf, setUpdate, allShelfs, bookIdUpdate,
            filterRelatedBooks, classPopUp, relatedBooks, closePopUp, relatedBookId } = this.props

        let showingBooks =[]


        if (shelf === "allShelfs") {

            /* Get all books  */
            showingBooks = books

        } else {

            /* Verify if there is any books on the list  */
            if (typeof (books) !== "undefined" && books.length > 0) {


                if (shelf === "none") {

                    /* If the shef is none, get all books with undefined shelf */
                    showingBooks = books.filter((book) => typeof (book.shelf) === "undefined")
                }
                else {

                    /* Get the books according to the past shelf */
                    showingBooks = books.filter((book) => book.shelf === shelf)

                }

            }
            else {
                /* Get the books according to the past shelf */
                showingBooks = books
            }

        }

        /* Verify if showingBooks is not undefined */
        if (typeof (showingBooks) === "undefined") {

            showingBooks = []

        }

        /* Set the shelf none, where the shelf is undefined */
        showingBooks.map(book =>
            typeof (book.shelf) === "undefined" ? book.shelf = "none" : book.shelf
        )

        return (
            <ol className="books-grid">
                {showingBooks.map(book => (

                    <li key={book.id}>
                        <div className="book">
                            <div className="book-top">
                                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${book.imageLinks.thumbnail}")` }}></div>
                                <If test={book.shelf === 'read'}>
                                    <div onClick={(event) => filterRelatedBooks(book)} title="Related Books">
                                        <a className={relatedBookId === book.id ? "book-shelf-read-loader" : "book-shelf-read"}></a>
                                    </div>
                                </If>

                                <div className={bookIdUpdate === book.id ? "book-shelf-on-changer" : "book-shelf-changer"}  title="Shelf Options">
                                    <ShelfOptions allShelfs={allShelfs} setUpdate={setUpdate} book={book} />
                                </div>
                            </div>
                            <div className="book-title">{book.title}</div>
                            <div className="book-authors">{book.authors}</div> 
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