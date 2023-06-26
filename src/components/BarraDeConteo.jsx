import React, { useEffect } from 'react';
import { Icon } from "@iconify/react";
import { Box, Typography } from '@mui/material';
import { useState } from 'react';

const BarraDeConteo = ({ nombreIcono, elementoAContear, tramitesImpagos, tramitesPagos }) => {

    const [cantTramitesContados, setCantTramitesContados] = useState(0);

    const cantidadDeTramites = () => {

        if (localStorage.getItem(`${tramitesPagos}`) === null && localStorage.getItem(`${tramitesImpagos}`) === null) {
            setCantTramitesContados(0);
        }
        else if (localStorage.getItem(`${tramitesPagos}`) !== null && localStorage.getItem(`${tramitesImpagos}`) !== null) {
            setCantTramitesContados(
                parseInt(localStorage.getItem(`${tramitesPagos}`))
                +
                parseInt(localStorage.getItem(`${tramitesImpagos}`))
            )
        }
        else if (localStorage.getItem(`${tramitesPagos}`) !== null) {
            setCantTramitesContados(parseInt(localStorage.getItem(`${tramitesPagos}`)));
        }
        else if (localStorage.getItem(`${tramitesImpagos}`) !== null) {
            setCantTramitesContados(parseInt(localStorage.getItem(`${tramitesImpagos}`)));
        }
        else {
            setCantTramitesContados(0);
        }
    };

    useEffect(() => cantidadDeTramites());

    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'left',
                    alignItems: 'center',
                    height: '15vh',
                }}
            >
                <Icon
                    icon={nombreIcono}
                    color="#fafafa"
                    width="30"
                    height="30"
                />
                <Box sx={{ width: '80 %', marginLeft: '10px' }} >
                    <Typography sx={{
                        color: '#FFFFFF',
                        marginLeft: '2px',
                    }}
                        variant="h8"
                    >
                        {elementoAContear}: {cantTramitesContados}

                    </Typography>

                    <Box sx={{
                        borderRadius: '10px',
                        border: 'solid 1px orange',
                        width: 7 * cantTramitesContados,
                        marginLeft: '3px',
                    }}
                    >
                    </Box>
                </Box>

            </Box>


        </>
    );
}

export default BarraDeConteo;