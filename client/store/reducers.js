import { InvestmentActions } from './actions';

import {
  getPropertyFutureValue
} from './utils';

const defaultState = {
  pricePaid: 120000,
  mortgageLength: 25,
  expectedAnnualIncrease: 5
};

export const InvestmentReducer = (state = defaultState, action) => {

  switch(action.type) {
    case InvestmentActions.PRICE_PAID_CHANGED:
      state = Object.assign({}, state, {
        pricePaid: action.pricePaid
      });
      break;
    case InvestmentActions.MORTGAGE_LENGTH_CHANGED:
      state = Object.assign({}, state, {
        mortgageLength: action.mortgageLength
      });
      break;
    case InvestmentActions.EXPECTED_ANNUAL_INCREASE_CHANGED:
      state = Object.assign({}, state, {
        expectedAnnualIncrease: action.expectedAnnualIncrease
      });
      break;
  }

  state = Object.assign({}, state, {
    futureValue: getPropertyFutureValue(state)
  });

  return state;
};
