import React from 'react';
import { shallow, mount } from "enzyme";
import ShelfsBooks from '../Shelfs';


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
            { id: 10, title: "Livro", authors: "Eu", shelf: "read", imageLinks: { thumbnail: "algo" } } 
        ]
    
        let shelf = "allShelfs"
        expect(shallow(<ShelfsBooks books={books}
            setUpdate={setUpdate}
            objShelfs={allShelfs}
            bookIdUpdate={bookIdUpdate}
            filterRelatedBooks={filterRelatedBooks}
            classPopUp={classPopUp}
            relatedBooks={relatedBooks}
            closePopUp={closePopUp}
            relatedBookId={relatedBookId} />)).toMatchSnapshot();
    });