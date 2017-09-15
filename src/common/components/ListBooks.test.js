import React from 'react';
import { shallow, mount } from "enzyme";
import ListBooks from './ListBooks';

/* it("renders without crashing", () => {
    expect(shallow(<ListBooks />)).toMatchSnapshot();
});
 */

let books = [
    { id: 10, title: "Livro", authors: "Eu", shelf: "read", imageLinks: { thumbnail: "algo" } },
    { id: 263, title: "Livro Dois", authors: "Outro", shelf: "read", imageLinks: { thumbnail: "algo dois" } }
]

let shelf = "allShelfs"

const setUpdate = jest.fn()

const bookIdUpdate = ""

const filterRelatedBooks = jest.fn()

const classPopUp = ""

const relatedBooks = []

const closePopUp = jest.fn()

const relatedBookId = ""

it("renders without crashing", () => {



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

    shelf = "read" 

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

    shelf = "none" 

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

     books = undefined

     shelf = "none" 

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
     
         shelf = "read" 
      
    /*      const test = mount(
            <ListBooks books={books}
            shelf={shelf}
            setUpdate={setUpdate}
            bookIdUpdate={bookIdUpdate}
            filterRelatedBooks={filterRelatedBooks}
            classPopUp={classPopUp}
            relatedBooks={relatedBooks}
            closePopUp={closePopUp}
            relatedBookId={relatedBookId} />
        ); */

        console.log(mount(<ListBooks books={books}
            shelf={shelf}
            setUpdate={setUpdate}
            bookIdUpdate={bookIdUpdate}
            filterRelatedBooks={filterRelatedBooks}
            classPopUp={classPopUp}
            relatedBooks={relatedBooks}
            closePopUp={closePopUp}
            relatedBookId={relatedBookId} />).debug());
       
       // expect(test.find(".books-grid").length).toBe(1);     
       
    });

