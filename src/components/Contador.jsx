import React, { useState, useEffect } from 'react';
import { Paper, Box, IconButton, Stack } from '@mui/material';
import RemoveCircleOutlineRoundedIcon from '@mui/icons-material/RemoveCircleOutlineRounded';
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import { useGlobalState, setGlobalState } from "../globalState";


function Contador({ bgcolor, titulo, nombreConteoDeTramitePagos, nombreConteoDeTramiteImpagos }) {

    const [contadorPagas, setContadorPagas] = useState(0);
    const [contadorImpagas, setContadorImpagas] = useState(0);

    const decrementarPagas = () => contadorPagas > 0 ? setContadorPagas(contadorPagas - 1) : null;
    const incrementarPagas = () => setContadorPagas(contadorPagas + 1);

    const decrementarImpagas = () => contadorImpagas > 0 ? setContadorImpagas(contadorImpagas - 1) : null;
    const incrementarImpagas = () => setContadorImpagas(contadorImpagas + 1);

    if (nombreConteoDeTramitePagos !== undefined && nombreConteoDeTramiteImpagos !== undefined) {
        setGlobalState(`${nombreConteoDeTramitePagos}`, contadorPagas);
        setGlobalState(`${nombreConteoDeTramiteImpagos}`, contadorImpagas);
    }



    return (

        //contenedor general
        <Paper
            sx={{
                width: '70vw',
                height: '15vh',
                backgroundColor: bgcolor,
                color: '#FFFFFF',
                marginBottom: '3%',
                borderRadius: '15px',
            }}

            elevation={10}
        >
            {/*-------------------------------------*/}

            {/*Contenedor Card */}
            <Box sx={{
                width: '100%',
                fontSize: '50%'
            }}>
                {/*------------------------------- */}

                {/*Contenedor titulo */}
                <Box sx=
                    {{
                        height: '2.5vh',
                        display: 'flex', justifyContent: 'left',
                        alignItems: 'end',
                    }}
                >

                    <h1>{titulo}</h1>

                </Box>
                {/*---------------------------- */}

                <Stack
                    sx={{

                    }}

                >
                    <Box sx={{}}>

                        <IconButton
                            onClick={decrementarPagas}
                            color='warning'
                            variant='outlined'
                            size='small'>
                            <RemoveCircleOutlineRoundedIcon />

                        </IconButton>

                        <input
                            type="text"
                            value={contadorPagas+ "           pagas"}
                            readOnly
                            placeholder="Pagas"
                            style={{
                                width: '30%',
                                outline: 'none',
                                borderRadius: '10px',
                                borderStyle: 'none'
                            }}
                        />


                        <IconButton
                            onClick={incrementarPagas}
                            color='warning'
                            variant='outlined'
                            size='small'
                        >
                            <AddCircleOutlineRoundedIcon />
                        </IconButton>
                    </Box>

                    <Box >

                        <IconButton
                            onClick={decrementarImpagas}
                            color='warning'
                            variant='contained'
                            size='small'>
                            <RemoveCircleOutlineRoundedIcon />
                        </IconButton>

                        <input type="text" value={contadorImpagas} readOnly style={{

                            width: '10%',
                            borderRadius: '50%',
                            outline: 'none',
                            borderRadius: '10px',
                            borderStyle: 'none'
                        }}
                        />
                        <IconButton
                            onClick={incrementarImpagas}
                            color='warning'
                            variant='contained'
                            size='small'>
                            <AddCircleOutlineRoundedIcon />

                        </IconButton>
                    </Box>
                </Stack>

            </Box>

        </Paper>
    );
}

export default Contador;