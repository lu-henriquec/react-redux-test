import React from 'react';

const Context = React.createContext();

class Parent extends React.Component {
    state = { 
        step: 1,
        dados: {
            sexo: 'M'
        }
    };
    handleContextStep = step => this.setState({ step });
    handleContextData = data => {
        const defaultData = this.state.dados;
        console.log(data);

        this.setState({ dados: {...data, ...defaultData} });
    };
    render() {
        const contextValue = {
            step: this.state.step,
            handleContextStep: this.handleContextStep,
            dados: this.state.dados,
            handleContextData: this.handleContextData,
        };


        return (
            <Context.Provider value={contextValue}>
                <Child/>
            </Context.Provider>
        );
    }
}


export default Parent;

const Child = props => <div><GrandChild/></div>;

const GrandChild = props => {
    const obj = {
        name: 'Lucas',
        age: 25
    };
    return (
        <Context.Consumer>
            {({ handleContextStep, step }) => (
                <div>
                    <button onClick={() => handleContextStep(step+1)}>Change</button>
                    <Child2 text={step} />
                    <Child3 />
                </div>
            )}
        </Context.Consumer>
    );
};

const Child2 = props => <p>{props.text}</p>;

const Child3 = props => {
    return (
        <Context.Consumer>
            {({ dados, handleContextData }) => (
                <div>
                    <input type="text" name="name" id="name" defaultValue={dados.name} onChange={(e) => handleContextData({ name: e.target.value})} />
                </div>
            )}
        </Context.Consumer>
    );
};