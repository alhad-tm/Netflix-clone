import React from 'react'
import { useEffect } from 'react'
import "./Details.css"
import axios from "../../axios"
import {imageUrl ,API_KEY} from '../../Constants/Constants'
import { useState } from 'react'

function Details() {
 const[desc,setDesc]=useState([])
    useEffect(()=>{
        axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
            // console.log(response.data);
            setDesc(response.data.results)
        })
       })
       return (
        // <div  style={{backgroundImage:`url(${desc? imageUrl + desc.backdrop_path: "" })`}} className='frame'></div>
   <div  className="details">
    <div className="container">
        <div className="card">
           
        </div>
        <div className="frame">
       
          {desc.map((obj2)=>{
            return(
                <img src={`${imageUrl+obj2.backdrop_path}`}alt="" style={{height:"100px", width:"100px"}}  />
                
            )
          })}
        </div>
    </div>
   </div>
  )
}

export default Details