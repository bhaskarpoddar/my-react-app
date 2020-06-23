import { CreateActionCreator, createDataReducer } from 'helpers';
import { ReceiptsAPI } from 'api';

const type = "RECEIPTS";

const actions = {
    fetchReceipts: (relocationId, expenseReportId) => CreateActionCreator.read({
        type,
        apiCall: ReceiptsAPI.getReceipts,
        args: [relocationId, expenseReportId]
    }),
    uploadReceipts: (relocationId, expenseReportId, files, callback) => CreateActionCreator.create({
        type,
        apiCall: ReceiptsAPI.uploadReceipts,
        args: [relocationId, expenseReportId, files, callback],
        callback
    }),
    deleteReceipt: (relocationId, expenseReportId, receiptId) => CreateActionCreator.delete({
        type,
        apiCall: ReceiptsAPI.deleteReceipt,
        args: [relocationId, expenseReportId, receiptId],
        options: {
            key: "receiptId",
            value: receiptId,
        }
    })
};

const reducer = createDataReducer(type,[], undefined, undefined, function(state, {payload, type:actionType}){
    if('EXPENSE_REPORT' === actionType) {
        return []
    }
    return state;
});

export default {
    type,
    actions,
    reducer
};
