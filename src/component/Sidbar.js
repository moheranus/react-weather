import React from 'react'
import "./Sidbar.css"

import { MdOutlineYoutubeSearchedFor } from "react-icons/md";


export default function Sidbar() {
  return (
    <div className='container'>
    <div className='side-container'>
      <input type="text" placeholder="search city" />
        <MdOutlineYoutubeSearchedFor className='search-icon' /> 
        
      </div>
      </div>
  )
}
