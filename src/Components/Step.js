import React from 'react';

import { FluxoConsumer } from '../Context';

const Step = props => {
    return (
        <FluxoConsumer>
            {({ handleContextStep, step }) => (
                <div>
                    <button onClick={() => handleContextStep(step-1)}>Prev Step</button>
                    {step}
                    <button onClick={() => handleContextStep(step+1)}>Next Step</button>
                </div>
            )}
        </FluxoConsumer>
    );
};


export default Step;