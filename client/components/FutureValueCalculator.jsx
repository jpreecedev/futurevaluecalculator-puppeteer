import React from 'react';

import BasicDetails from './FutureValueCalculator/BasicDetails.jsx';
import Summary from './FutureValueCalculator/Summary.jsx';

const FutureValueCalculator = () => {

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1 className="display-3 text-center mt-3">Future Value</h1>
          <p className="text-center mb-3">
            What will your property be worth at the end of the mortgage term?
          </p>
        </div>
      </div>

      <BasicDetails />
      <Summary />

    </div>
  );
};


export default FutureValueCalculator;
