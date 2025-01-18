function SearchBar({ query, handleSearch }) {
  return (
    <div className='searchBar'>
        <input type="text" placeholder='Buscar productos...' value={query} onChange={handleSearch} className='searchBar__input' />
    </div>
  )
}

export default SearchBar