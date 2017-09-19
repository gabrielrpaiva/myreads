import React from 'react';
import { shallow, mount } from "enzyme";
import { Route, Link, StaticRouter, MemoryRouter } from 'react-router-dom'
import SearchBooks from '../SearchBooks';

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

const MountOptions = (path) => {

    return {
        context: {
            router: {
                route: {
                    location: { pathname: path, search: '', hash: '', key: 1 },
                },
                history: {
                    createHref: (a, b) => { },
                    push: (path, state) => { pushedRouterPath = path },
                    replace: () => { }
                }
            }
        }, childContextTypes: {
            router: PropTypes.object
        }
    }
};


it("execute line 67", () => {
    let searckBookTest = jest.fn()
    /*  const test = mount(
         <MemoryRouter initialEntries={['/']} initialIndex={0}>
             <SearchBooks setUpdate={setUpdate}
                 objShelfs={allShelfs}
                 bookIdUpdate={bookIdUpdate}
                 filterRelatedBooks={filterRelatedBooks}
                 classPopUp={classPopUp}
                 relatedBooks={relatedBooks}
                 closePopUp={closePopUp}
                 relatedBookId={relatedBookId} searckBookTest={searckBookTest}/>
                 </MemoryRouter> 
     ); */

    const wrapper = shallow(<SearchBooks setUpdate={setUpdate}
        objShelfs={allShelfs}
        bookIdUpdate={bookIdUpdate}
        filterRelatedBooks={filterRelatedBooks}
        classPopUp={classPopUp}
        relatedBooks={relatedBooks}
        closePopUp={closePopUp}
        relatedBookId={relatedBookId}  />);

    let query = "react"

   //wrapper.setState({ query })
  // wrapper.instance().state.query = query;
   //wrapper.update()
    // console.log(wrapper.state())
 

    //const newWrapper = wrapper.dive()
   
    //wrapper.find(".search-books-input-wrapper input")
   // wrapper.find(".search-books-input-wrapper input", { target: "react" })
   // wrapper.find(".search-books-input-wrapper input").simulate("change")
    wrapper.find("input").simulate("change", { target: { value: 'react' } })
   // wrapper.find(".search-books-input-wrapper input", { target: "react" }).simulate("change")
   console.log(wrapper.state())
 
    let searckBook = jest.fn()
    let filterList = jest.fn()
    let Link = jest.fn()
    //wrapper.find("input").simulate("change");
     
   // wrapper.find(".search-books-input-wrapper input").node.value = "react";
  
    //console.log(wrapper.state())
    //console.log(wrapper.debug())
   //wrapper.find(".search-books-input-wrapper input").simulate("change");
   //expect(wrapper.state().books.length).toBe(1);
    //xpect(wrapper.find(".search-books-input-wrapper input").length).toBe(1);
    // wrapper.find(".book-shelf-filter span").simulate("click");
     //expect(searckBookTest).toHaveBeenCalledTimes(1);
});