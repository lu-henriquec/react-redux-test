import React from 'react';

const ContextFluxo = React.createContext({});

export const FluxoProvider = ContextFluxo.Provider;
export const FluxoConsumer = ContextFluxo.Consumer;
export default ContextFluxo;