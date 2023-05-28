import React, { useState, useEffect } from 'react';
import { Paper, Box, IconButton, Stack } from '@mui/material';
import { useGlobalState, setGlobalState } from "../globalState";
import './contador.css';

function Contador({ bgcolor, titulo, nombreConteoDeTramitePagos, nombreConteoDeTramiteImpagos }) {
    const [cantPagas, setCantPagas] = useState('0');
    const [cantImpagas, setCantImpagas] = useState('0');

    const cantTramitesPagas = e => localStorage.setItem(`${nombreConteoDeTramitePagos}`, e.target.value);
    const cantTramitesImpagas = e => localStorage.setItem(`${nombreConteoDeTramiteImpagos}`, e.target.value);

    const guardarCantidadDePagas = () => {

        localStorage.getItem(`${nombreConteoDeTramitePagos}`) != null ?

            setCantPagas(localStorage.getItem(`${nombreConteoDeTramitePagos}`))
            :
            setCantPagas('0');

    }

    const guardarCantidadDeImpagas = () => { 
        
        localStorage.getItem(`${nombreConteoDeTramiteImpagos}`) != null ?
        
        setCantImpagas(localStorage.getItem(`${nombreConteoDeTramiteImpagos}`) )  
            :
        setCantImpagas('0'); 
    


    };

    useEffect(() => {
        guardarCantidadDePagas();
        guardarCantidadDeImpagas();

    }, []);




    return (

        //contenedor general
        <Paper
            sx={{
                width: '50vw',
                height: '6vh',
                backgroundColor: bgcolor,
                color: '#FFFFFF',
                marginBottom: '2%',
                minHeight: '40px',

            }}

            elevation={5}
        >
            {/*-------------------------------------*/}

            {/*Contenedor Card */}
            <Box sx={{

                width: '100%',
                fontSize: '50%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
            }}>
                {/*------------------------------- */}

                {/*Contenedor titulo */}
                <Box sx=
                    {{
                        height: '2.5vh',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <h1>{titulo}</h1>
                </Box>

                {/*---------------------------- */}

                <Stack
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: '80%',


                    }}

                >
                    {/*Contador con boton incrementar y decrementar PAGAS */}
                    <Box  >
                        <input type="number"
                            min={JSON.stringify(parseInt(cantPagas) + 1)}
                            step="1"
                            placeholder={cantPagas}
                            style=
                            {{
                                display: 'inherit',
                                textAlign: 'center',
                                width: '50%',
                                height: '75%',
                                outline: 'none',
                                borderRadius: '2px',
                                borderStyle: 'none',

                            }}
                            onChange={cantTramitesPagas}
                        />


                    </Box>
                    {/*---------------------------- */}

                    {/*Contador con boton incrementar y decrementar IMPAGAS */}
                    <div
                        style={{
                            display: 'inherit',
                            justifyContent: 'flex-end',
                            alignItems: 'flex-end',
                        }}
                    >
                        <input type="number"
                            className='inputDecrementIncrement'
                            min={JSON.stringify(parseInt(cantImpagas) + 1)}
                            step="1"
                            placeholder={cantImpagas}
                            style=
                            {{
                                display: 'inherit',
                                textAlign: 'center',
                                width: '50%',
                                height: '75%',
                                outline: 'none',
                                borderStyle: 'none',
                                borderRadius: '2px',

                            }}
                            onChange={cantTramitesImpagas}
                        />

                    </div>
                    {/*---------------------------- */}

                </Stack>

            </Box>

        </Paper>
    );
}

export default Contador;