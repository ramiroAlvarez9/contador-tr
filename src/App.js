
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
          titulo ='DECLARACIONES JURADAS DE DOMICILIO '
          nombreConteoDeTramitePagos   = "domiciliosPagos"
          nombreConteoDeTramiteImpagos = "domiciliosImpagos" 
        />

        {/* Extravios */}
         <Contador
          titulo='NOTICIAS DE EXTRAVIO PUBLICO'
          
        
        />



      </Stack>
    </>
  );
}

export default App;
