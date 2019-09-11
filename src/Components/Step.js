import React from 'react';
import { connect } from 'react-redux';

import * as StepActions from '../store/actions/step';

const Step = ({ step, dispatch }) => {
    return (
      <div>
          <button onClick={() => dispatch(StepActions.handleContextStep(step-1))}>Prev Step</button>
          {step}
          <button onClick={() => dispatch(StepActions.handleContextStep(step+1))}>Next Step</button>
      </div>
    );
};

export default connect(state => ({ step: state.step }))(Step);
