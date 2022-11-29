import React from 'react'

function PreviewPost(props) {
   return (
      <div className='post'>
         <h2>{props.title}</h2>
         <p>{props.shortDescription}</p>
      </div>
   )
}

export default PreviewPost