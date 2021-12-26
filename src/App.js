import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Topnav from './components/global/Topnav';
import Landing from './routes/Landing';
import Register from './routes/Register';

function App() {
  return (
      <Router>
        <Topnav />

        <section className='container'>
          <Switch>
            <Route path='/' exact component={Landing} />
            <Route path='/register' exact component={Register} />
          </Switch>
        </section>
      </Router>
  );
}

export default App;
