import {React,useEffect,useState} from 'react'
import { Link } from 'react-router-dom'
import {Navbar} from "./Navbar"
import "./home.css"
import {HomeCard} from "./HomeCard"
// import axios from"axios"

const Home = () => {
    const [track,setTrack]=useState([]);
    
    const getData=async ()=>{
        let res = await fetch("http://localhost:3009/Album")
        let data= await res.json();
        // console.log(data)
        setTrack(data)
    }
    
    useEffect(()=>{
      getData()
      },[])
    //   console.log(track)




return (
        <>
            <div>
            <Link to="/home"><Navbar/></Link>
            </div>
      <div className="container-main">
      <div className="container-main-2">
      {
track.map(({id,coverphoto,Artist,MusicAlbumName,Year,genre})=>{
    return(
        <Link to={{pathname:`/Album/${id}`,state:{artistData:track}}}>

          <HomeCard key={id} img={coverphoto} Artist={Artist} MusicAlbumName={MusicAlbumName}
            Year={Year} genre={genre}
        />
         </Link>
    )

})
      }
      
    </div>  
         </div>
     
      
      

    
      
        </>
    )
}
export {Home}
