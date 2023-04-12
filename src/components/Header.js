import React from 'react'; 
import Navbar from './Navbar';

export default function Header({ currentPage, handlePageChange }) {
  return (
    <header className="App-header">
        <h1 className='h1'> Shannya Niveyro </h1>
        <Navbar currentPage={currentPage} handlePageChange={handlePageChange}/>
    </header>
  )
}
