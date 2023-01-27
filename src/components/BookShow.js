import React from 'react'
import BookEdit from './BookEdit';
import {useState} from 'react';
const BooksShow = ({book, onDelete,onEdit}) => {
  const [showEdit, setShowEdit] = useState(false);
const handleClickDelete = () => {
  onDelete(book.id);
}

const handleClickEdit = () => {
setShowEdit(!showEdit);
}

  let content = <h3>{book.title}</h3>;
  if(showEdit) {
    content = <BookEdit setShowEdit={setShowEdit} onEdit={onEdit} book={book}/>
  }

  return (
    <div>
    <div className="book-show">
      <img src=""/>
     <div>{content}</div>
      <div className='actions'>
        <button className="edit" onClick={handleClickEdit}>Edit</button>
        <button className="delete" onClick={handleClickDelete}>Delete</button>
      </div>
    </div>
   
    </div>
  )
}

export default BooksShow