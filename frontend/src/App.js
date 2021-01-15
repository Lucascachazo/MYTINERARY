import './App.js'
import Header from "./components/Header"
import "./styles/styles.css"
import {BrowserRouter , Route} from "react-router-dom"
import Usuario from './components/Usuario.js'




function App() {
  return (
<>
<BrowserRouter>

<Route exact path="/" components={Usuario}/>
  
</BrowserRouter>
<Header/>
</>
  
  );
}

export default App;
