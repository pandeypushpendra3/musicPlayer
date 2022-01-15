import {React} from "react";
import "./homecard.css"
const HomeCard=({img,Artist,MusicAlbumName,Year,genre})=>{
return (
        <div>
                 <div className='Cards'>
                     <div className='Album-pic'>
                         <div>
                             <img src={img} alt="" />
                         </div>
                     </div>
                     <div className='card-details'>
                         <h4>{MusicAlbumName}</h4>
                         <p>{Artist}</p>
                         <p>{Year}</p>
                         <p>{genre}</p>
                     </div>
                 </div>
        </div>

    )
}
export {HomeCard}