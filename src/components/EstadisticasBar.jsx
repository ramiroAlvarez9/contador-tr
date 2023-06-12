import React from 'react'
import { Stack } from '@mui/material'
import './estadisticasBar.scss';
import BarraDeConteo from './BarraDeConteo';

const EstadisticasBar = () => {
    
    return (
        <>
            <Stack 
                direction='column' 
                sx={{ 
                      border: 'solid 0.5px #2b2a38', 
                      marginTop: '3%', 
                      backgroundColor: '#2b2a38', 
                      borderRadius: '10px' 
                    }} 
                >
                <BarraDeConteo
                    nombreIcono={"ph:house-thin"}
                    elementoAContear="Domicilios"
                    tramitesPagos="domiciliosPagos"
                    tramitesImpagos="domiciliosImpagos"
                />
                <BarraDeConteo
                    nombreIcono={"raphael:paper"}
                    elementoAContear="Extravíos Públicos"
                    tramitesPagos="extraviosPagosPublicos"
                    tramitesImpagos="extraviosImpagosPublicos"
                />
                <BarraDeConteo
                    nombreIcono={"raphael:paper"}
                    elementoAContear="Extravíos Privados"
                    tramitesPagos="extraviosPagosPrivados"
                    tramitesImpagos="extraviosImpagosPrivados"
                />
                <BarraDeConteo
                    nombreIcono={"ph:fire"}
                    elementoAContear="Supervivencia sin médico"
                    tramitesPagos="supSinMedicoPago"
                    tramitesImpagos="supSinMedicoImpago"
                />
                <BarraDeConteo
                    nombreIcono={"fluent:doctor-12-regular"}
                    elementoAContear="Supervivencia con médico"
                    tramitesPagos="supConMedicoPago"
                    tramitesImpagos="supConMedicoImpago"
                />
                <BarraDeConteo
                    nombreIcono={"mdi:paper-outline"}
                    elementoAContear="Nacimientos"
                    tramitesPagos="nacimientosPagos"
                    tramitesImpagos="nacimientosImpagos"
                />
                <BarraDeConteo
                    nombreIcono={"mdi:paper-outline"}
                    elementoAContear="Matrimonios"
                    tramitesPagos="matrimoniosPagos"
                    tramitesImpagos="matrimoniosImpagos"
                />
                <BarraDeConteo
                    nombreIcono={"mdi:paper-outline"}
                    elementoAContear="Defunciones"
                    tramitesPagos="defuncionesPagos"
                    tramitesImpagos="defuncionesImpagos"
                />
            </Stack >
        </>
    );
};

export default EstadisticasBar;