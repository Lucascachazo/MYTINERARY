import './App.js'
import "./styles/styles.css"
import {BrowserRouter , Route, Switch,Redirect} from "react-router-dom"
import Cities from "./components/Cities"
import  Conteiner  from "./components/Container"
import City from "./components/City"
import Login from './components/Login.js'
// import Footer from "./components/Footer"

function App() {
  return (  
<>
  <BrowserRouter>
    <Switch>
        <Route exact path = "/" component={Conteiner}/>
        <Route exact path = "/cities" component={Cities}/>
        <Route path = "/cities/:id" component={City}/>
        <Route path = "/login" component = {Login}/>

        <Redirect to = "/"/>
    </Switch>
  </BrowserRouter>
</> 
  );
}
export default App;


// /cities/=>:id (lo defino como una variable que referencie , puede ser cualquier otra ,
// la defino a criterio de lo que este llevando en esa ruta, la cual se va a guardar dentro de la propiedad match)