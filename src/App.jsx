import React from 'react'
import Header from './Components/Header';
import Home from './Pages/Home/Home';
import CV from './Pages/CV';
import ShowOffPage from './Pages/ShowOffPage';
import Contact from './Pages/Contact';
import Footer from './Components/Footer';
import './App.css';
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";




function App() {


  return (
    <BrowserRouter>
      <div className="App">

        <Header />
        <Switch>
          <Route path="/ShowOffPage">
            <ShowOffPage />
          </Route>
          <Route path="/CV">
            <CV />
          </Route>
          <Route path="/Contact">
            <Contact />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch> 
        <Footer />

      </div>
    </BrowserRouter>
  )
}

export default App
