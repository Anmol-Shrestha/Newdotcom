import React from 'react'
import axios from 'axios';
import Testbanner from '../component/Testbanner';

import { useState, useEffect } from 'react';

export default function Test() {
  const [Stories, setStories] = useState([]);

  useEffect(()=>{
    axios.get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=${process.env.REACT_APP_NY_API_KEY}`)
    .then(res => {
      console.log(res.data.response.docs);
      setStories(res.data.response.docs);
    
    });
  
  },[])
  return (
    <>
    {Stories.map(({abstract, pub_date: pd, byline:{original}, lead_paragraph}, i)=>(

<Testbanner Abstract={abstract} Published={pd} Original={original} Lead={lead_paragraph} id={i}/>

))}
    </>
  )
}
