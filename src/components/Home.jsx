import {React,useEffect,useState} from 'react'
import { Link } from 'react-router-dom'
import {Navbar} from "./Navbar"
import "./home.css"
import {HomeCard} from "./HomeCard"
import axios from"axios"
import {Corosual} from "./Corosual"

const Home = () => {
    const [track,setTrack]=useState([]);
    const  [currentPage,setCurrentPage]=useState(0);
    const [pagelimit] = useState(4);
    
    const getData=async (start,end,increase)=>{
        let res = await fetch(`http://localhost:3009/Album?_start=${start}&_limit=${end}`)
        // let res= await fetch(`http://localhost:2345/album?page=${start}&size=${end}`)
        let data= await res.json();
        // console.log(data)
        setTrack(data)
        setCurrentPage(currentPage+increase)
    }
    
    useEffect(()=>{
      getData(0,4,0);
      },[])
    //   console.log(track)
    
const renderPagination=()=>{
 
  if(track.length < 4 ) {
    return (
    <>
  
 <div className="pagination">
 <button type="button" class="btn btn-primary" onClick={()=>getData((currentPage)*4,(currentPage-1)*4,1)}>prev</button>
 <div class="btn btn-info">{(currentPage +1) +2 }</div>
 </div>
    </>
    )
  };


  if(currentPage ===0){
    return (
      <>
      <div className="pagination">
      <div class="btn btn-info">1</div>
      {/* <div><button onClick={()=>getData(4,4,1)}>Next</button></div> */}
      <button type="button" class="btn btn-primary"  onClick={()=>getData(4,4,1)}>Next</button>
      </div>
     
      </>
     
    )
  }
  else if(currentPage<pagelimit-1 && track.length===pagelimit) {

return (
  <>
    <div className="pagination">
    <button type="button" class="btn btn-primary" onClick={()=>getData((currentPage-1)*4,currentPage*4,-1)}>Prev</button>
       <div class="btn btn-info">{currentPage + 1 }</div>
       <button type="button" class="btn btn-primary"  onClick={()=>getData((currentPage+1)*4,(currentPage+2)*4,-1)}>Next</button>
    </div>
     
     
      </> 
)

  }
  else{
    return (
      <>
      <div className="pagination">
      <button type="button" class="btn btn-primary" onClick={()=>getData((currentPage-1)*4,currentPage*4,-1)}>prev</button>
      <div>{currentPage+1}</div>
      </div>
     
      </>
     
    )
  }

}
const getGenre=async ()=>{
      let  selected=document.querySelector("#genre").value//genre
      let yeardata = document.querySelector("#year").value//year
      if(selected==="" && yeardata ==""){
        
        return null
      }
        let res = await fetch(`http://localhost:3009/Album?genre=${selected}&Year=${yeardata}`)
        let data= await res.json();
        console.log(data)
        if(data.length=== 0){
          alert("No Data found!");
          window.location.href="/";
        }
        console.log(selected)
        setTrack(data)
    }
   
      const handleGetGenre=()=>
      {
        getGenre()
        }
   
  return (
        <> 
        <div className="select">
      
        <select id="genre" className="form-select" aria-label="Default select example" >
             <option value=""  >Select Genre</option>
             <option value="Hip-hop">Hip-Hop</option>
             <option value="Pop-Music">Pop-Music</option>
             <option value="Romantic">Romantic</option>
             <option value="Sufi">Sufi</option>
             <option value="pop">Pop-folk</option>
          </select>
          <select id="year" className="form-select" aria-label="Default select example">
             <option value=""  >Select Year</option>
             <option value="2019">2019</option>
             <option value="2018">2018</option>
             <option value="2020">2020</option>
             <option value="2009">2009</option>
             <option value="1988">1988</option>
          </select>
          <button type="button" className="btn btn-primary btnsize" onClick={handleGetGenre}>Get Result</button>
            
        </div>
        <Corosual/>
          <div className="container-main">
      <div className="container-main-2">
      {
        track.map(({id,
        coverphoto,Artist,
        MusicAlbumName,Year,
        genre,songs})=>{
    return(
        <Link to={{pathname:`/Album/${id}`,state:{artistData:track}}}>
           <HomeCard key={id} img={coverphoto} Artist={Artist} MusicAlbumName={MusicAlbumName}
            Year={Year} genre={genre} songs={songs.length}/>
         </Link>
    )})}
</div>  
</div>
<div style={{margin:"auto",padding:"15px",maxWidth:"200px" ,alignContent:"center"}}>{renderPagination()}</div>
</>
  
  )}
export {Home}
