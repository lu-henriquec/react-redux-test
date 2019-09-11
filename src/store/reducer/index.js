const INITIAL_STATE = {
  step: 0,
  dados: {}
};

export default function reducer(state = INITIAL_STATE, action) {
  return state;
}

// import { combineReducers } from 'redux';
// import reducers from 'caminho do reducer';
// export default combineReducers({
//   reducer1,
//   reducer2
// });


// no component
// export default connect(state => ({ step: state.nomedoreducer.step }))(Child);
