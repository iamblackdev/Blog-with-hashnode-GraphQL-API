import { useState } from 'react';
import './styles.css'
import Spin from '../spin/spin'


const Search = ({ search, error, spin }) => {
    let [searchValue, setSearchValue] = useState('')


  return (
    
    <div className="search-input">
      <form onSubmit={ (e) => search(e, searchValue)}>
        <input type="text" value={searchValue} onChange={(e)=> setSearchValue(e.target.value)} placeholder="Search Username (Hashnode)" />
        <button className="btn">
          <i className="fa fa-search"></i>
        </button>
      </form>
      <div className="spin-wrapper">
        {spin && <Spin />}
      </div>
      <small style={{color: 'red'}}>{ error }</small>
    </div>
   );
}
 
export default Search;