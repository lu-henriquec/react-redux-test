import React from 'react';

import { FluxoConsumer } from '../Context';

export default function Launch() {
  return (
    <FluxoConsumer>
        {({ handleContextStep }) => (
            <div>
                <button onClick={() => handleContextStep(1)}>Iniciar</button>
            </div>
        )}
    </FluxoConsumer>
  );
}
