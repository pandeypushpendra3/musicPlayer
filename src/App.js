import logo from './logo.svg';
import './App.css';
import {Navbar} from './components/Navbar';
import {Switch,Route} from 'react-router-dom'
import {Home} from "./components/Home"
import {Login} from './components/Login'
import {ArtistSong} from "./components/ArtistsSong"

function App() {
  return (
    <div className="App">
    <Switch>
<Route exact path="/"><Navbar/>
</Route>
<Route  path="/home"><Home/></Route>
<Route path="/login"><Login/></Route>
<Route path="/Album/:id" component={ArtistSong} ></Route>
    </Switch>
    
    </div>
  );
}

export default App;

