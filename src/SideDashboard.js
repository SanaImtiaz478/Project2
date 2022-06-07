import React from 'react'
import './Movie.css'

export default function SideDashboard() {
  return (
    <>
    <div className="colm1">
    <div className='body'>
    
      
     <p>Select the type of Movies you want to see:</p>
     <br></br><br></br>
     <ul>
       <button className='button'>Action</button>
       <br></br>
       <button className='button'>Adventure</button>
       <br></br>
       <button className='button'>Horror</button>
       <br></br>
       <button className='button'>SciFi</button>
       <br></br>
       <button className='button'>Drama</button>
       <br></br>
       <button className='button'>Anime</button>
       </ul>


    </div>
    </div>
    </>
  )
}
