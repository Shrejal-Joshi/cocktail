
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import Home from './components/Home';
import NavBar from './components/NavBar';
import Categories from './components/Categories';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import SingleDrink from './components/SingleDrink';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <Router>
      <NavBar/>
    
      <Switch>
        
            <Route exact path='/' component={Home}/>
            <Route exact path = '/categories'  component={Categories}/>
            <Route exact path = '/aboutus' component={AboutUs}/>
            <Route exact path ='/contactus' component = {ContactUs}/>
            <Route exact path ='/singledrink' component = {SingleDrink}/>
            {/* <Ridirect to='/' component={Home}/> */}

      </Switch>
      
      </Router>

      <Footer/>
      
     
    </>
  );
}

export default App;
