import React from 'react'

const Card = ({image,language,watchers,forks}) => {
  return (
    <div style={{textAlign:'center',border:'1px solid grey',padding:'10px',borderRadius:'20px'}}>
        <img style={{width:'60%',margin:'auto'}} src={image} alt=""></img>
        <h4>{language}</h4>
        <div style={{display:'flex',justifyContent:'space-evenly'}}>
            <p>{watchers}</p>
            <p>{forks}</p>
        </div>
    </div>
  )
}

export default Card