import React from 'react';
import { connect } from 'react-redux';

import Name from './Name';
import Sexo from './Sexo';
import Launch from './Launch';
import Finish from './Finish';

const Child = ({ step }) => {
    switch (step) {
        case 1:
            return <Name />;
        case 2:
            return <Sexo />;
        case 3:
            return <Finish />;
        default:
            return <Launch />;
    }
};

export default connect(state => ({ step: state.step }))(Child);