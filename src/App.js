import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import SearchPage from './components/SearchPage';
import { fetchAsyncAnime } from './redux/AnSlice';

function App() {
  const [text, setText] = useState('');
  const dispatch = useDispatch();
  const submitHandler = (e)=>{
    e.preventDefault();
    console.log(text);
    dispatch(fetchAsyncAnime(`&q=${text}`));
  }
  return (
    <div className="App">
      <div className='searchbar'>
      <h1>Search Anime Characters</h1>
        <form onSubmit={submitHandler}>
          <input type="text" placeholder='search your favourite Anime Characters' onChange={(e)=>{setText(e.target.value)}} className='inputBox'/>
          <button type='submit' className='inputButton'>Search</button>
        </form>
      </div>
      <div className="totalResult">
      </div>
      <SearchPage/>
    </div>
  );
}

export default App;
