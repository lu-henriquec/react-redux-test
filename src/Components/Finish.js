import React from 'react';
import { connect } from 'react-redux';

import * as StepActions from '../store/actions/step';

// function Finish({ dados, toggleStep }) {
function Finish({ dados, dispatch }) {
  return (
    <div>
        <p>Nome: {dados.name}</p>
        <p>Sexo: {dados.sexo}</p>
        <hr/>
        <button onClick={() => dispatch(StepActions.handleContextStep(0))}>Reiniciar</button>
        {/* <button onClick={() => toggleStep(0)}>Reiniciar</button> */}
    </div>
  );
}


export default connect(state => ({ dados: state.dados }))(Finish);

// const mapStateToProps = state => ({
//   dados: state.dados
// });

// const mapDispatchToProps = dispatch => ({
//   toggleStep: step => dispatch(StepActions.handleContextStep(step))
// });
// export default connect(mapStateToProps, mapDispatchToProps)(Finish);
