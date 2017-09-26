import React from 'react'
import { Link } from 'react-router-dom'
import ListBooks from './common/components/ListBooks'



class Shelfs extends React.Component {

    render() {

        /* Get the variables from the props */
        const { books, setUpdate, objShelfs, bookIdUpdate, filterRelatedBooks,
            classPopUp, relatedBooks, closePopUp, relatedBookId } = this.props

        /* Get only the books there are in a shelf */    
        const showingShelfs = Object.keys(objShelfs)
            .filter(shelf => shelf !== "none" && shelf !== "moveto")
            


        return (
            <div className="app">
                <div className="list-books">
                    <div className="list-books-title">
                        <h1>MyReads</h1>
                    </div>
                    {showingShelfs.map(key => (

                        <div key={key} className="list-books-content">
                            <div>
                                <div className="bookshelf">
                                    <h2 className="bookshelf-title">{objShelfs[key]}</h2>
                                    <div className="bookshelf-books">
                                        <ListBooks books={books}
                                            shelf={key}
                                            setUpdate={setUpdate}
                                            allShelfs={objShelfs}
                                            bookIdUpdate={bookIdUpdate}
                                            filterRelatedBooks={filterRelatedBooks}
                                            classPopUp={classPopUp}
                                            relatedBooks={relatedBooks}
                                            closePopUp={closePopUp}
                                            relatedBookId={relatedBookId} />
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
        )



    }
}

export default Shelfs