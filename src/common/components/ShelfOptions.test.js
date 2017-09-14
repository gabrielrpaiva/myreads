import React from 'react';
import { shallow, mount } from "enzyme";
import ShelfOptions from './ShelfOptions';

it("renders without crashing", () => {

    const allShelfs = {
        moveto: "Move to..",
        currentlyReading: "Currently Reading",
        wantToRead: "Want To Read",
        read: "Read",
        none: "None"
    }

    const book = { shelf: "read" }

    const setUpdate = jest.fn();

    expect(shallow(<ShelfOptions allShelfs={allShelfs}
        setUpdate={setUpdate}
        book={book} />)).toMatchSnapshot();
});


it("execute line 23", () => {
  
    const allShelfs = {
        moveto: "Move to..",
        currentlyReading: "Currently Reading",
        wantToRead: "Want To Read",
        read: "Read",
        none: "None"
    }

    const book = { shelf: "read" }

    const setUpdate = jest.fn();


    const test = mount(
        <ShelfOptions allShelfs={allShelfs}
        setUpdate={setUpdate}
        book={book} />
    );
    test.find("select").simulate("change");
    expect(setUpdate).toHaveBeenCalledTimes(1);
  });

 