import './App.js'
import "./styles/styles.css"
import {BrowserRouter , Route, Switch,Redirect} from "react-router-dom"
import Cities from "./components/Cities"
import  Conteiner  from "./components/Container"
// import Nav from "./components/Nav"
import City from "./components/City"

function App() {
  return (  
<>
<BrowserRouter>
  {/* <Nav/>   */}
  <Switch>
      <Route exact path="/" component={Conteiner}/>
      <Route exact path="/cities" component={Cities}/>
      <Route path="/cities/:id" component={City}/>
      <Redirect to="/"/>
  </Switch>
</BrowserRouter>
</> 
  );
}

export default App;


// /cities/=>:id (lo defino como una variable que referencie , puede ser cualquier otra ,
// la defino a criterio de lo que este llevando en esa ruta, la cual se va a guardar dentro de la propiedad match)