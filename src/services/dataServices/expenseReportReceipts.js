import { CreateActionCreator, createDataReducer } from 'helpers';
import { ExpenseReportReceipts } from 'api';

const types = {
    SET_EXPENSE_REPORTS_RECEIPTS: 'EXPENSE-REPORTS-RECEIPTS'
};

const actions = {
    getExpenseReportReceipts: (reportID) => CreateActionCreator.read({
        type: types.SET_EXPENSE_REPORTS_RECEIPTS,
        apiCall: ExpenseReportReceipts.gettingExpenseReportReceipt,
        args: [reportID]
    }),
    updateExpenseReportReceipts: (reportID, receiptsData) => CreateActionCreator.update({
        type: types.SET_EXPENSE_REPORTS_RECEIPTS,
        apiCall: ExpenseReportReceipts.updatingExpenseReportReceipt,
        args: [reportID, receiptsData]
    }),
    createExpenseReportReceipts: (reportID, receiptsData) => CreateActionCreator.create({
        type: types.SET_EXPENSE_REPORTS_RECEIPTS,
        apiCall: ExpenseReportReceipts.creatingExpenseReportReceipt,
        args: [reportID, receiptsData]
    }),
    deleteExpenseReportReceipts: (reportID) => CreateActionCreator.delete({
        type: types.SET_EXPENSE_REPORTS,
        apiCall: ExpenseReportReceipts.deletingExpenseReportReceipt,
        args: [reportID]
    }),
};

const reducer = createDataReducer(types.SET_EXPENSE_REPORTS_RECEIPTS, []);

export default {
    types,
    actions,
    reducer
};
