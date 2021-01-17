import './App.js'
import "./styles/styles.css"
import {BrowserRouter , Route, Switch} from "react-router-dom"
import Cities from "./components/Cities"
import  ContenedorGral  from "./components/ContenedorGral"
import Nav from "./components/Nav"





function App() {
  return (  
<>
<BrowserRouter>
  <Nav/>  
{/* <ContenedorGral/> */}

  <Switch>
    
      <Route exact path="/" component={ContenedorGral}/>
    
       <Route path="/cities" component={Cities}/>

  </Switch>


</BrowserRouter>


</>
  
  );
}

export default App;
