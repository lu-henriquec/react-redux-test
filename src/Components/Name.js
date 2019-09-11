import React from 'react';
import Step from './Step';

import { connect } from 'react-redux';

import * as DadosActions from '../store/actions/dados';

const Name = ({ dados, dispatch }) => {
    return (
        <>
          <div>
              <label htmlFor="name">Escreva o nome:</label>
              <input
                  type="text"
                  name="name"
                  id="name"
                  defaultValue={dados.name}
                  onChange={(e) => dispatch(DadosActions.handleContextData({ name: e.target.value}))}
              />
          </div>
          <p>Nome: {dados.name}</p>


          <hr/>
          <Step />
        </>
    );
};

export default connect(state => ({ dados: state.dados }))(Name);
