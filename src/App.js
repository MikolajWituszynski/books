import BookCreate from './components/BookCreate'
import { useState } from 'react';
import axios from 'axios';
import BookList from './components/BookList'
function App() {
  const [books, setBooks] = useState([]);
  
  const createBook = async (title) => {
      
     const response = await axios.post('http://localhost:3000/books', {
        title: title
      });
      console.log(response.data)
      let updatedBooks = [...books, response]
      setBooks(updatedBooks)
      
  }
  
  const editBookById = (id, newTitle) => {
    let updatedBooks = books.map((book) => {
      if(book.id === id) {
        return {...books, title:newTitle};
      }
      return book;
    })
    setBooks(updatedBooks);
  }

  const deleteBookById = (id) => {
    let updatedBooks = books.filter((book) => {
      return book.id !== id;
    })
    setBooks(updatedBooks);
  }

  return (
    <div className="app">
      <h1>Reading List</h1>
      <BookList books={books} onDelete={deleteBookById} onEdit={editBookById}/>
      <BookCreate onCreate={createBook} />
      
     
    </div>
  );
}

export default App;
