
import './App.css';
import Contador from './components/Contador';
import { Stack } from '@mui/material';
import { useGlobalState, setGlobalState } from "./globalState";



function App() {  

  
  return (
    <>

      < Stack direction= 'column' >
        {/* Domicilios */}
        <Contador
          titulo ='Declaraciones juradas de domicilio'
          nombreConteoDeTramitePagos   = "domiciliosPagos"
          nombreConteoDeTramiteImpagos = "domiciliosImpagos" 
          bgcolor  = "#0e79c9"
        />

        {/* Extravios Publicos */}
       <Contador
            titulo='Noticias de extravio publico'
            nombreConteoDeTramitePagos   = "extraviosPagosPublicos"
            nombreConteoDeTramiteImpagos = "extraviosImpagosPublicos"
            bgcolor = "#254493" 
        />

        {/* Extravios Privados */}
        <Contador
            titulo='Noticias de extravio privado'
            nombreConteoDeTramitePagos   = "extraviosPagosPrivados"
            nombreConteoDeTramiteImpagos = "extraviosImpagosPrivados"
            bgcolor = "#254493" 
        />
        <Contador
            titulo='Supervivencia con medico'
            nombreConteoDeTramitePagos   = "supConMedicoPago"
            nombreConteoDeTramiteImpagos = "supConMedicoPago" 
            bgcolor = "#2b2a38"

            
        />
        <Contador
            titulo='Supervivencia sin medico'
            nombreConteoDeTramitePagos   = "supSinMedicoPago"
            nombreConteoDeTramiteImpagos = "supSinMedicoImpago" 
            bgcolor = "#2b2a38"
        />


      </Stack>
    </>
  );
}

export default App;
