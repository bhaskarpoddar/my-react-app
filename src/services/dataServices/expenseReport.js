import { CreateActionCreator, createDataReducer } from 'helpers';
import { ExpenseReportAPI } from 'api';

const types = {
    SET_EXPENSE_REPORTS: 'EXPENSE_REPORTS',
    SUBMIT_EXPENSE_REPORTS: 'SUBMIT_EXPENSE_REPORTS',
    GET_VALIDATION_EXPENSE_REPORT: 'GET_VALIDATION_EXPENSE_REPORT',
};

const actions = {
    getExpenseReports: (relocationId) => CreateActionCreator.read({
        type: types.SET_EXPENSE_REPORTS,
        apiCall: ExpenseReportAPI.setExpenseReports,
        args: [relocationId]
    }),
    getValidationExpenseReports: (relocationId) => CreateActionCreator.read({
        type: types.GET_VALIDATION_EXPENSE_REPORT,
        apiCall: ExpenseReportAPI.validationExpenseReports,
        args: [relocationId]
    }),
    deleteExpenseReports: (relocationId,reportId) => CreateActionCreator.delete({
        type: types.SET_EXPENSE_REPORTS,
        apiCall: ExpenseReportAPI.deletingExpenseReports,
        args: [relocationId, reportId]
    }),

    submitExpenseReport: (relocationId,reportId) => CreateActionCreator.read({
        type: types.SUBMIT_EXPENSE_REPORTS,
        apiCall: ExpenseReportAPI.submitExpenseReport,
        args: [relocationId, reportId]
    }),

    downloadingExpenseReports: (reloID,reportId) => CreateActionCreator.read({
        type: types.SET_EXPENSE_REPORTS,
        apiCall: ExpenseReportAPI.downloadingExpenseReports,
        args: [reloID,reportId]
    })
};

const reducer = createDataReducer(types.SET_EXPENSE_REPORTS);
const validationReducer = createDataReducer(types.GET_VALIDATION_EXPENSE_REPORT, false);


export default {
    types,
    actions,
    reducer,
    validationReducer,
};
