import React, { useEffect, useState } from 'react'
import { useDispatch} from 'react-redux';
import { fetchTracks } from '../store/trackSlice';
import '../css/style.css'
import search from '../icons/search.svg'


function Search() {
  
  const [value, setValue] = useState();
  const dispatch = useDispatch();

  const handleChange = (e) => setValue(e.target.value);
  const handleOnClick = () => dispatch(fetchTracks(value));

  useEffect(() => {
    dispatch(fetchTracks());
  },[dispatch]);

  return (
    <div className='input-container'>
      <section className="input-group mb-3">
        <input 
        type="text" 
        className="form-control" 
        placeholder="Search" 
        aria-label="Search" 
        aria-describedby="button-addon2"
        value={value}
        onChange={handleChange}
        />
        <button className="btn btn-outline-secondary" type="button" id="button-addon2" onClick={handleOnClick}>
          <img className="bi bi-search" src={search} alt="search"></img>
        </button>
      </section>
    </div>
  )
}

export default Search

