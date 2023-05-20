import { createGlobalState } from "react-hooks-global-state";

const { setGlobalState, useGlobalState } = createGlobalState({
  domiciliosPagos : 0,
  domiciliosImpagos: 0,
  extraviosPagos : 0,
  extraviosImpagos: 0,
  
});

export { useGlobalState, setGlobalState };