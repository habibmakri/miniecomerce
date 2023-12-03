import React from 'react'

export default function SearchBar() {
  return (
    <div>
      <input placeholder="Search..."/>
      <label>
        <input type='checkbox'/>
        Only show the prodeuts in stock
      </label>
    </div>
  )
}
