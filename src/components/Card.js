import React from 'react';
const Card =({name,email,id})=>{
    return(
<div className='bg-light-red dib pa3 ma3 br3 grow bw2 shadow-5'>
<img alt='robot' src={`https://robohash.org/${id}josef`}/>
  <div>
   <h2>{name}</h2>
    <p>{email}</p>
  </div>
</div>
    )
}
export default Card;