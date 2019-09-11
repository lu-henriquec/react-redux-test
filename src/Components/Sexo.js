import React from 'react';
import Step from './Step';

import { FluxoConsumer } from '../Context';

const Sexo = props => {
    return (
        <FluxoConsumer>
            {({ dados, handleContextData }) => (
                <div>
                    <label htmlFor="M" className={`input ${dados.sexo === 'M' ? 'ativo' : ''}`}>
                        <input
                            name='sexo'
                            value='M'
                            type='radio'
                            id='M'
                            onChange={(e) => handleContextData({ sexo: e.target.value})}
                        />
                        Masculino
                    </label>
                    <label htmlFor="F" className={`input ${dados.sexo === 'F' ? 'ativo' : ''}`}>
                        <input
                            name='sexo'
                            value='F'
                            type='radio'
                            id='F'
                            onChange={(e) => handleContextData({ sexo: e.target.value})}
                        />
                        Feminino
                    </label>
                    <p>Sexo: {dados.sexo}</p>

                    <hr/>
                    <Step />
                </div>
            )}
        </FluxoConsumer>
    );
};

export default Sexo;

