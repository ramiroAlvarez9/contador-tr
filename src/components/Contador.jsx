import React, { useState, useEffect } from 'react';
import { Paper, Box, Stack } from '@mui/material';

function Contador({ bgcolor, titulo, nombreConteoDeTramitePagos, nombreConteoDeTramiteImpagos }) {
    
    const [cantPagas, setCantPagas]     = useState('0');
    const [cantImpagas, setCantImpagas] = useState('0');


    //------------localStorage ------------- //
    const cantTramitesPagas   = e => localStorage.setItem(`${nombreConteoDeTramitePagos}`, e.target.value);
    const cantTramitesImpagas = e => localStorage.setItem(`${nombreConteoDeTramiteImpagos}`, e.target.value);

    const guardarCantidadDePagas   = () => localStorage.getItem(`${nombreConteoDeTramitePagos}`) != null ? setCantPagas(localStorage.getItem(`${nombreConteoDeTramitePagos}`)) : setCantPagas('0');
    const guardarCantidadDeImpagas = () => localStorage.getItem(`${nombreConteoDeTramiteImpagos}`) != null ? setCantImpagas(localStorage.getItem(`${nombreConteoDeTramiteImpagos}`)) : setCantImpagas('0');

    
    useEffect(() => 
    {    
        guardarCantidadDePagas(); 
        guardarCantidadDeImpagas(); 
    
    });


    return (

        //contenedor general
        <Paper
            sx= {{
                width: '80vw',
                height: '12vh',
                backgroundColor: bgcolor,
                color: '#FFFFFF',
                marginBottom: '2%',
                minHeight: '40px',
                '@media screen and (min-width: 1200px)': {
                    width: '60vw',
                },
            }}
            elevation={5}
        >
            {/*------------------------------- */}
            {/*Contenedor titulo */}
            <Box sx=
                {{
                    width: '100%',
                    height: '50%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    fontSize: '3vw',


                    '@media screen and (min-width: 1200px)': {
                        fontSize: '1.5vw',
                    },
                }}
            >
                <h1>{titulo}</h1>
            </Box>

            {/*---------------------------- */}

            {/*Contenedor del contenedor -- se usa para ubicar al contenedor hijo al centro.*/}
            <Stack sx= {{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',

                height: '30%',
            }}
            >
                {/*Contenedor de boton de incrementar y decrementar*/}
                <Stack
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: '80%',
                        height: '100%',

                    }}

                >
                    {/*Contador con boton incrementar y decrementar PAGAS */}
                    <Box sx={{
                        height: '100%'
                    }}>
                        <input type="number"
                            min={JSON.stringify(parseInt(cantPagas))}
                            step="1"
                            placeholder={cantPagas}
                            style=
                            {{
                                display: 'inherit',
                                textAlign: 'center',
                                width: '50%',
                                height: '100%',
                                padding: 0,
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
                            height: '100%',
                        }}
                    >
                        <input type="number"
                            className='inputDecrementIncrement'
                            min={JSON.stringify(parseInt(cantImpagas))}
                            step="1"
                            placeholder={cantImpagas}
                            style= 
                            {{
                                display: 'inherit',
                                textAlign: 'center',
                                width: '50%',
                                padding: 0,
                                height: '100%',
                                outline: 'none',
                                borderStyle: 'none',
                                borderRadius: '2px',
                            }}
                            onChange={cantTramitesImpagas}
                        />
                    </div>
                    {/*---------------------------- */}
                </Stack>
                {/*---------------------------- */}
            </Stack>
            {/*---------------------------- */}
        </Paper>
    );
}

export default Contador;