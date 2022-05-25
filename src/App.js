import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './Components/Pages/Home.js'
import Documento from './Components/Pages/NovoDoc.js'
import Ver from './Components/Pages/Ficheiros.js'

import Container from './Components/Layout/Container.js';
import Navbar from './Components/Layout/Navbar.js'
import Footer from './Components/Layout/Footer.js'
function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
      <Container customClass="min-height">
      <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/Ficheiros">
          <Ver/>
        </Route>
        <Route path="/NovoDoc">
          <Documento/>
        </Route>
        </Container>
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
