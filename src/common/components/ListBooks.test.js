import React from 'react';
import { shallow, mount } from "enzyme";
import ListBooks from './ListBooks';

/* it("renders without crashing", () => {
    expect(shallow(<ListBooks />)).toMatchSnapshot();
}); */



const allShelfs = {
    moveto: "Move to..",
    currentlyReading: "Currently Reading",
    wantToRead: "Want To Read",
    read: "Read",
    none: "None"
}


const setUpdate = jest.fn()

const bookIdUpdate = ""

const filterRelatedBooks = jest.fn()

const classPopUp = ""

const relatedBooks = []

const closePopUp = jest.fn()

const relatedBookId = ""

it("renders without crashing", () => {

    let books = [
        { id: 10, title: "Livro", authors: "Eu", shelf: "read", imageLinks: { thumbnail: "algo" } },
        { id: 263, title: "Livro Dois", authors: "Outro", shelf: "read", imageLinks: { thumbnail: "algo dois" } }
    ]

    let shelf = "allShelfs"
    expect(shallow(<ListBooks books={books}
        shelf={shelf}
        setUpdate={setUpdate}
        allShelfs={allShelfs}
        bookIdUpdate={bookIdUpdate}
        filterRelatedBooks={filterRelatedBooks}
        classPopUp={classPopUp}
        relatedBooks={relatedBooks}
        closePopUp={closePopUp}
        relatedBookId={relatedBookId} />)).toMatchSnapshot();
});


it("renders without crashing two", () => {


    let books = [
        { id: 10, title: "Livro", authors: "Eu", shelf: "read", imageLinks: { thumbnail: "algo" } },
        { id: 263, title: "Livro Dois", authors: "Outro", shelf: "read", imageLinks: { thumbnail: "algo dois" } }
    ]

    let shelf = "read"

    expect(shallow(<ListBooks books={books}
        shelf={shelf}
        setUpdate={setUpdate}
        allShelfs={allShelfs}
        bookIdUpdate={bookIdUpdate}
        filterRelatedBooks={filterRelatedBooks}
        classPopUp={classPopUp}
        relatedBooks={relatedBooks}
        closePopUp={closePopUp}
        relatedBookId={relatedBookId} />)).toMatchSnapshot();
});


it("renders without crashing three", () => {


    let books = [
        { id: 10, title: "Livro", authors: "Eu", shelf: "currentlyReading", imageLinks: { thumbnail: "algo" } },
        { id: 263, title: "Livro Dois", authors: "Outro", shelf: "currentlyReading", imageLinks: { thumbnail: "algo dois" } }
    ]

    let shelf = "none"

    expect(shallow(<ListBooks books={books}
        shelf={shelf}
        setUpdate={setUpdate}
        allShelfs={allShelfs}
        bookIdUpdate={bookIdUpdate}
        filterRelatedBooks={filterRelatedBooks}
        classPopUp={classPopUp}
        relatedBooks={relatedBooks}
        closePopUp={closePopUp}
        relatedBookId={relatedBookId} />)).toMatchSnapshot();
});



it("renders without crashing four", () => {

    let books = undefined

    let shelf = "none"

    expect(shallow(<ListBooks books={books}
        shelf={shelf}
        setUpdate={setUpdate}
        allShelfs={allShelfs}
        bookIdUpdate={bookIdUpdate}
        filterRelatedBooks={filterRelatedBooks}
        classPopUp={classPopUp}
        relatedBooks={relatedBooks}
        closePopUp={closePopUp}
        relatedBookId={relatedBookId} />)).toMatchSnapshot();
});

it("renders without crashing five", () => {


    let books = [
        { id: 10, title: "Livro", authors: "Eu", shelf: "read", imageLinks: { thumbnail: "algo" } },
        { id: 263, title: "Livro Dois", authors: "Outro", shelf: "read", imageLinks: { thumbnail: "algo dois" } }
    ]

    let shelf = "read"

    const test = mount(
        <ListBooks books={books}
            shelf={shelf}
            setUpdate={setUpdate}
            allShelfs={allShelfs}
            bookIdUpdate={bookIdUpdate}
            filterRelatedBooks={filterRelatedBooks}
            classPopUp={classPopUp}
            relatedBooks={relatedBooks}
            closePopUp={closePopUp}
            relatedBookId={relatedBookId} />
    );

     
    expect(test.find("a").length).toBe(4); 
});


