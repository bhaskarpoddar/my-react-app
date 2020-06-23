import { CreateActionCreator, createDataReducer } from 'helpers';
import { ExpenseReportLineItemAPI,ExpenseReportAPI } from 'api';

const types = {
    CREATE_EXPENSE_REPORT: 'CREATE_EXPENSE_REPORT',
    SAVE_EXPENSE_REPORT: 'SAVE_EXPENSE_REPORT',
    SET_EXPENSE_REPORT_LINE_ITEM: 'EXPENSE-REPORTS-LINE_ITEM',
    CLEAR_EXPENSE_REPORT:'EXPENSE_REPORT',
};

const actions = {
    getExpenseReportLineItem: (reportID, relocatoinID) => CreateActionCreator.readAsync({
        type: types.SET_EXPENSE_REPORT_LINE_ITEM,
        apiCall: ExpenseReportLineItemAPI.setExpenseReportsLineItem,
        args: [reportID, relocatoinID]
    }),
    createExpenseReport: (relocationID, data)=> CreateActionCreator.create({
        type: types.CREATE_EXPENSE_REPORT,
        apiCall: ExpenseReportAPI.createExpenseReport,
        args: [relocationID, data]
    }),
    saveExpenseReport: (reloId, data)=> CreateActionCreator.update({
        type: types.SAVE_EXPENSE_REPORT,
        apiCall: ExpenseReportAPI.saveExpenseReport,
        args: [reloId, data]
    }),
    clearReportStorage:() => ({ type: types.CLEAR_EXPENSE_REPORT })

};

const defaultReducer = createDataReducer(types.SET_EXPENSE_REPORT_LINE_ITEM, {});
const customReducter = {
    [types.CLEAR_EXPENSE_REPORT] : () => ({}),
    [types.CREATE_EXPENSE_REPORT + '_CREATE']: (state, { payload }) => {
        return payload;
    },
    [types.SAVE_EXPENSE_REPORT + '_UPDATE']: (state) => {
        return state;
    },
    [types.SET_EXPENSE_REPORT_LINE_ITEM + '_FAILURE']:(state, {payload: {response}}) => ({
        error:{global:response.data.message}
    }),
    [types.CREATE_EXPENSE_REPORT + '_CREATE_FAILURE']:(state, {payload: {response}}) => ({error:{
        name:response.data.message
    },...state})
}
const reducer = (state, action, ...rest) => {
    const custom = customReducter[action.type];
    if(custom){
        return custom(state, action, ...rest);
    }
    return defaultReducer(state, action, ...rest)
}

export default {
    types,
    actions,
    reducer
};
