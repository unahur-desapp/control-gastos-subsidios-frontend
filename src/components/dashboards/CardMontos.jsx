import { React } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { montoDisponible, nivelDeEjecucion } from '../../utils/presupuestos'
import { formatPrice } from '../../utils/validaciones';
import {
  LocalAtm,
  BarChart,
} from '@material-ui/icons';

export default function CardMontos({ totalGastos, totalPresupuesto }) {
  const $ = useStyles();

  const monto = montoDisponible(totalPresupuesto, totalGastos)
  const ejecucion = nivelDeEjecucion(totalPresupuesto, totalGastos);


  return (
    <div className={$.cardsContainer}>
      <Card className={$.root}>
        <CardContent className={$.content}>
          <Typography
            variant="h5"
            component="h2"
            className={$.typography}
          >
            <LocalAtm className={$.prepTotal} /> Presupuesto total:
          </Typography>
          <span
            variant="h5"
            className={$.typography}
          >
            {formatPrice(totalPresupuesto)}
          </span>
        </CardContent>
      </Card >
      <Card className={$.root1}>
        <CardContent className={$.content}>
          <Typography
            variant="h5"
            component="h2"
            className={$.typography}
          >

            <LocalAtm className={$.prepTotal} /> Monto disponible:
          </Typography>
          <span
            variant="h5"
            className={$.typography}
          >
            {formatPrice(monto)}
          </span>
        </CardContent>
      </Card >
      <Card className={$.root2}>
        <CardContent className={$.content}>
          <Typography
            variant="body2"
            component="p"
            className={$.typography}
          >
            <BarChart className={$.nivelEjec} />  Nivel de ejecución:
          </Typography>
          <span
            variant="h5"
            className={$.typography}
          >
            {ejecucion + " %"}
          </span>
        </CardContent>
      </Card >
    </div>
  );

}



const useStyles = makeStyles({
  root: {
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'space-between',
    margin: '0.5rem',
    background: '#06d6a0',
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
    borderRadius: '8px',
  },
  root1: {
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: '0.5rem',
    background: '#ef476f',
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
    borderRadius: '8px',
  },
  root2: {
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'space-between',
    margin: '0.5rem',
    background: '#118ab2',
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
    borderRadius: '8px',
  },
  content: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  typography: {
    fontFamily: 'Cabin',
    fontWeight: 'bold',
    fontSize: '1.5rem',
    color: '#ffffff',
  },
  prepTotal: {
    fontSize: '1.5rem',
    color: '#ffffff',
    verticalAlign: "text-bottom"

  },
  nivelEjec: {
    fontSize: '1.5rem',
    color: '#ffffff',
    verticalAlign: "text-bottom"
  },
  cardsContainer: {
    display: "flex",
    flexDirection: "column",
  }

});
