import {Navbar} from './components/'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from "./pages/Home"
import {GlobalStyle} from './globalStyles'

function App() {
  return (
    <BrowserRouter>
        <GlobalStyle/>
        <Navbar/>
    <Switch>
      <Route path='/' component={Home}></Route>
    </Switch>

    </BrowserRouter>
    
  );
}

export default App;
