
import './App.css';
import Nav from './components/nav/index.tsx';
import Main from './Pages/main/index.tsx';
import AboutPage from './Pages/about-us-page/index.tsx';
import Contact from './components/contact-us/index.tsx';
import Footer from './components/footer/index.tsx';
import ServicesPage from './Pages/services-page/index.tsx';
import { langContext } from "./helper/context.js"
import WorkPage from './Pages/work-page/index.tsx';
import LoginPage from './Pages/login/index.tsx';
import Company from './Pages/company/index.tsx';
import { useState } from 'react';
import { QueryClient, QueryClientProvider } from "react-query"
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"
function App() {
  const [lang, setLang] = useState(true)
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
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
                <WorkPage />
              </Route>
              <Route path="/contact" >
                <Contact />
              </Route>
              <Route path="/login">
                <LoginPage />
              </Route>
              <Route path="/company/:id" children={<Company/>} >
                <Company />
              </Route>
            </Switch>
            <Footer />
          </langContext.Provider>
        </div>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
