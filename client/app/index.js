import React from 'react';
import { render } from 'react-dom';

import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'


import App from './components/App/App';
import NotFound from './components/App/NotFound';
import Home from './components/pages/Home';
import Login from "./components/pages/Login";
import Wrapper from "./components/Wrapper";
import Admin from "./components/pages/Admin";
import FishGallery from "./components/pages/FishGallery";
import Newsletter from "./components/pages/Newsletter";
import Inventory from "./components/pages/Inventory";
import Products from "./components/pages/Products";
import Counters from "./components/pages/Counters";
import Checkout from "./components/pages/Checkout";
import ProductTable from "./components/pages/ProductTable";
import Contact from "./components/pages/Contact";
render((
  <Router>
    <div>
    <App>

      <Switch>
        <Route exact path="/" component={Home}/>
		    <Route path="/home" component={Home}/>
        <Route exact path="/counters" component={Counters}/>
        <Route exact path="/products" component={Products} />
        <Route exact path="/inventory" component={Inventory} />
        <Route exact path="/newsletter" component={Newsletter} />
        <Route path="/fishgallery" component={FishGallery} />
        <Route exact path="/contact" component={Contact} />
        <Route path="/admin" component={Admin} />
        <Route path="/product_list" component={ProductTable} />
        <Route path="/login" component={Login} />
        <Route path="/checkout" component={Checkout} />
        <Route component={NotFound}/>
      </Switch>
      {/* <iframe src="https://www.botlibre.com/chat?&id=22771587&embedded=true&chatLog=true&facebookLogin=false&application=918375383508331366&bubble=true&menubar=true&chooseLanguage=true&sendImage=true&background=%23fff&prompt=You+say&send=&css=https://www.botlibre.com/css/chatlog.css&language=en" width="500" height="400" frameborder="0" scrolling="auto"></iframe> */}
    </App>
    </div>
  </Router>
), document.getElementById('app'));
