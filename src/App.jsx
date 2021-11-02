import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import NavBar from './components/NavBar';
import { DatosGenerales } from './components/DatosGenerales';
import { MisProyectos } from './components/MisProyectos';
import { Presupuestos } from './components/Presupuestos';
import { Compras } from './components/Compras';


export default function App() {
  const $ = useStyles();
  return (
    <Container maxWidth="xl" className={$.root}>
      <Router>
        <NavBar/>
        <div className={$.container}>
          <Header />
          <div className={$.content}>
            <Switch>
              <Route path="/" exact component={MisProyectos} />
              <Route path="/proyectos" exact component={DatosGenerales} />
              <Route path="/proyectos/presupuestos" exact component={Presupuestos} />
              <Route path="/proyectos/compras" exact component={Compras} />
              
            </Switch>
          </div>
        </div>
      </Router>
    </Container>
  );
}

const useStyles = makeStyles(() => ({
  root: {
    marginTop: '1vh',
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    height: '100%',
  },
  content: {
    paddingLeft: '2%',
    width: '80vw',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    marginTop: '3vh',
  },
}));
