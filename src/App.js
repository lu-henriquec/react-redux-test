import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';

import Child from './Components/Child';

export class App extends Component {
  state = {
    step: 0,
    dados: {}
  };

  handleContextStep = step => this.setState({ step });
  handleContextData = data => {
      const defaultData = this.state.dados;
      console.log(data);

      this.setState({ dados: {...defaultData, ...data} });
  };

  render() {
      const contextValue = {
          step: this.state.step,
          handleContextStep: this.handleContextStep,
          dados: this.state.dados,
          handleContextData: this.handleContextData,
      };


      return (
          <div className="App">
            <Provider store={store}>
              <Child/>
            </Provider>
          </div>
      );
  }
}

export default App;
