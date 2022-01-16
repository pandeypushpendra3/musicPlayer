import {React,useState,useEffect} from 'react'
import {Link} from "react-router-dom"
import axios from "axios";
// import {FetchData} from "./FetchData"
import "./Navbar.css"


const Navbar = () => {
    const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setError] = useState(false);
  const [users, setUsers] = useState([]);

  useEffect(()=>{
    setIsLoading(true);
    setError(false);
    axios.get(`http://localhost:3009/Album?q=${query}`)
    .then((res) => {
    //   setUsers(res.data)
      console.log(res.data);
    })
    .catch((err) => {
      setError(true);
    });
  },[])
  const handleSearch = () => {
    setIsLoading(true);
    setError(false);
    axios.get(`http://localhost:3009/Album?q=${query}`)
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => {
        setError(true);
      })
      .finally(()=>{
          setIsLoading(false)

      })
  };
console.log(query)
    return (<>
        <div className="navbar ">
        <div><Link to="/"><img src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/music-logo-design-template-2d750dbc5c38729c8004e69d16745448_screen.jpg?ts=1604495304" alt="pMusic"/></Link></div>
        <div className="search">
            <input type="text" placeholder="Search for Great Artist" value={query}
          onChange={(e) => setQuery(e.target.value)}/>
            <button onClick={handleSearch}>Search</button>
        </div>
        <div className="navbar-home">
        <Link to="/">
        <button>
           Home
        </button>
        </Link>
        <Link to="/login">
        <button >Login
        </button>
        </Link>
        </div>
        <div className="search">
        {users.map((item) => (
          <div key={item.id} >{item.MusicAlbumName}</div>
        ))}
      </div>
         
        </div>
        {/* <Link to="/home">
        <button>Listener</button> 
        </Link> */}
        
        </>
    )
}
export {Navbar}
