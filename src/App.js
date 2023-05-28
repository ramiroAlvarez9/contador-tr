
import './App.css';
import { useState } from 'react'
import Contador from './components/Contador';
import { Stack, Box, Typography, Button } from '@mui/material';
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import EstadisticasBar from './components/EstadisticasBar';


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}


function App() {

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
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
          <Typography variant='h5'>Decretos</Typography>
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
            <Typography variant='h5'>Expedición de partidas</Typography>
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
          <Button variant='outlined' sx={{ marginTop: '5%' }}> Guardar Estadisticas</Button>

        </Stack>

      </TabPanel>


      <TabPanel value={value} index={1}>
        <EstadisticasBar />
      </TabPanel>



    </>
  );
}

export default App;
