import React from 'react';
import { Provider } from 'react-redux';
import store from './store';

import Child from './Components/Child';

export default function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Child/>
      </Provider>
    </div>
  );
}
