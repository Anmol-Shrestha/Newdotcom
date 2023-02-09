import React from 'react'


export default function Testbanner(props) {

  
  return (

    <>

<div className="card text-center container mb-5">
  <div className="card-header">
    Featured
  </div>
  <div className="card-body">
    <h5 className="card-title display-5 lh-lg">Special title treatment</h5>
    <div className="lh-lg">{props.Lead}</div>
    <p className="card-text lead lh-lg">{props.Abstract}</p>
    {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
  </div>
  <div className="card-footer text-muted">
    {props.Published}
  </div>
</div>

    
    {/* key={props.id} */}
    
     
    
    </>
  )
}
