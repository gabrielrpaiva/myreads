import React from 'react';
import { shallow, mount } from "enzyme";
import ListBooks from './ListBooks';

/* it("renders without crashing", () => {
    expect(shallow(<ListBooks />)).toMatchSnapshot();
});
 */

it("renders without crashing", () => {

    const books = [
        { id: 10, title: "Livro", authors: "Eu", shelf: "read", imageLinks: { thumbnail: "algo" } },
        { id: 263, title: "Livro Dois", authors: "Outro", shelf: "currentlyReading", imageLinks: { thumbnail: "algo dois" } }
    ]

    const shelf = "allShelfs"

    const setUpdate = jest.fn()

    const bookIdUpdate = ""

    const filterRelatedBooks = jest.fn()

    const classPopUp = ""

    const relatedBooks = []

    const closePopUp = jest.fn()

    const relatedBookId = ""

    expect(shallow(<ListBooks books={books}
        shelf={shelf}
        setUpdate={setUpdate}
        bookIdUpdate={bookIdUpdate}
        filterRelatedBooks={filterRelatedBooks}
        classPopUp={classPopUp}
        relatedBooks={relatedBooks}
        closePopUp={closePopUp}
        relatedBookId={relatedBookId} />)).toMatchSnapshot();
});

it("renders without crashing two", () => {

    const books = [
        { id: 10, title: "Livro", authors: "Eu", shelf: "read", imageLinks: { thumbnail: "algo" } },
        { id: 263, title: "Livro Dois", authors: "Outro", shelf: "currentlyReading", imageLinks: { thumbnail: "algo dois" } }
    ]

    const shelf = "read"

    const setUpdate = jest.fn()

    const bookIdUpdate = ""

    const filterRelatedBooks = jest.fn()

    const classPopUp = ""

    const relatedBooks = []

    const closePopUp = jest.fn()

    const relatedBookId = ""

    expect(shallow(<ListBooks books={books}
        shelf={shelf}
        setUpdate={setUpdate}
        bookIdUpdate={bookIdUpdate}
        filterRelatedBooks={filterRelatedBooks}
        classPopUp={classPopUp}
        relatedBooks={relatedBooks}
        closePopUp={closePopUp}
        relatedBookId={relatedBookId} />)).toMatchSnapshot();
});


it("renders without crashing three", () => {

    const books = [
        { id: 10, title: "Livro", authors: "Eu", shelf: "read", imageLinks: { thumbnail: "algo" } },
        { id: 263, title: "Livro Dois", authors: "Outro", shelf: "currentlyReading", imageLinks: { thumbnail: "algo dois" } }
    ]

    const shelf = "none"

    const setUpdate = jest.fn()

    const bookIdUpdate = ""

    const filterRelatedBooks = jest.fn()

    const classPopUp = ""

    const relatedBooks = []

    const closePopUp = jest.fn()

    const relatedBookId = ""

    expect(shallow(<ListBooks books={books}
        shelf={shelf}
        setUpdate={setUpdate}
        bookIdUpdate={bookIdUpdate}
        filterRelatedBooks={filterRelatedBooks}
        classPopUp={classPopUp}
        relatedBooks={relatedBooks}
        closePopUp={closePopUp}
        relatedBookId={relatedBookId} />)).toMatchSnapshot();
});



it("renders without crashing four", () => {

    const books = undefined

    const shelf = "none"

    const setUpdate = jest.fn()

    const bookIdUpdate = ""

    const filterRelatedBooks = jest.fn()

    const classPopUp = ""

    const relatedBooks = []

    const closePopUp = jest.fn()

    const relatedBookId = ""

    expect(shallow(<ListBooks books={books}
        shelf={shelf}
        setUpdate={setUpdate}
        bookIdUpdate={bookIdUpdate}
        filterRelatedBooks={filterRelatedBooks}
        classPopUp={classPopUp}
        relatedBooks={relatedBooks}
        closePopUp={closePopUp}
        relatedBookId={relatedBookId} />)).toMatchSnapshot();
});


it("renders without crashing five", () => {

    const books = { id: "10", title: "Livro", authors: "Eu", shelf: "read", imageLinks: { thumbnail: "algo" } }


    const shelf = undefined

    const setUpdate = jest.fn()

    const bookIdUpdate = "10"

    const filterRelatedBooks = jest.fn()

    const classPopUp = ""

    const relatedBooks = []

    const closePopUp = jest.fn()

    const relatedBookId = "10"

    expect(shallow(<ListBooks books={books}
        shelf={shelf}
        setUpdate={setUpdate}
        bookIdUpdate={bookIdUpdate}
        filterRelatedBooks={filterRelatedBooks}
        classPopUp={classPopUp}
        relatedBooks={relatedBooks}
        closePopUp={closePopUp}
        relatedBookId={relatedBookId} />)).toMatchSnapshot();

        
});

