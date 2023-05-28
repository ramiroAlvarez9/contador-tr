import React, { useEffect } from 'react';
import { Icon } from "@iconify/react";
import { Box, Typography } from '@mui/material';
import { useState } from 'react';

const BarraDeConteo = ({ nombreIcono, elementoAContear, cantidadTramites, tramitesImpagos, tramitesPagos }) => {

    const [cantTramitesContados, setCantTramitesContados] = useState(0);

    const cantidadDeTramites = () => {
        setCantTramitesContados
        (
            
            parseInt(localStorage.getItem(`${tramitesPagos}`))  
                +
            parseInt(localStorage.getItem(`${tramitesImpagos}`))
            
        )};

    useEffect(() => cantidadDeTramites(), []);

    return (
        <>

            <Box sx={{ display: 'flex', justifyContent: 'left', alignItems: 'center', height: '70px', }} >
                <Icon
                    icon={nombreIcono}
                    color="#fafafa"
                    width="30"
                    height="30"
                />
                <Box sx={{ width: '80 %', marginLeft: '10px' }} >
                    <Typography sx={{
                        color: '#FFFFFF',
                        fontSize: '10px',
                        marginLeft: '2px',
                    }}
                        variant="span"
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