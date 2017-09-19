import React from 'react';
import { shallow, mount } from "enzyme";
import ListBooks from '../../src/common/components/ListBooks';


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

it("renders for allShelfs", () => {

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


it("renders with shelf none", () => {


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



it("renders with empty books", () => {

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



it("execute line 52", () => {


    let books = [
        { id: 10, title: "Livro", authors: "Eu", shelf: "read", imageLinks: { thumbnail: "algo" } }
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


    test.find(".book-top div a").simulate("click");
    expect(filterRelatedBooks).toHaveBeenCalledTimes(1);
});


it("execute line 67", () => {


    let books = [
        { id: 10, title: "Livro", authors: "Eu", shelf: "read", imageLinks: { thumbnail: "algo" } }
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


    test.find(".close").simulate("click");
    expect(closePopUp).toHaveBeenCalledTimes(1);
});
