import React ,{useEffect,useState}from 'react'
import './rowpost.css'
import Youtube from "react-youtube"
import {imageUrl ,API_KEY} from '../../Constants/Constants'
import axios from '../../axios'
function Rowpost(props) {
  const[movies,setMovies]= useState([])
  const[urlId,setUrlId]=useState('')
  useEffect(()=>{
     axios.get(props.url).then(response=>{
      console.log(response.data);
      setMovies(response.data.results)
     }).catch(err=>{
      // alert('network error')
     })
  },[])
  const opts={
    height: '390',
    width:'100%',
    playerVars:{
      autoplay:0,
    },
  };
  const handleMovie=(id)=>{
    console.log(id)
    axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response=>{
      console.log(response.data.results);
      if(response.data.results.length!==0){
        setUrlId(response.data.results[13])
      }
        else{
          console.log('Trailer not available or Empty array');
        }
      
   })
  }
   
  return (
    <div className='row'>
        <h2>{props.title}</h2>
        <div className='posters'>
          {movies.map((obj)=>
                  <img onClick={()=>handleMovie(obj.id)} className={props.isSmall? "smallPoster":"poster"} src={`${imageUrl+obj.backdrop_path}`}  alt=""/>
          )}
            
            
        </div>
     { urlId &&    <Youtube opts={opts} videoId={urlId.key}/> }
    </div>
  )
}

export default Rowpost