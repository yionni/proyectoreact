import React from 'react'
import { useNavigate } from 'react-router-dom';
export const SearchBar = () => {

  // const navigate = useNavigate();

  let inputValue;

  const handleInputChange = (event) => {
    inputValue = event.target.value;
  }

  const submitSearch = () =>{
    if(inputValue){
      // navigate(`/items?search=${inputValue}`)
      console.log(inputValue)
    }
  }

  return (
    <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Buscar" aria-label="Search" onChange={handleInputChange}/>
          <button className="btn btn-primary btn-lg" onClick={submitSearch}>
            Buscar
          </button>
        </form>
  )
}
