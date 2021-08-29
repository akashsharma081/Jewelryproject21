import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Link , NaviLink , Switch , Route} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Blog from './components/Blog';
import Article from './components/Article';
import Cart from './components/Cart';
import Collection from './components/Collection';
import Contact from './components/Contact';
import ForgetPassword from './components/ForgetPassword';
import Login from './components/Login';
import Product from './components/Product';
import Register from './components/Register';
import Search from './components/Search';
import Video from './components/Video';
function App() {
  return (
      <Router>
          <div className="App">
            <Switch>  
                <Route  path='/Home' exact component={Home} />
                <Route  path='/About'  component={About} />
                <Route  path='/Article'  component={Article} />
                <Route  path='/Blog'  component={Blog} />
                <Route  path='/Cart'  component={Cart} />
                <Route  path='/Collection'  component={Collection} />
                <Route  path='/Contact'  component={Contact} />
                <Route  path='/ForgetPassword'  component={ForgetPassword} />
                <Route  path='/Login'  component={Login} />
                <Route  path='/Product'  component={Product} />
                <Route  path='/Register'  component={Register}/>
                <Route  path='/Search'  component={Search}/>
                <Route  path='/Video'  component={Video}/>
            </Switch>    
         </div>
      </Router>
  );
}

export default App;
