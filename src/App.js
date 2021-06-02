import React from 'react'
import Home1 from './Home1'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Registernew from './Registernew'
import Logged from './Logged'
import Login from './Login'
import Productdetail from './components/Productdetail'
import Productdetail1 from './components/Productdetail1'
import Productdetail2 from './components/Productdetail2'
import Productdetail3 from './components/Productdetail3'
import Cart from './components/Cart'


const App = () => {
  return (
    <>
    <Router>
      <Switch>
      
      <Route exact path = '/' component={Home1}/>
      <Route exact path = '/Registernew' component={Registernew}/>
      <Route exact path = '/Logged' component={Logged}/>
      <Route exact path = '/Login' component={Login}/>
      <Route exact path = '/Productdetail' component={Productdetail}/>
      <Route exact path = '/Productdetail1' component={Productdetail1}/>
      <Route exact path = '/Productdetail2' component={Productdetail2}/>
      <Route exact path = '/Productdetail3' component={Productdetail3}/>
      <Route exact path = '/Cart' component={Cart}/>


      
      </Switch>
    </Router>
    </>
  )
}

export default App
