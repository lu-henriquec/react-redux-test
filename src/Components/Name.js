import React from 'react';
import Step from './Step';

import { FluxoConsumer } from '../Context';

const Name = props => {
    return (
        <FluxoConsumer>
            {({ dados, handleContextData }) => (
                <>
                    <div>
                        <label htmlFor="name">Escreva o nome:</label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            defaultValue={dados.name}
                            onChange={(e) => handleContextData({ name: e.target.value})}
                        />
                    </div>
                    <p>Nome: {dados.name}</p>


                    <hr/>
                    <Step />
                </>
            )}
        </FluxoConsumer>
    );
};

export default Name;