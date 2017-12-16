import React from 'react'
import { connect } from 'react-redux'

import {
  priceChangedAction,
  mortgageLengthChangedAction,
  expectedAnnualIncreaseChangedAction
} from '../../store/actions'

import TextField from '../Shared/TextField.jsx'

const BasicDetails = props => {
  const { pricePaid, mortgageLength, expectedAnnualIncrease } = props

  return (
    <div className='row'>
      <div className='col'>
        <div className='card mb-3'>
          <div className='card-header' role='tab' id='headingOne'>
            <h5 className='mb-0'>
              Your Property
            </h5>
          </div>
          <div className='card-body'>
            <TextField type='number'
              id='pricePaid'
              label='Price Paid'
              prefix='£'
              suffix='.00'
              value={pricePaid}
              onChange={value => props.priceChanged(Number(value))} />

            <TextField type='number'
              id='mortgageLength'
              label='Mortgage Length'
              suffix='years'
              value={mortgageLength}
              onChange={value => props.mortgageLengthChanged(Number(value))} />

            <TextField type='number'
              id='expectedAnnualIncrease'
              label='Expected annual increase'
              suffix='%'
              value={expectedAnnualIncrease}
              onChange={value => props.expectedAnnualIncreaseChanged(Number(value))} />

          </div>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = store => {
  return {
    pricePaid: store.investmentState.pricePaid,
    mortgageLength: store.investmentState.mortgageLength,
    expectedAnnualIncrease: store.investmentState.expectedAnnualIncrease
  }
}

const mapDispatchToProps = function (dispatch) {
  return {
    priceChanged: value => {
      dispatch(priceChangedAction(value))
    },
    mortgageLengthChanged: value => {
      dispatch(mortgageLengthChangedAction(value))
    },
    expectedAnnualIncreaseChanged: value => {
      dispatch(expectedAnnualIncreaseChangedAction(value))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BasicDetails)
