import {
  faArrowTrendUp,
  faFilm,
  faSearch,
  faTv,
  faUser,
  faXmark,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Container } from '@mui/material'
import React, { useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import request from 'src/api/request'
import useDebounce from 'src/hooks/useDebounce'
import './SearchBar.scss'
function SearchBar({ setSearching }) {
  const navigate = useNavigate()
  const inputRef = useRef()
  const [searchResults, setSearchResults] = useState([])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState()
  const debounce = useDebounce(input, 200)

  const handleSubmit = e => {
    e.preventDefault()
    if (input.length > 0) {
      navigate(`search/movie/${input}`)
      setSearching(false)
    }
  }

  const handleInput = e => {
    const value = e.target.value
    if (value.startsWith(' ')) {
      setInput(value.trim())
      return
    }
    setInput(value)
  }
  useEffect(() => {
    inputRef.current.focus()
    const getTrending = async () => {
      try {
        setLoading(true)
        setError()
        const result = await request.getSearchResults('multi', debounce)
        setSearchResults(result.results)
      } catch (error) {
        setError(error)
      }
      setLoading(false)
    }
    if (debounce) {
      getTrending()
    }
  }, [debounce])
  useEffect(() => {
    if (!input) {
      setSearchResults([])
    }
  }, [input])
  return (
    <div className='search_wrapper'>
      <div className='search_form_wrapper'>
        <Container>
          <form onSubmit={handleSubmit} className='search_form'>
            <div className='search_form_icon'>
              <FontAwesomeIcon icon={faSearch} />
            </div>
            <input
              ref={inputRef}
              value={input}
              onChange={handleInput}
              type='text'
              placeholder='Search for a movie, tv show, person...'
            />
            <div className='search_form_status'>
              {debounce && !loading && (
                <div
                  onClick={() => {
                    setInput('')
                    inputRef.current.focus()
                  }}
                  className='clear_icon'
                >
                  <FontAwesomeIcon icon={faXmark} />
                </div>
              )}
              {loading && <div className='loading_icon'></div>}
            </div>
          </form>
        </Container>
      </div>
      {searchResults.length > 0 && input && (
        <div className='search_list'>
          <div className='search_item'>
            <Container>
              <div className='title'>
                <FontAwesomeIcon icon={faArrowTrendUp} />
                <h4 className='text'>Trending</h4>
              </div>
            </Container>
          </div>
          {searchResults.map(searchResult => {
            return (
              <div key={searchResult.id} className='search_item'>
                <Container>
                  <div className='result'>
                    <FontAwesomeIcon
                      icon={
                        searchResult.media_type === 'person'
                          ? faUser
                          : searchResult.media_type === 'tv'
                          ? faTv
                          : searchResult.media_type === 'movie'
                          ? faFilm
                          : faSearch
                      }
                    />
                    <Link
                      onClick={() => setSearching(false)}
                      to={`/search/${searchResult.media_type}/${
                        searchResult.name || searchResult.title
                      }`}
                    >
                      <p className='text'>
                        {searchResult.name || searchResult.title}
                      </p>
                    </Link>
                  </div>
                </Container>
              </div>
            )
          })}
        </div>
      )}
      {error && (
        <Container>
          <h3>{error.message}. Try again...</h3>
        </Container>
      )}
    </div>
  )
}

export default SearchBar
