import React from 'react'
import { Link } from 'react-router-dom'
import ListBooks from './common/components/ListBooks'

const Shelfs = (props) => (
    
    <div className="app">
                <div className="list-books">
                    <div className="list-books-title">
                        <h1>MyReads</h1>
                    </div>
                    {Object.keys(props.objShelfs).filter(shelf => shelf !== "none" && shelf !== "moveto").map(key => (

                        <div key={key} className="list-books-content">
                            <div>
                                <div className="bookshelf">
                                    <h2 className="bookshelf-title">{props.objShelfs[key]}</h2>
                                    <div className="bookshelf-books">
                                        <ListBooks books={props.books}
                                            shelf={key}
                                            setUpdate={props.setUpdate}
                                            allShelfs={props.objShelfs}
                                            bookIdUpdate={props.bookIdUpdate}
                                            filterRelatedBooks={props.filterRelatedBooks}
                                            classPopUp={props.classPopUp}
                                            relatedBooks={props.relatedBooks}
                                            closePopUp={props.closePopUp}
                                            relatedBookId={props.relatedBookId} />
                                    </div>
                                </div>
                            </div>
                        </div>

                    ))}
                    <Link
                        to='/search'
                        className='open-search'>
                    </Link>
                </div>
            </div >
  );


export default Shelfs