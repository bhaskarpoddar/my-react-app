import { combineReducers } from 'redux';
import { CreateActionCreator, createDataReducer } from 'helpers';
import { AllowancesAPI } from 'api';

const allowances_type = 'ALLOWANCES';
const acknowledgementLetter_type = "ACKNOWLEDGEMENTLETTER";

const actions = {
    fetchRecentAllowance: (relocationId) => CreateActionCreator.read({
        type: allowances_type,
        apiCall: AllowancesAPI.getRecentAllowance,
        args: [relocationId]
    }),
    fetchAcknowledgementLetter: (relocationId) => CreateActionCreator.read({
        type: acknowledgementLetter_type,
        apiCall: AllowancesAPI.getAcknowledgementLetter,
        args: [relocationId]
    }),
};

const allowancesReducer = createDataReducer(allowances_type);
const acknowledgementLetterReducer = createDataReducer(acknowledgementLetter_type);

const reducer = combineReducers({
    galAllowances: allowancesReducer,
    acknowledgementLetter: acknowledgementLetterReducer
});

export default {
    actions,
    reducer
};
