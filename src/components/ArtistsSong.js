import {React,useEffect,useState} from "react";
import "./artistsong.css"
import {Navbar} from "./Navbar"
    
 const ArtistSong=(props)=>{
  const str = +props.location.pathname[props.location.pathname.length-1]
  console.log(str)
  const data =props.location.state.artistData
  return(
        <>
        <Navbar/>
        <div className="conatiner-main-artist">{
           data.map((e)=>{
      if(str==e.id){
          return (
              <>
              <p  className="musicAlbumName">{e.MusicAlbumName}</p>
              <img className ="coverphotoName" src={e.coverphoto}/>
              <div className="songName"><p>Songs</p><p>Duration</p>{e.songs.map((song)=>{
                          return (
                              <>
                              
                              <div>{song.songsname}</div>
                              <div>{song.duration}</div>
                              </>
                             )
                             })
                             }
                             </div>
              </>
          )

      }

  }) 
        }
         
        </div>
        </>  )
}


    export {ArtistSong}
