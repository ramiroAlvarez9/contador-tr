import { createGlobalState } from "react-hooks-global-state";

const { setGlobalState, useGlobalState } = createGlobalState({
  domiciliosPagos: 0,
  domiciliosImpagos: 0,
  extraviosPagosPublicos: 0,
  extraviosImpagosPublicos: 0,
  extraviosPagosPrivados: 0,
  extraviosImpagosPrivados: 0,
  supConMedicoPago: 0,
  supConMedicoPago: 0,
  supSinMedicoPago : 0,
  supSinMedicoImpago : 0,
  
});

export { useGlobalState, setGlobalState };