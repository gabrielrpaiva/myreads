import React, { Component } from 'react';


const ShelfOptions = (props) => (

    <select value={props.book.shelf} onChange={(event) => props.setUpdate(props.book, event.target.value)}>
        {Object.keys(props.allShelfs).map(function (key) {

            return <option
                key={key}
                value={key}
                disabled={key === 'moveto'}>{props.allShelfs[key]}</option>;

        })} />
                 </select>
);

export default ShelfOptions