
import './App.css';
import Nav from './components/nav/index.tsx';
import Main from './Pages/main/index.tsx';
import AboutPage from './Pages/about-us-page/index.tsx';
import Work from './components/our-work/index.tsx';
import Contact from './components/contact-us/index.tsx';
import Footer from './components/footer/index.tsx';
import ServicesPage from './Pages/services-page/index.tsx';
import { langContext } from "./helper/context.js"
import { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"
function App() {
  const [lang, setLang] = useState(true)
  return (
    <Router>
      <div className="App">
        <langContext.Provider value={{ lang, setLang }}>
          <Nav />
          <Switch>
            <Route exact path="/" >
              <Main />
            </Route>
            <Route path="/about" >
              <AboutPage />
            </Route>
            <Route path="/services" >
              <ServicesPage />
            </Route>
            <Route path="/work" >
              <Work />
            </Route>
            <Route path="/contact" >
              <Contact />
            </Route>
          </Switch>
          <Footer />
        </langContext.Provider>
      </div>
    </Router>
  );
}

export default App;
