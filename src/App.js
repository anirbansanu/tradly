import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import Header from './components/user/header/Header';
import Home from './pages/user/Home';
import ProductDetails from './pages/user/ProductDetails';


function App() {
  return (
    <>
    <BrowserRouter>
      <Header/>
      <div className='container-fluid'>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/home" component={Home}/> 
            <Route path="/product/:id" component={ProductDetails}/> 
          </Switch>
      </div>
    </BrowserRouter>
    </>
  );
}

export default App;
