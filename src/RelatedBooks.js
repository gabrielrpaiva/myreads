import React from 'react'
import ListBooks from './common/components/ListBooks'
import If from './If'


const RelatedBooks = (props) => (
    
    <div className="bookshelf">
                <h2 className="bookshelf-title">Related books you may like</h2>
                <If test={typeof (props.relatedBooks) !== "undefined" &&  props.relatedBooks.length > 0}>

                    <div className="bookshelf-books">
                        <ListBooks books={props.relatedBooks}
                            shelf="allShelfs"
                            setUpdate={props.setUpdate}
                            allShelfs={props.objShelfs}
                            bookIdUpdate={props.bookIdUpdate} />
                    </div>

                </If>
                <If test={typeof (props.relatedBooks) === "undefined" || props.relatedBooks.length === 0}>

                    <h3 className="bookshelf-title">Unfortunately, we did not find suggestions for this book</h3>

                </If>
            </div>
  ); 

 

export default RelatedBooks