import { useState } from 'react';
import TabPanel from './components/TabPanel';
import Contador from './components/Contador';
import { Stack, Box, Typography, Button } from '@mui/material';
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import EstadisticasBar from './components/EstadisticasBar';
import { CSVLink } from "react-csv";



function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function App() {

  const [data, setData] = useState([[]]);
  const [value, setValue] = useState(0);

  const decretosClavesDeStorage = ['domiciliosPagos', 'domiciliosImpagos','supSinMedicoPago', 'supSinMedicoImpago', 'supConMedicoPago', 'supConMedicoImpago','extraviosPagosPrivados', 'extraviosImpagosPrivados','extraviosPagosPublicos', 'extraviosImpagosPublicos'];
  const partidasClavesStorage   = ['nacimientosPagos', 'nacimientosImpagos', 'matrimoniosPagos', 'matrimoniosImpagos', 'defuncionesPagos', 'defuncionesImpagos'];

  function generarEstadisticasDiarias(decretosClavesDeStorage, partidasClavesStorage) {

    let decretosDiarios = [];
    let partidasDiarias = [];

    decretosClavesDeStorage.forEach
      (
        element => {

          if (localStorage.getItem(element) === null) {
            decretosDiarios.push('0')
          } else {
            decretosDiarios.push(localStorage.getItem(element));
          }
        });

      partidasClavesStorage.forEach
      (
        element => {

          if (localStorage.getItem(element) === null) {
            partidasDiarias.push('0')
          } else {
            partidasDiarias.push(localStorage.getItem(element));
          }
        });

    setData([decretosClavesDeStorage, decretosDiarios, ['',''],partidasClavesStorage, partidasDiarias])
  }

  function handleChange (event, newValue) 
  {
    setValue(newValue);
  };


  return (
    <>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>

        
        {/* Navegacion */}


        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="CONTEO" {...a11yProps(0)} />
          <Tab label="VISOR DE ESTADISTICAS" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0} >




        <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: '2%', marginTop: '2%' }} >
          <Typography variant='h2'>Decretos</Typography>
        </Box>

        < Stack direction='column' sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', }} >

          {/* Domicilios */}
          <Contador
            titulo='Declaraciones de domicilio'
            nombreConteoDeTramitePagos="domiciliosPagos"
            nombreConteoDeTramiteImpagos="domiciliosImpagos"
            bgcolor=" #0e79c9 "
          />

          {/* Extravios Publicos */}
          <Contador
            titulo='Noticias de extravío público'
            nombreConteoDeTramitePagos="extraviosPagosPublicos"
            nombreConteoDeTramiteImpagos="extraviosImpagosPublicos"
            bgcolor="#254493"
          />
          {/* Extravios Privados */}
          <Contador
            titulo='Noticias de extravío privado'
            nombreConteoDeTramitePagos="extraviosPagosPrivados"
            nombreConteoDeTramiteImpagos="extraviosImpagosPrivados"
            bgcolor="#254493"
          />
          {/* SUp con medico */}
          <Contador
            titulo='Supervivencia con medico'
            nombreConteoDeTramitePagos="supConMedicoPago"
            nombreConteoDeTramiteImpagos="supConMedicoImpago"
            bgcolor="#2b2a38"
          />
          {/* Sup sin medico */}
          <Contador
            titulo='Supervivencia sin medico'
            nombreConteoDeTramitePagos="supSinMedicoPago"
            nombreConteoDeTramiteImpagos="supSinMedicoImpago"
            bgcolor="#2b2a38"
          />
          {/* Titulo Expedicion partidas */}
          <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: '2%', marginTop: '2%' }} >
            <Typography variant='h3'>Expedición de partidas</Typography>
          </Box>
          {/* Nacimientos */}
          <Contador
            titulo='Nacimientos'
            nombreConteoDeTramitePagos="nacimientosPagos"
            nombreConteoDeTramiteImpagos="nacimientosImpagos"
            bgcolor=" #0e79c9 "
          />
          {/* Matrimonios */}
          <Contador
            titulo='Matrimonios'
            nombreConteoDeTramitePagos="matrimoniosPagos"
            nombreConteoDeTramiteImpagos="matrimoniosImpagos"
            bgcolor=" #FF4901 "
          />
          {/* Defunciones */}
          <Contador
            titulo='Defunciones'
            nombreConteoDeTramitePagos="defuncionesPagos"
            nombreConteoDeTramiteImpagos="defuncionesImpagos"
            bgcolor="#2b2a38"
          />





          <CSVLink
            onClick={ () => generarEstadisticasDiarias(decretosClavesDeStorage, partidasClavesStorage)}
            data={data}
            filename={"estadisticas-del-dia.csv"}
            target="_blank"
            style={{
              display: 'inline-block',
              backgroundColor: '#2196f3',
              color: '#FFF',
              padding: '12px 24px',
              borderRadius: '10px',
              textDecoration: 'none',
              boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)',
              transition: 'background-color 0.3s ease',
              fontFamily: 'Roboto, sans-serif',
              fontSize: '14px',
              fontWeight: 'bold',
              marginTop: '5%',
            }}
          >
            GENERAR ESTADISTICAS DEL DIA

          </CSVLink>
        


        </Stack>


      </TabPanel>

      <TabPanel value={value} index={1}>
        <EstadisticasBar />
      </TabPanel>
    </>
  );
}

export default App;
