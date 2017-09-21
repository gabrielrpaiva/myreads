import React, { Component } from 'react';

class ShelfOptions extends Component {

    render() {

          /* Get the variables from the props */
        const { allShelfs, setUpdate, book } = this.props 
 
         /* Go through allShelfs to mount the select option to the books  */
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