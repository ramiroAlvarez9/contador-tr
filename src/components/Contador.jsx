import React, { useState, useEffect } from 'react';
import { Paper, Box, IconButton, Stack } from '@mui/material';
import RemoveCircleOutlineRoundedIcon from '@mui/icons-material/RemoveCircleOutlineRounded';
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import { useGlobalState, setGlobalState } from "../globalState";


function Contador({ titulo, nombreConteoDeTramitePagos, nombreConteoDeTramiteImpagos }) {

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
        <Paper
            sx={{
                width: '90%',
                height: '50%',
                backgroundColor: '#1976d2',
                color: '#FFFFFF',
                marginBottom: '3%'
            }}

            elevation={4}
        >

            <Box sx={{
                width: '100%',
                fontSize: '80%'
            }}>

                <Box
                    sx={{
                        marginBottom: '3%',
                        marginLeft: '1%',
                        paddingTop: '2%'
                    }}

                >
                    <h1>

                        {titulo}

                    </h1>
                </Box>

                <Stack
                    sx={{
                        marginTop: '5%',
                        marginLeft: '3%',
                        borderTop: 'solid 1px white'
                    }}

                >
                    <Box sx={{ marginTop: '3%' }}>
                        <div>PAGAS: </div>
                        <IconButton
                            onClick={decrementarPagas}
                            color='warning'
                            variant='outlined'
                            size='small'>
                            <RemoveCircleOutlineRoundedIcon />

                        </IconButton>

                        <input type="text" value={contadorPagas} readOnly style={{ width: '20%', outline: 'none' }} />

                        <IconButton
                            onClick={incrementarPagas}
                            color='warning'
                            variant='outlined'
                            size='small'>
                            <AddCircleOutlineRoundedIcon />
                        </IconButton>
                    </Box>

                    <Box >
                        <div>IMPAGAS: </div>
                        <IconButton
                            onClick={decrementarImpagas}
                            color='warning'
                            variant='contained'
                            size='small'>
                            <RemoveCircleOutlineRoundedIcon />
                        </IconButton>

                        <input type="text" value={contadorImpagas} readOnly style={{ width: '20%', outline: 'none' }} />

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