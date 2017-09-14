import React, { Component } from 'react';

class ShelfOptions extends Component {

    render() {

        const { allShelfs, setUpdate, book } = this.props 
 
        let  shelfOptions = Object.keys(allShelfs).map(function (key) {

            if (key === "moveto") {

                return <option key={key} value={key} disabled>{allShelfs[key]}</option>

            } else {

                return <option key={key} value={key}>{allShelfs[key]}</option>
            }

        });


        return (<select value={book.shelf} onChange={(event) => setUpdate(book, event.target.value)}>
            {shelfOptions} />
                 </select>)
    }

}

export default ShelfOptions