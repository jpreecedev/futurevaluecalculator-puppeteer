import React from 'react';
import { connect } from 'react-redux';

import TextField from '../Shared/TextField.jsx';

const Summary = props => {
  const {
    mortgageLength,
    futureValue,
    expectedAnnualIncrease
  } = props;

  return (
    <section className="summary">
      <div className="row">
        <div className="col">
          <h2>Results</h2>
          <p>In <strong>{ mortgageLength }</strong> years the property will be worth around <strong>&pound;{ futureValue }</strong> assuming <strong>{ expectedAnnualIncrease }%</strong> annual growth.</p>
        </div>
      </div>
    </section>
  );
};

const mapStateToProps = store => {
  return {
    mortgageLength: store.investmentState.mortgageLength,
    futureValue: store.investmentState.futureValue,
    expectedAnnualIncrease: store.investmentState.expectedAnnualIncrease
  };
};

export default connect(mapStateToProps)(Summary);
