import './App.js'
import Header from "./components/Header"
import "./styles/styles.css"
import {BrowserRouter , Route, Switch} from "react-router-dom"
import Cities from "./components/Cities"




function App() {
  return (
<>
<BrowserRouter>

<Header/>
  <Switch>
       <Route path="/cities" component={Cities}/>

  </Switch>


</BrowserRouter>

</>
  
  );
}

export default App;
