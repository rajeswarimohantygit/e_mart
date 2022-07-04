import './App.css';
import Home from './component/Home';
import Navbar from './component/Navbar';
import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import Products from './component/Products';
import Product from './component/Product';
import About from './component/About';
import Contact from './component/Contact';

function App() {
  return (
    <>
    <Navbar/>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/products" component={Products}/>
      <Route exact path="/products/:id" component={Product}/>
      <Route exact path="/about" component={About}/>
      <Route exact path="/contact"component={Contact}/>
  
      <Redirect to="/"/>
    </Switch>
    </>
  )
}

export default App