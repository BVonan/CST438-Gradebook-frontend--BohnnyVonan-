import './App.css';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Gradebook from './components/Gradebook';
import Assignment from './components/Assignment';
import NewAssignment from './components/NewAssignment';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Button from '@mui/material/Button';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AppBar position="static" color="default">
          <Toolbar>
            <Typography variant="h6" color="inherit">
              Gradebook
            </Typography>
            <Button color="inherit" component={Link} to="/new-assignment">
              New Assignment
            </Button>
          </Toolbar>
        </AppBar>
        <Switch>
          <Route exact path="/" component={Assignment} />
          <Route path="/gradebook" component={Gradebook} />
          <Route path="/new-assignment" component={NewAssignment} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
