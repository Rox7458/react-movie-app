import React, { createContext } from 'react'


export const MovieContextt=createContext()


const MovieContext = ({children}) => {
  return (
    <MovieContextt.Provider value={{}}>

      {children}
    </MovieContextt.Provider>
  )
}

export default MovieContext