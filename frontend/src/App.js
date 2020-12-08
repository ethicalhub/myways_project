import React from 'react'
import {BrowserRouter as Router , Route, Switch, Redirect} from 'react-router-dom'
import Header from './components/Header'
import HomeScreen from './screens/HomeScreen'
import LoginScreen from './screens/LoginScreen'
import SignupScreen from './screens/SignupScreen'


const App = () => {
  return (
    <Router>
    <Header />
    <Switch>
      <Route path='/' component={HomeScreen} exact />
      <Route path='/signup' component={SignupScreen} />
      <Route path='/login' component={LoginScreen} />

      <Redirect to='/' />
    </Switch>
      
    </Router>
  )
}

export default App
