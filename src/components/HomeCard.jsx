import {React} from "react";
import "./homecard.css"
const HomeCard=({img,Artist,MusicAlbumName,Year,genre,songs})=>{
return (
        <div>
                 <div className='Cards'>
                     <div className='Album-pic'>
                         <div>
                             <img src={img} alt="" />
                         </div>
                     </div>
                     <div className='card-details'>
                         <h4>Album Name:  {MusicAlbumName}</h4>
                         <p>Artist Name:  {Artist}</p>
                         <p>Release Year: {Year}</p>
                         <p>Genre: {genre}</p>
                         <p>No of songs:  {songs}</p>
                     </div>
                 </div>
        </div>

    )
}
export {HomeCard}