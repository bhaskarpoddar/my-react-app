import { CreateActionCreator, createDataReducer } from 'helpers';
import { ExpenseReportItemAPI } from 'api';

const types = {
    EXPENSE_REPORT_ITEM: 'EXPENSE-REPORTS-ITEM'
};

const actions = {
    createExpenseReportItem: (reportID, lineItemData) => CreateActionCreator.create({
        type: 'CREATE_EXPENSE_REPORT_ITEM',
        apiCall: ExpenseReportItemAPI.creatingExpenseReportItem,
        args: [reportID, lineItemData]
    }),
    deletExepenseReportItem: (reportID, lineItemId, reloId) => CreateActionCreator.delete({
        type: types.EXPENSE_REPORT_ITEM,
        apiCall: ExpenseReportItemAPI.deletingExpenseReportItem,
        args: [reportID, lineItemId, reloId]
    }),
    getExepenseReportItem: (reportID, relocationID) => CreateActionCreator.readAsync({
        type: types.EXPENSE_REPORT_ITEM,
        apiCall: ExpenseReportItemAPI.gettingExpenseReportItem,
        args: [reportID, relocationID]
    }),
};

const defaultReducer = createDataReducer(types.EXPENSE_REPORT_ITEM, {});

const customReducer = {
    'CREATE_EXPENSE_REPORT_ITEM_CREATE_FAILURE': (state, { payload }) => {
        return {
            ...state,
            error: payload.response && payload.response.data
        };
    },
    'EXPENSE-REPORTS-LINE_ITEM':(state) => {
        return {
            ...state,
            error: undefined
        }
    }
}
const reducer = (state, action, ...rest) => {
    const custom = customReducer[action.type];
    if(customReducer[action.type]){
        return custom(state, action, ...rest);
    }
    return defaultReducer(state, action, ...rest)
}

export default {
    types,
    actions,
    reducer
};
