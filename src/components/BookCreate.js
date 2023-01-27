import React from 'react'
import { useState } from 'react';
const Bookcreate = ({onCreate}) => {
    const [title, setTitle] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault()
        onCreate(title);
        setTitle('');


    }
    const handleChange = (event) => {
        setTitle(event.target.value);
    }
  return (
    <div className="book-create">
        <h3>Add a Book</h3>
        <form onSubmit={handleSubmit}>
            <label>Title</label>
            <input className = "input" value ={title} onChange={handleChange}></input>
            <button className="button">Create</button>
        </form>
    </div>
  )
}

export default Bookcreate