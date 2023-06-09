import { React, useState, useEffect } from 'react';
import { Footer } from './Footer';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';
import Divider from '@material-ui/core/Divider';
import { Button, Grid, Modal } from '@material-ui/core';
import PopUp from './PopUpProveedores';
import { getAllProveedores } from '../services/proveedores';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles(() => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: 'theme.palette.action.hover,',
    },
  },
}))(TableRow);

const StyledTableHead = withStyles(() => ({
  root: {
    '&:nth-of-type(odd)': {
      background: 'linear-gradient(to left , #9BC76D, #80B05C ,#5AA123)',
    },
  },
}))(TableRow);

export const Proveedores = () => {
  const $ = useStyles();
  const [proveedores, setProveedores] = useState(null);
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    async function fetchProveedores() {
      const getFunction = getAllProveedores;
      try {
        const proveedores = await getFunction();
        setProveedores(proveedores);
      } catch (err) {
        console.log('ERROR FETCH API [proveedores]: ' + err);
      }
    }
    fetchProveedores();
  }, []);

  const loadingRendering = () => {
    return <Alert severity="info">Cargando...</Alert>;
  };
  const rendering = () => {
    return (
      <>
        <TableContainer className={$.container} component={Paper}>
          <Table aria-label="customized table">
            <StyledTableHead>
              <StyledTableCell className={$.textColor}>Nombre</StyledTableCell>
              <StyledTableCell align="left" className={$.textColor}>
                Rubro
              </StyledTableCell>
              <StyledTableCell align="left" className={$.textColor}>
                Teléfono
              </StyledTableCell>
              <StyledTableCell align="left" className={$.textColor}>
                E-Mail
              </StyledTableCell>
              <StyledTableCell align="left" className={$.textColor}>
                CUIT
              </StyledTableCell>
            </StyledTableHead>
            <TableBody>
              {proveedores.data.map((proveedores) => (
                <StyledTableRow key={proveedores.id}>
                  <StyledTableCell scope="row">
                    {proveedores.nombre}
                  </StyledTableCell>
                  <StyledTableCell align="left">
                    {proveedores.rubro}
                  </StyledTableCell>
                  <StyledTableCell align="left">
                    {proveedores.telefono}
                  </StyledTableCell>
                  <StyledTableCell align="left">
                    {proveedores.mail}
                  </StyledTableCell>
                  <StyledTableCell align="left">
                    {proveedores.cuit}
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </>
    );
  };

  return (
    <>
      <Grid className={$.header}>
        <h1 className={$.title}>Proveedores</h1>
        <Button variant="contained" className={$.button} onClick={handleOpen}>
          Agregar proveedor
        </Button>
        <Modal open={open} onClose={handleClose}>
          <PopUp state={setOpen} />
        </Modal>
      </Grid>
      <Divider />
      <br />
      {proveedores ? rendering() : loadingRendering()}
      <Footer />
    </>
  );
};

const useStyles = makeStyles({
  container: {
    display: 'flex',
    width: '98%',
  },
  textColor: {
    color: 'white',
    fontWeight: 'bold',
  },
  textColorHistoric: {
    fontWeight: 'bold',
  },
  tableCellContent: {
    maxWidth: '10vw',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '98%',
  },
  button: {
    height: '2rem',
    marginTop: '1.5rem',
  },
});
