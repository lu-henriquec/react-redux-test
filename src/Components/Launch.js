import React from 'react';
import { connect } from 'react-redux';

import * as StepActions from '../store/actions/step';

function Launch({ dispatch }) {
  return (
    <div>
      <button onClick={() => dispatch(StepActions.handleContextStep(1))}>Iniciar</button>
    </div>
  );
}


export default connect(() => ({}))(Launch);
